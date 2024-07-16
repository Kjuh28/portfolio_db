interface buttonProps{
    tittle: string;
}
export function Button({tittle}:buttonProps){
    return(
        <button className="bg-none text-orange_400 border rounded-xl pr-4 pl-4 p-2 font-bold hover:bg-orange_600 hover:text-black">
            {tittle}
        </button>
    )
}