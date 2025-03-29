import { motion } from 'framer-motion';

export default function About() {
    return (
        <div>
            {/* About */}
            <section className="py-24 px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-center text-caput">About Me</h2>
                    <p className="text-base leading-7">
                        I&apos;m a full-stack software developer with a strong interest in backend systems, database management, and cloud infrastructure.
                        I enjoy solving complex problems, optimizing performance, and exploring the internals of how code runs.
                        My experience spans academic projects, IT consulting outreach, and professional hands-on hardware work across diverse mobile platforms.
                        <br /><br />
                        I&apos;m comfortable with many languages like C++ and Python. Although I am always learning new languages and technologies.
                        I&apos;m always exploring new tech and approaches to stay adaptable and efficient.
                        I collaborate well in teams and value clear communication and thoughtful problem-solving.
                    </p>
                </motion.div>
            </section>
        </div>
    )
}