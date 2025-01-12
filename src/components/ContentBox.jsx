import React from 'react'

export const ContentBox = ({title, content, alt, src, w, h}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <img src={src} alt={alt} width={w} height={h}/>
                {content}
            </div>
        </div>  
    )
}
