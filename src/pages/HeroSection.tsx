import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                    Build Your Perfect Resume with Ease
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-10">
                    Create your resume in minutes by writing JSON, preview it live, and export it as a polished PDF with a single click.
                </p>
            </div>
            <div className=" transform translate-y-1/2 z-50">
                <a
                    href="#get-started"
                    className="bg-primary text-primary-foreground text-lg font-medium py-3 px-6 rounded-full shadow-md hover:bg-primary/90 transition-colors"
                >
                    Get Started
                </a>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-muted/30 to-background"></div>
        </section>
    );
};

export default HeroSection;
