import { Navbar } from "../layout/Navbar";
import { Abilities } from "./Abilities";
import { About } from "./About";
import { Contact } from "./Contact";
import { Profile } from "./Profile";
import { Projects } from "./Projects";

export function Home(){
    return(
        <div className="text-white bg-black h-full w-full">
            <Navbar />
            <Profile />
            <About />
            <Abilities />
            <Projects />
            <Contact />
        </div>
    )
}