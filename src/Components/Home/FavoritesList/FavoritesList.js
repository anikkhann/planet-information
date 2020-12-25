import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const FavoritesList = () => {
    const [planet, setPlanet] = useContext(UserContext);
    //filter data 
    const favoritePlanets = planet.filter(item => item.isFavourite === true);

    return (
        <div className='container'>
            <div className='row d-flex'>
                {
                    favoritePlanets !== [] && favoritePlanets.map(item => (

                        <div className="card mt-4" style={{ width: '18rem', marginLeft: '70px', boxShadow: '2px 2px 2px 2px blue' }}>
                            <FontAwesomeIcon className='icon fa-4x mt-2' icon={faGlobe} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, accusamus?</p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FavoritesList;