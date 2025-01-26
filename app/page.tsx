
import Navbar from "./components/Navbar"
import TopBackground from "./components/Hero/TopBackground";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <div className="w-screen h-screen"></div>
      <Navbar />
      <TopBackground />
    </div>
  );
}
