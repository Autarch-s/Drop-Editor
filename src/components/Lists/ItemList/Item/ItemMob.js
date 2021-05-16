import React, {useContext} from 'react'
import { GlobalContext } from "../../../../context/GlobalState";
import amountIcon from "../../../../img/icon-amount.svg"
import chanceIcon from "../../../../img/icon-chance.svg"

const ItemMob = ({data, get}) => {
    const {mobNames } = useContext(GlobalContext);
    const getMobName = (value) => {
        return mobNames.find(mob => mob.value === value).label
    }
    return (
        <li className="ItemMob__mob">
                
                <h3 className="ItemMob__mob-title">{getMobName(data.mob)}</h3>
                <div className="ItemMob__link">
                    <img className="ItemMob__mob-image" src={`/../mobs/${data.mob}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/images/unknown-icon.png"}}></img>
                </div>
                <div className="ItemMob__stats">
                    <div className="ItemMob__amount">
                        <img className="ItemMob__amount-icon" src={amountIcon}/>
                        <p className="ItemMob__amount-text">{data.count}x</p>
                    </div>
                    <div className="ItemMob__percent">
                        <img className="ItemMob__percent-icon" src={chanceIcon}/>
                        <p className="ItemMob__percent-text">{data.chance}%</p>
                    </div>
                </div>
            </li>
    );
};

export default ItemMob;