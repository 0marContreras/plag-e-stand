import Image from "next/image"
import { useRouter } from "next/router"

export default function Tech () {
    const router = useRouter();
    const locale = router.locale;
    const team = [
        {
            avatar: "https://i.imgur.com/ndMcrZD.png",
            name: "Express",
            title: "Web backend and REST API",
            titleFR: "Backend web et API REST",
            titleES: "Backend web y REST API",
            desc: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications",
            descFR: "Express est un framework minimaliste et flexible pour les applications web Node.js qui offre un ensemble robuste de fonctionnalités pour les applications web et mobiles.",
            descES: "Express es un framework minimalista y flexible de aplicaciones web en Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles."
            
        },
        {
            avatar: "https://i.imgur.com/XXnsTrc.png",
            name: "Tailwind CSS",
            title: "Web frontend",
            titleFR: "Frontend web",
            titleES: "Frontend web",
            desc: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML",
            descFR: "Tailwind CSS est un framework CSS de première utilité qui permet de construire rapidement des sites web modernes sans jamais quitter votre HTML.",
            descES:"Tailwind CSS es un framework de CSS de utilidad primero para construir rápidamente sitios web modernos sin salir nunca de tu HTML."
            
        },
        {
            avatar: "https://i.imgur.com/JlWGm1J.png",
            name: "Mongo DB",
            title: "Main database",
            titleFR: "Base de données principale",
            titleES: "Base de datos principal",
            desc: "MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas",
            descFR: "MongoDB repose sur une architecture de mise à l'échelle qui est devenue populaire auprès des développeurs de toutes sortes pour le développement d'applications évolutives avec des schémas de données en constante évolution.",
            descES: "MongoDB está construido sobre una arquitectura de escalamiento que se ha vuelto popular entre desarrolladores de todo tipo para crear aplicaciones escalables con esquemas de datos en constante evolución."
            
        },
        {
            avatar: "https://i.imgur.com/7DkLDyg.png",
            name: "Android Studio",
            title: "Moblie app",
            titleFR: "Application mobile",
            titleES: "Aplicacion movil",
            desc: "Android Studio provides the fastest tools for building apps on every Android device. Wear OS Pairing. Intelligent code editor. Flexible built system. Multipreview API",
            descFR: "Android Studio offre les outils les plus rapides pour créer des applications sur chaque appareil Android. Pairage Wear OS. Éditeur de code intelligent. Système de construction flexible. API multipreview.",
            descES: "Android Studio proporciona las herramientas más rápidas para construir aplicaciones en cada dispositivo Android. Emparejamiento con Wear OS. Editor de código inteligente. Sistema de construcción flexible. API de Multipreview."
           
        },

        {
            avatar: "https://i.imgur.com/oaXWs2U.png",
            name: "Open CV",
            title: "Vision and lane detection",
            titleFR: "Vision et détection de voie",
            titleES: "Vision y deteccion del camino",
            desc: "Open CV is an open source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision",
            descFR: "OpenCV est une bibliothèque logicielle open source pour la vision par ordinateur et l'apprentissage automatique. OpenCV a été créé pour fournir une infrastructure commune pour la vision par ordinateur.",
            descES: "OpenCV es una biblioteca de software de código abierto para visión por computadora y aprendizaje automático. OpenCV fue creada para proporcionar una infraestructura común para la visión por computadora."
           
        },

        {
            avatar: "https://i.imgur.com/TMbyPju.png",
            name: "Arduino",
            title: "Secondary hardware control",
            titleFR: "Contrôle matériel secondaire",
            titleES: "Hardware secundario",
            desc: "Arduino consists of both a physical programmable circuit board (often referred to as a microcontroller) and a piece of software, or IDE",
            descFR: "Arduino se compose à la fois d'une carte de circuit programmable physique (souvent appelée microcontrôleur) et d'un logiciel, ou IDE.",
            descES: "Arduino consiste en una placa de circuito programable física (a menudo denominada microcontrolador) y un software, o IDE."
           
        },

        {
            avatar: "https://i.imgur.com/Zw8rcMc.png",
            name: "Raspberry PI",
            title: "Main hardware control",
            titleFR: "Contrôle matériel principal",
            titleES: "Control de hardware central",
            desc: "Raspberry Pi is a single-board computer that allows people from different backgrounds and levels of expertise to experience and learn to compute",
            descFR: "Raspberry Pi est un ordinateur à carte unique qui permet à des personnes de différents horizons et niveaux d'expertise de découvrir et d'apprendre le calcul.",
            descES: "Raspberry Pi es una computadora de placa única que permite a personas de diferentes ámbitos y niveles de experiencia experimentar y aprender a programar."
           
        },

        {
            avatar: "https://i.imgur.com/ij35ded.png",
            name: "Next JS",
            title: "Stand page",
            titleFR: "Page web du stand",
            titleES: "Web del stand",
            desc: "Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites",
            descFR: "Next.js est un framework React qui offre plusieurs fonctionnalités supplémentaires, notamment le rendu côté serveur et la génération de sites web statiques.",
            descES: "Next.js es un framework de React que habilita varias características adicionales, incluyendo renderizado del lado del servidor y generación de sitios web estáticos."
           
        },
    ]


    if (locale == 'en'){
        return (
            <section id="tech" className="mt-15 py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {` PLAG-E's development stack and hardware `}
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
                                            <Image
                                                src={item.avatar}
                                                className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                                alt="tech"
                                                width={640}
                                                height={626}
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
    }else if (locale == 'fr'){
        return (
            <section id="tech" className="mt-15 py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Développement de PLAG-E
                        </h3>
                        <p className="text-gray-600 mt-3">
                            PLAG-E utilise différentes technologies pour chacun des modules qui composent le projet.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-8 lg:grid-cols-2">
                            {
                                team.map((item, idx) => (
                                    <li key={idx} className="gap-8 sm:flex">
                                        <div className="w-full h-60">
                                            <Image
                                                src={item.avatar}
                                                className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                                alt="tech"
                                                width={640}
                                                height={626}
                                            />
                                        </div>
                                        <div className="mt-4 sm:mt-0">
                                            <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                            <p className="text-green-600">{item.titleFR}</p>
                                            <p className="text-gray-600 mt-2">{item.descFR}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }else if(locale == 'es'){
        return (
            <section id="tech" className="mt-15 py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Stack de desarrollo y hardware de PLAG-E
                        </h3>
                        <p className="text-gray-600 mt-3">
                            PLAG-E utiliza varias tecnologías para cada uno de los módulos que conforman el proyecto.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-8 lg:grid-cols-2">
                            {
                                team.map((item, idx) => (
                                    <li key={idx} className="gap-8 sm:flex">
                                        <div className="w-full h-60">
                                            <Image
                                                src={item.avatar}
                                                className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                                alt="tech"
                                                width={640}
                                                height={626}
                                            />
                                        </div>
                                        <div className="mt-4 sm:mt-0">
                                            <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                            <p className="text-green-600">{item.titleES}</p>
                                            <p className="text-gray-600 mt-2">{item.descES}</p>
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
}