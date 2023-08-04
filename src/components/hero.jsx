import { useState } from "react"
import Image from "next/image"
import { useRouter } from 'next/router';



export function Language(props){
    const router = useRouter();
    const locale = router.locale;

    console.log(locale)
    if (locale == 'en'){
        return(
            <>
            
            <div class="inline-flex rounded-md shadow-sm">
            <a href="/en" aria-current="page" class="px-4 py-2 text-sm font-medium text-green-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                English
            </a>
            <a href="/es" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                Español
            </a>
            <a href="/fr" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                Français
            </a>
            </div>

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
            </>
        )
    } else if(locale == 'fr'){
        return(
            <>
             <div class="inline-flex rounded-md shadow-sm">
            <a href="/en"  class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                English
            </a>
            <a href="/es"  class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                Español
            </a>
            <a href="/fr" aria-current="page" class="px-4 py-2 text-sm font-medium  text-green-700 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                Français
            </a>
            </div>

            <h1 className="text-sm text-green-600 font-medium">
                Présente Mosquera :
                </h1>
                        <h2 className=" font-sans text-4xl text-gray-800 font-sans font-bold md:text-5xl">
                           PLAG-E: Smart caring
                        </h2>
                        <p>
                            Utilisant l'Industrie 4.0, PLAG-E est un drone terrestre intelligent conçu pour l'élimination des mauvaises herbes nuisibles et le nettoyage des déchets dans les cultures.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="#about" className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none">
                                À propos de PLAG-E
                            </a>
                            <a href="#tech" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Comment a-t-il été fait ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
            </>
        )
    } else if(locale == 'es'){
        return(
            <>
            <div class="inline-flex rounded-md shadow-sm">
            <a href="/en"  class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                English
            </a>
            <a href="/es" aria-current="page" class="px-4 py-2 text-sm font-medium text-green-700 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                Español
            </a>
            <a href="/fr"  class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700">
                Français
            </a>
            </div>

            <h1 className="text-sm text-green-600 font-medium">
                Mosquera presenta:
                </h1>
                        <h2 className=" font-sans text-4xl text-gray-800 font-sans font-bold md:text-5xl">
                           PLAG-E: Smart caring
                        </h2>
                        <p>
                            Utilizando la Industria 4.0, PLAG-E es un dron terrestre inteligente diseñado para la eliminación de plagas de malezas y la limpieza de basura en cultivos.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="#about" className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none">
                                Sobre PLAG-E
                            </a>
                            <a href="#tech" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                ¿Como se hizo? 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
            </>
        )
    }
}

export default function Hero(){
    const router = useRouter();
    const locale = router.locale;
    let text = "An integrative project for"

    if (locale == 'en'){
        text = "An integrative project for"
    }else if(locale == 'fr'){
        text = "Un projet intégratif pour"
    }else if(locale == 'es'){
        text = "Un proyecto integrador para"
    }

    return (
        <>
            <section className="py-10">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    
                    <Language />
                    
                        
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
                    <p className="text-center text-sm text-gray-700 font-semibold">{text}</p>
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