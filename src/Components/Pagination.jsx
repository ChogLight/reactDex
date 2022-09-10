
import { useState } from 'react'
function Pagination({setUpperCounter, setLowerCounter}) {

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
    <div className="flex md:w-1/2 mx-auto my-5 bg-white text-center p-6 font-bold text-white rounded-full">

        {
            (pages.includes(1)) ? 
                "": 
                <button onClick={changePageBkw} 
                    className=" bg-white  hover:text-yellow-300 md:{text-sm w-10 h-10} text-red-500 p-2"> 
                    {"<"} 
                    </button>
        }

        {
            pages.map((page,i) => {

                if(page < 44){
                    return(
                        <button 
                            key = {`page ${i}`}
                            onClick = {()=> {setUpperCounter((page-1)*22+22); setLowerCounter((page-1)*22+1)}}
                            className=" hover:text-yellow-300 md:{text-sm w-10 h-10} 
                                        text-xs w-8 h-8 mx-2 md:mx-4 rounded-full bg-red-500 p-2">
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
            (pages.includes(43)) ? 
                "": 
                <button onClick={changePageFrw} 
                    className=" bg-white hover:text-yellow-300 md:{text-sm w-10 h-10} text-red-500 p-2"> 
                    {">"} 
                    </button>  
        }
    </div>
  )
}

export default Pagination
