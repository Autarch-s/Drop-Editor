import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';


const Categories = () => {
    const { changeActiveList, activeList } = useContext(GlobalContext);

    const handleClick = (type) => {
        changeActiveList(type);
    }
    
    return (
        <div className="Categories">
           {/*  <Link to="/maps/">
                <button onClick={()=> handleClick("maps")} className={`Categories__button Categories__button--maps ${activeList === "maps" ? "Categories__button--active" : ""}`}>
                    <img className="Categories__icon" src={mapIcon} alt="ikona mapy"/>
                    Mapy
                </button>
            </Link> 
            <Link to="/mobs/">
                <button onClick={()=> handleClick("mobs")} className={`Categories__button Categories__button--mobs ${activeList === "mobs" ? "Categories__button--active" : ""}`}>
                <img className="Categories__icon" src={mobIcon} alt="ikona mapy"/>
                    Moby
                </button>
            </Link>
            <Link to="/items/">
                <button onClick={()=> handleClick("items")} className={`Categories__button Categories__button--items ${activeList === "items" ? "Categories__button--active" : ""}`}>
                <img className="Categories__icon" src={itemIcon} alt="ikona mapy"/>
                    Itemy
                </button>
            </Link> */}
        </div>
    );
};

export default Categories;