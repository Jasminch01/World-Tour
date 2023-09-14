import PropTypes from 'prop-types'
import { useState } from 'react';

const Card = ({card, visitedCountry}) => {
    const {name, flags, population, timezones} = card;
    const [visited, setVisited] = useState(false);

    const visitedHandler = () => {
      setVisited(!visited)
    
    }
  return (
    <>
      <div className='p-5 bg-lime-200 rounded-lg '>
        <img className=' w-full' src= {flags.png} alt="" />
        <h1 className='text-xl font-medium'>{name.common}</h1>
        <h1 className='font-medium'> Population : {population} ML</h1>
        <p> Timezone : {timezones}</p>
        <button onClick={visitedHandler} className= {visited? 'p-3 bg-green-400 text-white': 'p-3 bg-red-400 text-white'} >Visited</button>
        <button className='ms-3 text-purple-400' onClick={() => visitedCountry(card)} >Mark as visited</button>
      </div>
    </>
  );
};

Card.propTypes = {
    card : PropTypes.object.isRequired,
    visitedCountry : PropTypes.func

}
export default Card;
