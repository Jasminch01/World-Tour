
import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);


    useEffect(()=>{
        const fetchData = async() => {
            try {
                const res = await fetch(' https://restcountries.com/v3.1/all');
                const data = await res.json();
                setCards(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    return (
        <div>
            <h1>Countries : {cards.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    cards.map((card, i) => <Card key={i} card = {card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;