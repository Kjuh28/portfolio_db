import { Button } from "./Button";

export interface projectProps{
    id: string, 
    name: string,
    description: string,
    img: string,
    git: string,
}

export function Project({id, name, description, img, git}:projectProps){
    return(
        <div id={id} className='p-8 mb-8 border border-dashed border-orange_200 rounded-xl text-center place-items-center'>
            <div className={(Number(id) % 2 == 0 ? 'sm:flex sm:justify-between xl:max-h-96 gap-8' : 'sm:flex sm:flex-row-reverse xl:justify-between  gap-8')}>
                <div className="sm:max-w-xl w-full">
                    <img className="w-full h-full object-cover object-center rounded-xl hover:scale-110 transition-transform" src={img}/>
                </div>
                <div className="sm:w-full max-w-xl">
                    <h1 className="font-bold text-3xl sm:text-4xl w-full text-orange_400 pb-8">{name}</h1>
                    <p className="text-xl sm:text-2xl line-clamp-3 sm:line-clamp-none">{description}</p>
                    <footer className="pt-8">
                        <a href={git} target="_blank">{<Button tittle="Repositório" />}</a>
                    </footer>
                </div>
            </div>
            
        </div>
    )
}