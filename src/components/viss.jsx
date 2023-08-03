export default function Vision() {

    const plans = [
        {
            name: "Our mission",
             
            features: [
                "Our mission is to provide farmers with the best technological solutions that improve efficiency, productivity and sustainability in the agricultural industry",

            ],

            featuresFR: [
                "Notre mission est de fournir aux agriculteurs les meilleures solutions technologiques qui améliorent l'efficacité, la productivité et la durabilité dans l'industrie agricole."
            ],

            featuresES: [
                "Nuestra misión es proporcionar a los agricultores las mejores soluciones tecnológicas que mejoren la eficiencia, productividad y sostenibilidad en la industria agrícola."
            ]
        },
        {
            name: "Our vision",
            
            features: [

                "Our vision is to create a future where technology and agriculture seamlessly integrate, where our solutions transform the way crops are cultivated and improve the quality and quantity of the crops.",
                
            ],

            featuresFR: [
                "Notre vision est de créer un avenir où la technologie et l'agriculture s'intègrent de manière transparente, où nos solutions transforment la manière dont les cultures sont cultivées et améliorent la qualité et la quantité des récoltes."
            ],

            featuresES: [
                "Nuestra visión es crear un futuro en el que la tecnología y la agricultura se integren perfectamente, donde nuestras soluciones transformen la forma en que se cultivan los cultivos y mejoren la calidad y cantidad de las cosechas."
            ]
        },
    ];

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Mission and vision
                    </h3>
                </div>
                <div className='flex-1 mt-16 space-y-6 gap-10 sm:grid sm:grid-cols-1 sm:space-y-0 lg:grid-cols-2'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className=' flex items-stretch flex-col p-8 rounded-xl border-2'>
                                <div>
                                    <span className='text-green-600 font-medium'>
                                        {item.name}
                                    </span>
                                
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <p key={idx} className='text-xl flex items-center gap-5'>
                                                {featureItem}
                                            </p>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};