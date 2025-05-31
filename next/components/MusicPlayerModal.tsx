import { useEffect, useRef, useState } from 'react';
import Vimeo from '@vimeo/player';

interface Track {
    title: string;
    duration: string;
}

interface MusicPlayerModalProps {
    track: Track;
    onClose: () => void;
    vimeoId: string;
}

const MusicPlayerModal = ({ track, onClose, vimeoId }: MusicPlayerModalProps) => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (!playerRef.current || !vimeoId) return;

        const player = new Vimeo(playerRef.current, {
            id: Number(vimeoId),
            width: 0,
            height: 0,
            controls: false,
            autoplay: false,
        });

        player.on('loaded', async () => {
            const dur = await player.getDuration();
            setDuration(dur);
        });

        player.on('timeupdate', async () => {
            const time = await player.getCurrentTime();
            setCurrentTime(time);
        });

        player.on('play', () => setIsPlaying(true));
        player.on('pause', () => setIsPlaying(false));

        return () => {
            player.destroy();
        };
    }, [vimeoId]);

    const handlePlay = async () => {
        if (!playerRef.current) return;
        const player = new Vimeo(playerRef.current);
        await player.play();
    };

    const handlePause = async () => {
        if (!playerRef.current) return;
        const player = new Vimeo(playerRef.current);
        await player.pause();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-80 shadow-lg relative">
                {/* Track Image */}
                <img
                    src="/assets/Debbye.jpg"
                    alt="Track Cover"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                {/* Track Info */}
                <h2 className="text-xl font-bold text-white">{track.title}</h2>
                <p className="text-sm text-gray-400 mb-4">Debbye</p>
                {/* Progress Bar */}
                <div className="relative mb-4">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={async (e) => {
                            if (!playerRef.current) return;
                            const player = new Vimeo(playerRef.current);
                            await player.setCurrentTime(Number(e.target.value));
                        }}
                        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toFixed(0).padStart(2, '0')}</span>
                        <span>{track.duration}</span>
                    </div>
                </div>
                {/* Playback Controls */}
                <div className="flex justify-center gap-4 mb-4">
                    <button
                        onClick={handlePlay}
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14.752 11.168l-6.336-3.664A1 1 0 007 8.464v7.072a1 1 0 001.416.894l6.336-3.664a1 1 0 000-1.598z"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handlePause}
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 9v6m4-6v6"
                            />
                        </svg>
                    </button>
                </div>
                {/* Exit Button */}
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                        Exit
                    </button>
                </div>
                {/* Hidden Vimeo Player */}
                <div ref={playerRef} className="hidden" />
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MusicPlayerModal;