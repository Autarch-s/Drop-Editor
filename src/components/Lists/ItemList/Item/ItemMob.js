import React, {useContext, useRef, useLayoutEffect} from 'react'
import { GlobalContext } from "../../../../context/GlobalState";
import amountIcon from "../../../../img/icon-amount.svg"
import chanceIcon from "../../../../img/icon-chance.svg"
import { removeIdFromName } from "../../../../helpers/idRemover"
import { createListElementAnimation } from "../../../../helpers/animations"

const ItemMob = ({data, get}) => {
    const {mobNames } = useContext(GlobalContext);
    const itemMob = useRef(null);
    const getMobName = (value) => {
        let mobName = mobNames.find(mob => mob.value === value).label
        return removeIdFromName(mobName)
    }
    useLayoutEffect(()=>{
        createListElementAnimation(itemMob.current)
    }, [])
    return (
        <li ref={itemMob} className="ItemMob">
                <h3 className="ItemMob__mob-title">{getMobName(data.mob)}</h3>
                <p className="ItemMob__mob-id">({data.mob})</p>
                <div className="ItemMob__link">
                    <img className="ItemMob__mob-image"  alt="ikona moba" src={`/../mobs/${data.mob}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/images/unknown-icon.png"}}></img>
                </div>
                <div className="ItemMob__stats">
                    <div className="ItemMob__amount">
                        <img className="ItemMob__amount-icon"  alt="ikona ilosci" src={amountIcon}/>
                        <p className="ItemMob__amount-text">{data.count}x</p>
                    </div>
                    <div className="ItemMob__percent">
                        <img className="ItemMob__percent-icon"  alt="ikona procent" src={chanceIcon}/>
                        <p className="ItemMob__percent-text">{data.chance}%</p>
                    </div>
                </div>
            </li>
    );
};

export default ItemMob;