import React from 'react'
import '../App.css'

export const Hero = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 class="ani mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Brands</h1>
                    <p class="ani2 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">have a look at the best brands there are on the market</p>
                    <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span class="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                        <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                            <a href="#" class="ani3 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <img src="../../linux.png" alt="linux" />
                            </a>
                            <a href="#" class="ani3 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <img src="../../public/nike.png" alt="nike" />
                            </a>
                            <a href="#" class="ani3 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <img src="../../public/adidas.png" alt="adidas" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
