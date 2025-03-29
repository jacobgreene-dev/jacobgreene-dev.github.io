import { motion } from "framer-motion"

export default function Tools() {
    return (
        <div>
            {/* Tools */}
            <section className="py-24 px-4 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-caput text-center mb-12"
                >
                    Tools & Technologies
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
                    {["C", "C++", "Python3", "Java", "Typescript", "React", "GitHub", "Next.js", "Spring", "SQL", "PostgreSQL", "Docker", "Azure", "Mircosoft Suite", "Windows", "Linux"].map(tool => (
                        <span
                            key={tool}
                            className="bg-fawn/60 text-caput text-center px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    )
}