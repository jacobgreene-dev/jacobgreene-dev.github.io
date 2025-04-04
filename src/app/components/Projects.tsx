import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <div>
            {/* Projects */}
            <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-caput text-center mb-12"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
                        onClick={() => window.open("https://github.com/jacobgreene-dev/jacobgreene-dev.github.io")}
                    >
                        <h3 className="text-xl font-semibold mb-2">MY-PORTFOLIO</h3>
                        <p className="text-sm mb-4">
                            Next.js portfolio site with TypeScript, Tailwind CSS, and Framer Motion animations. Hosted on Github Pages.
                        </p>
                        <div className="flex gap-3 text-sm flex-wrap">
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>Tailwind</span>
                            <span>GitHub</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
                        onClick={() => window.open("https://github.com/jacobgreene-dev/ideal-bet")}
                    >
                        <h3 className="text-xl font-semibold mb-2">IDEAL-BET</h3>
                        <p className="text-sm mb-4">
                            NBA analytics web app for sports betting insights — built with Next.js, TypeScript, and API integration.
                        </p>
                        <div className="flex gap-3 text-sm flex-wrap">
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>Python</span>
                            <span>Tailwind</span>
                            <span>Machine Learning</span>
                            <span>REST API</span>
                            <span>GitHub</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
                        onClick={() => window.open("https://github.com/jacobgreene-dev/CSC471-JetWebApp")}
                    >
                        <h3 className="text-xl font-semibold mb-2">CSC471-JET-WEB-APP</h3>
                        <p className="text-sm mb-4">
                            Full-stack airline booking system built as part of an academic capstone project for CSC471.
                            The application simulates a private aircraft dealership platform,
                            supporting role-based access and real-time management of transactions.
                        </p>
                        <div className="flex gap-3 text-sm flex-wrap">
                            <span>Laravel</span>
                            <span>Blade</span>
                            <span>PHP</span>
                            <span>PostgreSQL</span>
                            <span>Tailwind</span>
                            <span>GitHub</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
                        onClick={() => window.open("https://github.com/jacobgreene-dev/Cardinal")}
                    >
                        <h3 className="text-xl font-semibold mb-2">CARDINAL</h3>
                        <p className="text-sm mb-4">
                            Spring application for individuals interested in hiking to find like-minded individuals for adventures on local trails.
                            Including a map of local trails to the Piedmont area,
                            a chatroom based on interest in a particular trail/park,
                            and wildlife information.

                        </p>
                        <div className="flex gap-3 text-sm flex-wrap">
                            <span>Spring Boot</span>
                            <span>Thymeleaf</span>
                            <span>Java</span>
                            <span>Javascript</span>
                            <span>H2 Database</span>
                            <span>GitHub</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}