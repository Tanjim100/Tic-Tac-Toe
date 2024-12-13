import { useState } from 'react';
import './Square.css'

export default function Square({value, onSuperClick})
{
    

    return(
        <button 
            className='square' 
            onClick={onSuperClick}
        >
            {value}
        </button>
    );
}