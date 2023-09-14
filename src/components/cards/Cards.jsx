import PropTypes from 'prop-types'
import Card from "../card/Card";
import Visited from './Visited';

const Cards = ({cards, visitedCountry, visitedCountries}) => {
    return (
        <div>
             <h1 className='text-xl font-bold'>Visited Countries : {visitedCountries.length} </h1>    
            <div className='my-10 flex gap-3'>
                {
                    visitedCountries.map((country, i) => <Visited key={i} country = {country}></Visited>)
                }
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    cards.map((card, i) => <Card key={i} card = {card} visitedCountry = {visitedCountry}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    cards : PropTypes.array.isRequired,
    visitedCountry : PropTypes.func,
    visitedCountries : PropTypes.array
}
export default Cards;