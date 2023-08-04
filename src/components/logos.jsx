import { useRouter } from "next/router";
import Image from "next/image";

export default function Logos(){
    const router =  useRouter();
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

    <section className="py-10">
        <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">{text}</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <Image src={require('../../public/images/UTCH.png')} alt="partner" width="190" height="33" />
                        <Image src={require('../../public/images/bis.png')} alt="partner" width="190" height="33" />
                        <Image src={require('../../public/images/mosquera.png')} alt="partner" width="190" height="33" />
                    </div>
                </div>
    </section>

    )
}