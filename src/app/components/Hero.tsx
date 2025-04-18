import { motion } from "framer-motion";
import Typewriter from "./Typerwriter";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 text-neutral-800 transition-colors duration-1000 gap-10 md:gap-2">

            {/* Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center z-0"
            />

            {/* Left side: Headline (top left on desktop) */}
            <div className="flex justify-start md:justify-start w-full md:w-1/2 z-20">
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

            {/* Right side: Hero Image and Intro Block */}
            <div className="flex flex-col items-center md:items-end w-full md:w-1/2 gap-6 z-20">

                {/* Hero image */}
                <motion.img
                    src="/img1.jpg"
                    alt="Decorative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block w-40 h-40 lg:w-112 lg:h-100 object-cover rounded-2xl shadow-xl"

                />

                {/* Intro block */}
                <div className="bg-peach/30 backdrop-blur-md p-6 rounded-xl shadow-md max-w-md">
                    <p className="text-lg md:text-2xl leading-relaxed">
                        Hey, I&apos;m Jacob — a full stack developer from North Carolina, 
                        passionate about crafting modern software experiences, exploring new tech, 
                        and enjoying the occasional fishing trip.
                    </p>
                </div>
            </div>

        </section>
    );
}
