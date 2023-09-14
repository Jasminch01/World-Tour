import PropTypes from 'prop-types'
const Visited = ({country}) => {
    const {name,flags} = country
    return (
        <div className=''>
            <h1 className='font-semibold'>{name.common}</h1>
            <img className='w-16 h-[50%]' src= {flags.svg} alt="" />
        </div>
    );
};

Visited.propTypes = {
    country : PropTypes.object.isRequired
}
export default Visited;