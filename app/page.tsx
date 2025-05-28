import Image from "next/image";
import HeroSection from "./HeroSection";
import MusicTrackList from "./MusicTrackList";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-pink-200 overflow-hidden">
      <HeroSection />
      <MusicTrackList />
    </div>
  );
}