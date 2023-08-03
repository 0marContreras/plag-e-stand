export default function Vision() {

    const plans = [
        {
            name: "Our mission",
             
            features: [
                "Our mission is to provide farmers with the best technological solutions that improve efficiency, productivity and sustainability in the agricultural industry",

            ],
        },
        {
            name: "Our vision",
            
            features: [

                "Our vision is to create a future where technology and agriculture seamlessly integrate, where our solutions transform the way crops are cultivated and improve the quality and quantity of the crops.",
                
            ],
        },
    ];

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pricing for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
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