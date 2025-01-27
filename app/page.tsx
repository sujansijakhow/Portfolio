
import Navbar from "./components/Navbar"
import TopBackground from "./components/Hero/TopBackground";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <Section />
      <Navbar />
      <TopBackground />
    </div>
  );
}
