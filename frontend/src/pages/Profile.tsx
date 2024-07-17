import { Button } from "../components/Button";

export function Profile(){
    return(
        <section id="profile" className="mx-auto p-8 sm:mx-32">
            <div className="place-items-center sm:my-8 grid lg:flex xl:justify-between text-center lg:text-start">
                <div className="max-w-xl w-full ">
                    <p className="sm:text-4xl text-3xl flex flex-col gap-4">Olá, eu sou o <a className="font-bold text-3xl sm:text-6xl text-orange_400 sm:hover:text-orange_600" href='https://github.com/Kjuh28'>Kerley Sousa</a> Desenvolvedor Front-end  </p>
                    <footer className="pt-8"><a href="#"><Button tittle='Download CV' /> </a></footer>
                </div>
                <div className="max-w-xl w-full flex justify-center">
                    <img src="../src/assets/avatar500.png" className="" ></img>
                </div>
            </div>   
        </section>
    )
}