import React from 'react'
import ContentLoader from 'react-content-loader'

const CardSkeleton = ({ props }: { props?: any }) => {
    return (
        <ContentLoader
            key="skeleton"
            width={350}
            height={350}
            viewBox="0 0 350 350"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            {...props}
        >
            <rect x="10" y="260" rx="2" ry="2" width="320" height="15" />
            <rect x="10" y="285" rx="3" ry="3" width="15" height="15" />
            <rect x="30" y="285" rx="3" ry="3" width="290" height="15" />

            <rect x="10" y="305" rx="3" ry="3" width="15" height="15" />
            <rect x="30" color='#ec1a1a' y="305" rx="3" ry="3" width="290" height="15" />

            <rect x="0" y="0" rx="10" ry="10" width="350" height="250" />
        </ContentLoader>
    )
}

export default CardSkeleton
