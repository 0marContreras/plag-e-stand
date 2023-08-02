export default function Miss () {

        const features = [
            {
                icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z"></path>
                    <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"></path>
                    <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"></path>
                    <path d="M12 15l0 -6"></path>
                </svg>,
                title: "Ecologic",
                desc: "PLAG-E is careful with the entire environment and promises excellent care for your crops."
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>,
                title: "Analytics",
                desc: "PLAG-E allows you to view the statistics of the collected garbage in a simple and easy-to-understand graph."
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651"></path>
                        <path d="M16 22l5 -5"></path>
                        <path d="M21 21.5v-4.5h-4.5"></path>
                    </svg>,
                title: "Trackeable",
                desc: "PLAG-E has an integrated GPS that allows the user to know its location at all time."
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M9 9l.01 0"></path>
                        <path d="M15 9l.01 0"></path>
                        <path d="M8 13a4 4 0 1 0 8 0h-8"></path>
                    </svg>,
                title: "User friendly",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" className="w-6 h-6">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
                        <path d="M11 4h2"></path>
                        <path d="M12 17v.01"></path>
                    </svg>,
                title: "Multiplatform",
                desc: "Controlled through a multi-platform application, PLAG-E can be monitored from any mobile device and computer."
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 10h4v4h-4z"></path>
                        <path d="M10 10l-3.5 -3.5"></path>
                        <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96"></path>
                        <path d="M14 10l3.5 -3.5"></path>
                        <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96"></path>
                        <path d="M14 14l3.5 3.5"></path>
                        <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96"></path>
                        <path d="M10 14l-3.5 3.5"></path>
                        <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96"></path>
                    </svg>,
                title: "Autonomous",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
            },
        ]
    
        return (
            <section id="about" className="mt-16 py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            PLAG-E is the best solution for your crops's problems
                        </h3>
                        <p className="mt-3">
                            PLAG-E was developed so that you don't have to worry about the cleanliness of your crops and can use your time for something else.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="space-y-3">
                                        <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }