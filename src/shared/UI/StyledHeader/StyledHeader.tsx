import React from 'react'

type TProps = {
    tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
    children: React.ReactNode
    className?: string
}
const StyledHeader = (props: TProps) => {
    const { tagName, children, ...otherProps } = props
    const Tag = tagName
    return <Tag {...otherProps}>{children}</Tag>
}

export default StyledHeader
