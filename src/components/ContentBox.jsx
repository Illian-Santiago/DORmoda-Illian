import React from 'react'

export const ContentBox = ({ title, content, alt, src, w, h }) => {
    return (
        <div className='bg-slate-800'>
            <h1 className='rubik-vinyl-regular p-5 text-3xl font-bold'>{title}</h1>
            <div className='p-5'>
                <div className=''>
                    <img src={src} alt={alt} width={w} height={h} />
                </div>
                <p className=''>{content}</p>
            </div>
        </div>
    )
}
