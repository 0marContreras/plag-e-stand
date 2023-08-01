import Image from "next/image"


export default function Tech () {

    const team = [
        {
            avatar: "https://i.imgur.com/ndMcrZD.png",
            name: "Express",
            title: "Web backend and Rest API",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            
        },
        {
            avatar: "https://i.imgur.com/XXnsTrc.png",
            name: "Tailwind CSS",
            title: "Web frontend",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            
        },
        {
            avatar: "https://i.imgur.com/JlWGm1J.png",
            name: "Mongo DB",
            title: "Main database",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            
        },
        {
            avatar: "https://i.imgur.com/7DkLDyg.png",
            name: "Android Studio",
            title: "Moblie app",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
           
        },

        {
            avatar: "https://i.imgur.com/oaXWs2U.png",
            name: "Open CV",
            title: "Vision and lane detection",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
           
        },

        {
            avatar: "https://i.imgur.com/TMbyPju.png",
            name: "Arduino",
            title: "Secondary hardware control",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
           
        },

        {
            avatar: "https://i.imgur.com/Zw8rcMc.png",
            name: "Raspberry PI",
            title: "Main hardware control",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
           
        },

        {
            avatar: "https://i.imgur.com/ij35ded.png",
            name: "Next JS",
            title: "Stand page",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
           
        },
    ]

    return (
        <section className="mt-15 py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        PLAG-E's development stack and hardware
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 lg:grid-cols-2">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="gap-8 sm:flex">
                                    <div className="w-full h-60">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt="tech"
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-green-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}