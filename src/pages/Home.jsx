import Hero from "../components/sections/Hero";
import Menu from "../components/sections/Menu";
import Promotion from "../components/sections/Promotion";
import Info from "../components/sections/Info";

export default function Home() {
  return (
    <div className="mt-20  lg:mt-0">
      <Hero />
      <Menu/>
      <Promotion/>
      <Info/>
    </div>
  );
}
