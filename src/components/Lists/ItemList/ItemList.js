import React, {useContext} from 'react';
import { GlobalContext }  from "../../../context/GlobalState";
import ItemMob from "./Item/ItemMob"
import { convertItemId } from "../../../helpers/itemIdConverter"

const ItemList = ({match}) => {
    const {itemNames, drop } = useContext(GlobalContext);
    const itemID = parseInt(match.params.id);

    const mobList = drop.reduce((p,n)=>{
        let items = n.items.filter(item => item.id === itemID)
        if(items.length > 0)
            items.forEach(item => p.push({mob: n.mob, count: item.count, chance: item.chance}));
        return p
    },[])

    const getItemName = (value) => {
        return itemNames.find(item => item.value === value).label
    }

    const renderMobs = mobList.map((mob, index) => {
        return <ItemMob data={mob} key={index}/>
    }) 

    return (
        <section className="ItemList">
            <header className="ItemList__header">
                <div className="ItemList__image-container">
                    <img className="ItemList__image" src={`https://m2icondb.com/img/${convertItemId(itemID, getItemName(itemID))}.png`} /* src={`${itemID}.png`} */></img>
                </div>
                <h2 className="ItemList__title">{getItemName(itemID)} </h2>
            </header>
            <ul className="ItemList__list">
                {renderMobs}
            </ul>
        </section>
    );
};

export default ItemList;