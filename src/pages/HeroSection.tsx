import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                        Build Your Perfect Resume with Ease
                    </h1>
                    <p className="text-lg sm:text-xl mb-8">
                        Create your resume in minutes by writing JSON, preview it live, and export it as a polished PDF with a single click.
                    </p>
                    <a
                        href="#get-started"
                        className="inline-block bg-primary text-white text-lg py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-all"
                    >
                        Get Started
                    </a>
                </div>
            </section>
        </>
    )
}

export default HeroSection