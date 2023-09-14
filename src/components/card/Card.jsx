import PropTypes from 'prop-types'

const Card = ({card}) => {
    const {name, flags, population, timezones} = card;
  return (
    <>
      <div className='p-5 bg-slate-400 rounded-lg text-white '>
        <img className=' w-full' src= {flags.png} alt="" />
        <h1 className='text-xl font-medium'> Country Name : {name.common}</h1>
        <h1 className='font-medium'> Population : {population} ML</h1>
        <p> Timezone : {timezones}</p>
      </div>
    </>
  );
};

Card.propTypes = {
    card : PropTypes.object.isRequired,

}
export default Card;
