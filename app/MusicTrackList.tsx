export default function MusicTrackList() {
    return (
      <div className="w-full bg-gray-300 py-8 px-4">
    
        <ul className="divide-y divide-gray-200">
          {[
            { number: 1, title: "Crossroads", duration: "4:11" },
            { number: 2, title: "Bookmarks I Am Rock", duration: "5:01" },
            { number: 3, title: "Within These Prison Walls", duration: "4:24" },
            { number: 4, title: "Finished Armor", duration: "3:33" },
            { number: 5, title: "Sorry Seems To Be The Hardest Word", duration: "4:17" },
            { number: 6, title: "Yesterday", duration: "3:05" },
            { number: 7, title: "Even Now", duration: "4:55" },
            { number: 8, title: "Childless Mother", duration: "3:01" },
            { number: 9, title: "For A Dancer", duration: "4:04" },
            { number: 10, title: "I’m Sorry", duration: "3:32" },
            { number: 11, title: "Everything I Own", duration: "5:00" },
            { number: 12, title: "I Need To Be In Love", duration: "4:12" },
            { number: 13, title: "Prisoner In Disguise", duration: "3:20" },
            { number: 14, title: "Further On", duration: "4:08" },
            { number: 15, title: "Whisper Of An Angel", duration: "4:00" },
            { number: 16, title: "Desperado", duration: "3:45" },
          ].map((track) => (
            <li
              key={track.number}
              className="flex items-center justify-between py-3 px-4 hover:bg-gray-200 transition"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="text-gray-500 font-medium w-8 text-right">
                  {track.number.toString().padStart(2, "0")}
                </span>
                <span className="font-medium text-gray-800 flex-1">{track.title}</span>
              </div>
              <div className="flex items-center gap-3">
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
      </div>
    );
  }