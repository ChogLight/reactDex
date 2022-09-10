
import { useState } from 'react'
function Pagination({setUpperCounter, setLowerCounter, pokemonNumber}) {

    const [pageNumber, setPageNumber] = useState(11)
    let pages = []
    for(let i = pageNumber-10; i < pageNumber; i++) {
        pages = [...pages , i]
    }

    const changePageFrw = () => {
        setPageNumber(pageNumber + 10)
    }
    const changePageBkw = () => {
        setPageNumber(pageNumber - 10)
    }

    return (
    <div className="grid md:grid-cols-12 grid-cols-6 md:w-2/3 w-11/12 mx-auto my-5 bg-white text-center p-5 font-bold text-white rounded-full">
        {
            (pages.includes(1)) ? 
            <p></p>: 
                <button onClick={changePageBkw} 
                    className=" hover:text-yellow-300 text-red-500 md:{text-sm w-10 h-10 mx-4} 
                    text-xs w-8 h-8 mx-2 rounded-full bg-white p-2"> 
                    {"<"} 
                    </button>
        }

        {
            pages.map((page,i) => {

                if(page <= Math.trunc(pokemonNumber/21)+1){
                    return(
                        <button 
                            key = {`page ${i}`}
                            onClick = {()=> {setUpperCounter((page-1)*21+22); 
                                                setLowerCounter((page-1)*21+1);
                                                window.location = "./#top";
                                            }}
                            className=" hover:text-yellow-300 md:{text-sm w-10 h-10} md:mx-4 
                                        text-xs w-8 h-8 mx-2 rounded-full bg-red-500 p-2">
                            {page}
                        </button>                                                          
                    )   
                }
                else {
                    return ""
                }
                
            })
        }
        {
            (pages.includes(Math.trunc(pokemonNumber/21))) ? 
                <p></p>: 
                <button onClick={changePageFrw} 
                    className=" hover:text-yellow-300 text-red-500 md:{text-sm w-10 h-10 mx-4} 
                    text-xs w-8 h-8 mx-2 rounded-full bg-white p-2"> 
                    {">"} 
                    </button>  
        }
    </div>
  )
}

export default Pagination
