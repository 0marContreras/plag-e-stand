import { useState } from "react"
import Image from "next/image"

export default function Hero(){


    return (
        <>
            <section className="py-10">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    
                        <h1 className="text-sm text-green-600 font-medium">
                            Mosquera presents:
                        </h1>
                        <h2 className=" font-sans text-4xl text-gray-800 font-sans font-bold md:text-5xl">
                           PLAG-E: Smart caring
                        </h2>
                        <p>
                            Using Industry 4.0, PLAG-E is an intelligent ground drone designed for the elimination of weed pests and cleaning of trash in crops. 
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="#about" className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none">
                                About PLAG-E
                            </a>
                            <a href="#tech" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                How was made? 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <Image
                            src={require('../../public/images/pl.jpeg')}
                            className=" md:rounded-tl-[108px]"
                            alt=""
                           width={800}
                           height={300}
                        />
        
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">An integrative project for</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <Image src={require('../../public/images/UTCH.png')} alt="partner" width="190" height="33" />
                        <Image src={require('../../public/images/bis.png')} alt="partner" width="190" height="33" />
                        <Image src={require('../../public/images/mosquera.png')} alt="partner" width="190" height="33" />
                        </div>
                </div>
            </section>
        </>
    )
}