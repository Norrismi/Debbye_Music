"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function HeroSection() {
    const [videoLoadFailed, setVideoLoadFailed] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="hero bg-transparent"> {/* Use hero class from global.css */}
            {/* Splash background image overlay (fallback if video fails) */}
            {videoLoadFailed && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
                        alt="Pink fun splash background"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            )}
            {/* Hero background video overlay */}
            {isClient && (
                <iframe
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                    src="https://player.vimeo.com/video/1093756976?autoplay=1&loop=1&muted=1&background=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    onError={() => setVideoLoadFailed(true)}
                    title="Vimeo Background Video"
                ></iframe>
            )}
            {/* Hero content - Aligned to the bottom-left */}
            <div className="hero-content flex-col items-start justify-end w-full max-w-sm"> {/* Use hero-content class */}
                <h1 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-lg mb-3">
                    Join our mailing list for the latest news
                </h1>
                <form className="flex flex-col sm:flex-row gap-3 w-full">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="rounded px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-pink-400 w-full sm:w-auto"
                    />
                    <button
                        type="submit"
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded px-8 py-2 transition-colors shadow-md"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col p-0 m-0">
            <HeroSection />
        </div>
    );
}