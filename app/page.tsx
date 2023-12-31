import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3">
      <Intro />
      <SectionDivider/>
      <About/>
    </main>
  );
}
