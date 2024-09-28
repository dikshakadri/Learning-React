import { useState } from 'react';

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Pear",
    "Peach",
    "Grape",
    "Cherry",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Mango",
    "Papaya",
    "Kiwi",
    "Lemon",
    "Lime",
    "Apricot",
    "Avocado",
    "Coconut",
    "Fig",
    "Pomegranate",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Cranberry",
    "Raisin"
];
export const SearchBox = () => {
    const [fruitData, setFruitData] = useState(fruits);
    const [ searchTerm, setSearchTerm ] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
        console.log(fruitsDataFilter);
        setFruitData(filteredFruits); 
    }

    const filteredFruits = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fruitsDataFilter = fruitData?.map((fruit) => (
            <option key={fruit} value={fruit}>
                {fruit}
            </option>
        )
    );

    const handleShowAllFruits = () => {
        setFruitData(fruits);
    }

    const handleClearAllFruits = () => {
        setFruitData([]);
        setSearchTerm("");
    }

    return (
        <>
            <h1>Search Box</h1>
            <input
                type="search"
                value={searchTerm}
                placeholder="Search"
                aria-label="Search"
                onChange={handleInputChange}
            />
            <button onClick={handleShowAllFruits}>Show all items</button>
            <button onClick={handleClearAllFruits}>Clear all items</button>
            {fruitsDataFilter}
        </>
    )
}