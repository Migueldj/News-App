import React, { useState } from 'react'
import { NavBar } from './components/NavBar';
import { NewsGrid } from './components/NewsGrid';
import { useFetchNews } from './hooks/useFetchNews';

export const NewsApp = () => {
    const [category, setCategory] = useState('Inicio');
    const {data: news } = useFetchNews( category );

    const toggleCategory = (index) => {
        const categories = [
            "Inicio",
            "Economía Digital",
            "Entretenimiento",
            "Negocios"
        ];
        setCategory(categories[index]);
    }


    return (
        <>
            <NavBar toggleCategory = {toggleCategory} />
            <NewsGrid  news = {news} category={category}/>
        </>
    )
}
