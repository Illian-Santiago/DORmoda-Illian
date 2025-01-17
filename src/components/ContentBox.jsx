import React from 'react'

export const ContentBox = ({ title, content, alt, src, w, h }) => {
    return (
        <div className='bg-slate-800'>
            <h1 className='rubik-vinyl-regular p-5 text-3xl font-bold'>{title}</h1>
            <section class="bg-white dark:bg-gray-900">
                <div class="varela-round-regular text-lg grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="bg-yellow-700 rounded-lg rounded-e-none mr-auto p-12 place-self-center lg:col-span-7">
                        {content}
                    </div>
                    <div class="bg-yellow-700 flex justify-center rounded-lg p-3 lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={src} alt={alt} height={h} width={w}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
