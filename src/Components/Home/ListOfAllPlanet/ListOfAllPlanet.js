import React, { useContext, useEffect, useState } from 'react';
import './ListOfAllPlanet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import FavoritesList from '../FavoritesList/FavoritesList';


const ListOfAllPlanet = () => {
    const [planetList, setPlanetList] = useState([]);
    const [favoritesList, setFavoriteList] = useState([]);
    const [planet, setPlanet] = useContext(UserContext);
    // console.log(favoritesList);
    console.log(planet);

    useEffect(() => {
        fetch('https://assignment-machstatz.herokuapp.com/planet')
            .then(res => res.json())
            .then(data => setPlanetList(data))
    }, [])

    const addToFavoritesList = (list) => {
        //  console.log(list);

        setPlanet([...favoritesList, list]);
        //  setFavoriteList([...favoritesList,list]);


    }

    return (
        <div className="container">
            <div className="row d-flex">
                {
                    planetList.map(list => (



                        <div className="card mt-4" style={{ width: '18rem', marginLeft: '70px', boxShadow: '8px 8px 8px 8px gray' }}>
                            <FontAwesomeIcon className='icon fa-4x mt-2' icon={faGlobe} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{list.name}</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, accusamus?</p>
                                <button onClick={() => addToFavoritesList(list)} href="#" className="btn btn-outline-danger">Mark As Favorite</button>
                            </div>
                        </div>

                    ))
                }

            </div>
            <div>
                {
                    favoritesList.map(el => <FavoritesList item={el}></FavoritesList>)
                }
            </div>

        </div>

    );
};

export default ListOfAllPlanet;