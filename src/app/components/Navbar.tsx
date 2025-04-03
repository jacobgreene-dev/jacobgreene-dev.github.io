export default function Navbar() {
    return (
        <div>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-sm">
                <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <span className="text-lg font-semibold text-caput">Jacob Greene</span>
                    <ul className="hidden sm:flex gap-6 text-sm text-caput">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="/resume.pdf" download className="hover:underline">Resume</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}