import React, {createContext, useState} from "react";

const CadeOContexto = createContext();

export function CarProvider(children){

    const [carros, setCarros] = useState([]);

    return(
        <CadeOContexto.Provider value={{carros, setCarros}}>
            {children}
        </CadeOContexto.Provider>
    )
}

export {CadeOContexto}