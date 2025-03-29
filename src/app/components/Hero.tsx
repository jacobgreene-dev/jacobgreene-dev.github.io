import { motion } from "framer-motion";
import Typewriter from "./Typerwriter";

export default function Hero() {
    return (
        <div>
            {/* Hero */}
            <section className="relative min-h-screen px-6 pt-24 text-neutral-800 transition-colors duration-1000">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center z-0"
                />

                {/* Desktop headline */}
                <div className="hidden md:flex absolute top-1/4 left-10 z-20">
                    <div className="bg-peach/30 backdrop-blur-md p-6 rounded-xl shadow-md">
                        <h1 className="text-4xl md:text-6xl font-bold flex flex-wrap">
                            I am a&nbsp;
                            <Typewriter
                                words={[
                                    "Web Developer",
                                    "Front End Engineer",
                                    "Back End Engineer",
                                    "Full Stack Engineer",
                                    "Database Engineer",
                                    "Coding Enthusiast",
                                    "Code Optimizer",
                                    "Software Student",
                                ]}
                            />
                        </h1>
                    </div>
                </div>

                {/* Hero image - Desktop */}
                <motion.img
                    src="/img1.jpg"
                    alt="Decorative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 2.5 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block absolute top-50 right-56 w-40 h-40 object-cover rounded-2xl shadow-xl z-10"
                />

                {/* Intro block */}
                <div className="relative z-20 mt-4 md:mt-0 md:absolute md:bottom-20 md:right-20 max-w-md mx-auto p-4">
                    <div className="bg-peach/30 backdrop-blur-md p-6 rounded-xl shadow-md">
                        <p className="text-lg md:text-2xl leading-relaxed">
                            Hey, I&apos;m Jacob — a full stack developer from North Carolina, passionate about crafting modern web experiences, exploring silicon tech, and enjoying the occasional fishing trip.
                        </p>
                    </div>
                </div>

                {/* Hero image - Mobile */}
                <div className="block md:hidden mt-6 flex justify-center w-full z-10">
                    <motion.img
                        src="/img1.jpg"
                        alt="Decorative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 2.3 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-130 w-32 h-32 object-cover rounded-2xl shadow-md "
                    />
                </div>

            </section >
        </div>
    )
}