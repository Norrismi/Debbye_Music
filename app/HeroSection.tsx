import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative z-10 flex flex-col justify-end text-left py-32 px-4 w-full">
            {/* Splash background image overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
                    alt="Pink fun splash background"
                    fill
                    style={{ objectFit: "cover", opacity: 0.5 }}
                    priority
                />
            </div>
            {/* Hero content - Aligned to the bottom-left */}
            <div className="relative z-10 flex flex-col items-start justify-end w-full max-w-md">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-lg mb-4">
                    Join our mailing list for the latest news
                </h1>
                {/* Email signup form */}
                <form className="flex flex-col sm:flex-row gap-4 w-full">
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