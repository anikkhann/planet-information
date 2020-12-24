import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const FavoritesList = (props) => {
    // console.log(item);
    // const [planet, setPlanet] = useContext(UserContext);
    // console.log(planet);
    // const {name} = props.favList;
    console.log(props);

    return (
        <div>
            {/* <h1>{item && item.name}</h1> */}
            <h1>{props.item.name}</h1> 
        </div>
    );
};

export default FavoritesList;