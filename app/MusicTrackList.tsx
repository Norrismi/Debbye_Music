"use client";

import { useState } from 'react';
import MusicPlayerModal from '../next/components/MusicPlayerModal';

export default function MusicTrackList() {
    const [selectedTrack, setSelectedTrack] = useState<typeof tracks[number] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const tracks = [
        { number: 1, title: "Crossroads", duration: "4:11", vimeoId: 123456789 },
        { number: 2, title: "Bookmarks I Am Rock", duration: "5:01", vimeoId: "VIDEO_ID_2" },
        { number: 3, title: "Within These Prison Walls", duration: "4:24", vimeoId: "VIDEO_ID_3" },
        { number: 4, title: "Finished Armor", duration: "3:33", vimeoId: "VIDEO_ID_4" },
        { number: 5, title: "Sorry Seems To Be The Hardest Word", duration: "4:17", vimeoId: "VIDEO_ID_5" },
        { number: 6, title: "Yesterday", duration: "3:05", vimeoId: "VIDEO_ID_6" },
        { number: 7, title: "Even Now", duration: "4:55", vimeoId: "VIDEO_ID_7" },
        { number: 8, title: "Childless Mother", duration: "3:01", vimeoId: "VIDEO_ID_8" },
        { number: 9, title: "For A Dancer", duration: "4:04", vimeoId: "VIDEO_ID_9" },
        { number: 10, title: "I'm Sorry", duration: "3:32", vimeoId: "VIDEO_ID_10" },
        { number: 11, title: "Everything I Own", duration: "5:00", vimeoId: "VIDEO_ID_11" },
        { number: 12, title: "I Need To Be In Love", duration: "4:12", vimeoId: "VIDEO_ID_12" },
        { number: 13, title: "Prisoner In Disguise", duration: "3:20", vimeoId: "VIDEO_ID_13" },
        { number: 14, title: "Further On", duration: "4:08", vimeoId: "VIDEO_ID_14" },
        { number: 15, title: "Whisper Of An Angel", duration: "4:00", vimeoId: "VIDEO_ID_15" },
        { number: 16, title: "Desperado", duration: "3:45", vimeoId: "VIDEO_ID_16" },
    ];

    const handlePlayClick = (track: typeof tracks[number]) => {
        setSelectedTrack(track);
        setIsModalOpen(true);
    };

    return (
        <div className="w-full bg-gray-300 py-8 px-4">
            {/* Album Header Section */}
            <div className="flex items-start mb-6">
                <img
                    src="/assets/Debbye.jpg"
                    alt="Emotional Oblivion Album Cover"
                    className="w-32 h-32 object-cover mr-4"
                />
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-800">Emotional Oblivion</h1>
                    <p className="text-lg text-gray-600">Debbye</p>
                    <p className="text-sm text-gray-500">Mellow, jazzy-style</p>
                    <div className="flex gap-2 mt-2">
                        <button className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 text-sm font-semibold transition-colors">
                            Download: $9.99
                        </button>
                    </div>
                </div>
            </div>

            {/* Track List */}
            <ul className="divide-y divide-gray-200">
                {tracks.map((track) => (
                    <li
                        key={track.number}
                        className="flex items-center justify-between py-3 px-4 hover:bg-gray-200 transition group relative"
                    >
                        <div
                            className="flex items-center gap-6 flex-1 cursor-pointer"
                            onClick={() => handlePlayClick(track)}
                        >
                            <span className="text-gray-500 font-medium w-10 text-right">
                                {track.number.toString().padStart(2, "0")}
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 p-2 rounded"
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                            <span className="font-medium text-gray-800 flex-1">{track.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 text-sm w-12 text-right">{track.duration}</span>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 text-sm font-semibold transition-colors">
                                $0.99
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Music Player Modal */}
            {isModalOpen && selectedTrack && (
                <MusicPlayerModal
                    track={selectedTrack}
                    vimeoId={selectedTrack.vimeoId}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}