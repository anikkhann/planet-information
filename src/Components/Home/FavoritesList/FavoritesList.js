import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const FavoritesList = () => {
    // console.log(item);
    const [planet, setPlanet] = useContext(UserContext);
    // console.log(planet);
    // const {name} = props.favList;
    // console.log(item.name);
    

    return (
        <div>
            {/* <h1>{item && item.name}</h1> */}
            {/* <h1>{item && item.name}</h1>  */}
            {
                    planet !== [] && planet.map(item =>(
                        <li>
                            {item.name}
                        </li>
                    ))
            }
        </div>
    );
};

export default FavoritesList;