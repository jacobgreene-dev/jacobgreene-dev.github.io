export default function CTA() {
    return (
        <div>
            {/* CTA */}
            <section className="py-12 px-4 text-center">
                <p className="text-lg md:text-xl text-neutral-700">
                    Currently open to full-time opportunities — let&apos;s build something great together.
                </p>
                <a
                    href="/resume.pdf"
                    download
                    className="inline-block mt-4 px-6 py-2 bg-caput text-white font-medium rounded-xl hover:bg-caput/90 transition"
                >
                    Download My Resume
                </a>
            </section>
        </div>
    )
}