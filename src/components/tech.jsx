import Image from "next/image"


export default function Tech () {

    const team = [
        {
            avatar: "https://i.imgur.com/ndMcrZD.png",
            name: "Express",
            title: "Web backend and Rest API",
            desc: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications",
            
        },
        {
            avatar: "https://i.imgur.com/XXnsTrc.png",
            name: "Tailwind CSS",
            title: "Web frontend",
            desc: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML",
            
        },
        {
            avatar: "https://i.imgur.com/JlWGm1J.png",
            name: "Mongo DB",
            title: "Main database",
            desc: "MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas",
            
        },
        {
            avatar: "https://i.imgur.com/7DkLDyg.png",
            name: "Android Studio",
            title: "Moblie app",
            desc: "Android Studio provides the fastest tools for building apps on every Android device. Wear OS Pairing. Intelligent code editor. Flexible built system. Multipreview API",
           
        },

        {
            avatar: "https://i.imgur.com/oaXWs2U.png",
            name: "Open CV",
            title: "Vision and lane detection",
            desc: "Open CV is an open source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision",
           
        },

        {
            avatar: "https://i.imgur.com/TMbyPju.png",
            name: "Arduino",
            title: "Secondary hardware control",
            desc: "Arduino consists of both a physical programmable circuit board (often referred to as a microcontroller) and a piece of software, or IDE",
           
        },

        {
            avatar: "https://i.imgur.com/Zw8rcMc.png",
            name: "Raspberry PI",
            title: "Main hardware control",
            desc: "Raspberry Pi is a single-board computer that allows people from different backgrounds and levels of expertise to experience and learn to compute",
           
        },

        {
            avatar: "https://i.imgur.com/ij35ded.png",
            name: "Next JS",
            title: "Stand page",
            desc: "Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites",
           
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
                        PLAG-E uses various technologies for each of the modules that make up the project.
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