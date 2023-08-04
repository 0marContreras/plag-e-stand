import Image from "next/image"
import { useRouter } from "next/router"

export default function Quote () {
    const router = useRouter();
    const locale = router.locale;
    let text = " “You have to get up and plant the seed and see if it grows, but you can't just wait around, you have to water it and take care of it.“ ";
    
    if (locale == 'en'){
        text = "“You have to get up and plant the seed and see if it grows, but you can't just wait around, you have to water it and take care of it.“"
    }else if(locale == 'fr'){
        text = " “Vous devez vous lever, planter la graine et voir si elle pousse, mais vous ne pouvez pas simplement attendre, vous devez l'arroser et en prendre soin.“ "
    }else if(locale == 'es'){
        text = "“Tienes que levantarte y plantar la semilla para ver si crece, pero no puedes simplemente esperar, debes regarla y cuidarla.“ " 
    }


    return (
        <section className="mt-20 py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-gray-800 text-xl text-center font-semibold sm:text-2xl">
                                {text}
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <Image 
                            src={require('../../public/images/bo.jpg')} 
                            className="w-16 h-16 rounded-full"
                            width={0}
                            height={0} 
                            />
                            <div>
                                <span className="block text-gray-800 font-semibold">Bootsy Collins</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}