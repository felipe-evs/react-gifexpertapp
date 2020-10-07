import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'] );
    //     // setCategories( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />  

            {/*<button onClick = { handleAdd }>Agregar</button>*/}

            <ol>
                { 
                categories.map( category => (
                    //return <li key = { category }> {category} </li>
                    <GifGrid 
                        key = { category }
                        category = { category } 
                    />
                )) 
                }
            </ol>
        </>
    )
}