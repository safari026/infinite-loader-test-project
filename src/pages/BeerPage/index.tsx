import { useCallback, useEffect, useRef, useState } from 'react'

import StyledHeader from '../../shared/UI/StyledHeader/StyledHeader'

import Loader from '../../shared/UI/Loader/Loader'
import style from './BeerPage.module.scss'
import useFetch from '../../entities/beer/hooks/useFetch'
import Card from '../../entities/beer/Card/Card'

const BeerPage = () => {
    const [page, setPage] = useState<number>(1)

    const { list, error, loading } = useFetch(page)

    const loader = useRef<HTMLDivElement | null>(null)

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0]
            if (target.isIntersecting && !loading) {
                setPage((prev) => prev + 1)
            }
        },
        [loading]
    )

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '20px',
            threshold: 0,
        }
        const observer = new IntersectionObserver(handleObserver, option)
        if (loader.current) {
            observer.observe(loader.current)
        }
        return () => {
            if (loader.current) {
                observer.unobserve(loader.current)
            }
        }
    }, [handleObserver])

    return (
        <>
            <div className={style.greeting}>
                <StyledHeader tagName="h1" className={style.greetingTitle}>
                    Look the best sorts of Beer in the worlds!
                </StyledHeader>
            </div>
            <div className={style.cardGrid}>
                {list.map((element) => (
                    <Card {...element} />
                ))}
                {true && (
                    <div className={style.cardLoader}>
                        <Loader />
                    </div>
                )}
                {error && <p>Error!</p>}
                <div ref={loader}></div>
            </div>
        </>
    )
}

export default BeerPage
