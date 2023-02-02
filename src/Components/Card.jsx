
function Card({setCard, pokemon}) {

    
  return (
    <div className="relative z-10" role="dialog" >
 
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
            <div className=" animate-appear relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:my-8 my-auto md:w-full md:max-w-lg">
                <div className="flex bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="w-1/3 font-bold text-red-600 text-xs">
                    <p className="font-bold text-red-600 text-lg">
                        N.°{pokemon.id}
                    </p>
                    <img className = "object-contain h-48 w-48"
                        src = {pokemon.sprites.other['official-artwork'].front_default}>
                    </img>
                    </div>
                    <div className="w-2/3">

                        <p className="font-bold mb-3 text-gray-700 uppercase">
                            Pokemon: {''}
                            <span className="font-normal capitalize">
                                {pokemon.name}
                            </span> 
                        </p>

                        <p className="font-bold mb-3 text-gray-700 uppercase">
                            Type: {''}
                            <span className="font-normal capitalize">
                            {pokemon.types[1]  ? `${pokemon.types[0].type.name}/${pokemon.types[1].type.name}` : pokemon.types[0].type.name}
                            </span>

                        </p>

                        <p className="font-bold mb-3 text-gray-700 uppercase">
                            Size: {''}
                            <span className="font-normal normal-case">
                            {`${pokemon.height/10}m`}
                            </span>

                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">
                            Weight: {''}
                            <span className="font-normal normal-case">
                            {`${pokemon.weight/10}Kg`}
                            </span>

                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">
                            Abilities: {''}
                            <span className="font-normal capitalize">    
                                {
                                    pokemon.abilities.map((ability)=>{
                                        let {name, url} = ability
                                        console.log(name)
                                    })        
                                }
                                   
                            </span>
                        </p>
                        
                        {/* <p className="font-bold mb-3 text-gray-700 uppercase">
                            Weight: {''}
                            <span className="font-normal normal-case">
                            {`${pokemon.weight/10}Kg`}
                            </span>

                        </p> */}

                    </div>
                    
                </div>
                <button 
                    type = "button" 
                    className="px-3 py-2 bg-red-500 m-5 text-white text-sm font-bold rounded-md"
                    onClick={()=>setCard(false)}>
                    Close
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card
