import style from './Card.module.scss'
import StyledHeader from '../../../shared/UI/StyledHeader/StyledHeader'

export type DataItem = {
    id: string
    name: string
    tagline: string
    image_url: string
    description: string
}
const Card = (props: DataItem) => {
    const { id, name, image_url, tagline, description } = props
    return (
        <div className={style.cardBody} key={id}>
            <StyledHeader tagName="h2" className={style.cardTitle}>
                {name}
            </StyledHeader>
            <p>{tagline}</p>
            <img src={image_url} alt="" className={style.cardImg} />
            <p className={style.cardText}>{description}</p>
        </div>
    )
}

export default Card
