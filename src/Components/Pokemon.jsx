import { useEffect, useState } from "react"


function Pokemon({name, type, weight, number, img, height}) {

    

  return (
    <div className="bg-white rounded-md mx-5 my-3 flex p-3 hover:scale-105 duration-500">
        
        <div className="w-1/3 font-bold text-red-600 text-xs">
            <p>
                N.°{number}
            </p>
            <img src={img}/>
        </div>
        <div className="w-2/3">

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Pokemon: {''}
                <span className="font-normal capitalize">
                    {name}
                </span> 
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Type: {''}
                <span className="font-normal capitalize">
                    {type}
                </span>
            
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Size: {''}
                <span className="font-normal normal-case">
                {`${height/10}m`}
                </span>
            
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Weight: {''}
                <span className="font-normal normal-case">
                {`${weight/10}kg`}
                </span>
            
            </p>
            
            
        </div>
    </div>
  )
}

export default Pokemon
