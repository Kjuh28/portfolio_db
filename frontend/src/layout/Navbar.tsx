import { Button } from "../components/Button"
import { Link } from 'react-scroll'

export function Navbar(){
    return(
        <nav className="w-full sticky bg-black top-0 scroll-smooth z-50">
            <div className="font-bold sm:mx-24 sm:text-4xl text-3xl flex justify-between p-4 sm:p-8">
                <h2>Portifolio</h2>
                <h2><Link to="contact" spy={true} smooth={true} duration={1000} ><Button tittle={'Contato'}/> </Link></h2>
            </div>
        </nav>
    )
}