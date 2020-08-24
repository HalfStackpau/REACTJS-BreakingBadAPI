import React, {useState} from 'react';
import styled from '@emotion/styled';

const Frase = ({frase}) => {

    const Contenedor = styled.div`
        display:flex;
        flex-flow: column nowrap;
        justify-content:center;
        align-items:center;
        max-width:80%;
        width:auto;
        min-width: 40%;
        height:auto;
        min-height:150px;
        border-radius: 5px;
        background:white;
        padding:20px;
    `;



    return (
        <Contenedor>
            {frase.quote === undefined ? <h1>Frases Breaking Bad</h1> : null}
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>

        </Contenedor>

     );
}
 
export default Frase;