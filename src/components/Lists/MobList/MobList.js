import React, {useState, useContext, useRef, useEffect, useLayoutEffect} from 'react';
import addIcon from "../../../img/icon-add.svg"
import removeIcon from "../../../img/icon-remove.svg"
import MobItem from './MobItem/MobItem';
import { GlobalContext } from '../../../context/GlobalState';
import ReactSelect from "../../Select/ReactSelect"
import { createListAnimation, removeListAnimation } from "../../../helpers/animations"

const MobList = ({id, items, level}) => {

    const [isAddingNewItem, setIsAddingNewItem] = useState(false);
    const { mobNames, deleteMob, drop } = useContext(GlobalContext);
    const mobList = useRef(null);

    const mobItems = items
        .filter(item => item.id)
        .map((item, index)=>{
            const key = item.id + (index * item.id + items.length);
            return <MobItem key={key} mob={id} item={item}/>
    })
    const handleAddItem = () => {
        setIsAddingNewItem((isAddingNewItem)=> !isAddingNewItem);
    }

    const getMobName = (value) => {
        return mobNames.find(mob => mob.value === value).label
    }

    const handleDeleteMob = () => {
        removeListAnimation(mobList.current, ()=> deleteMob(id))
    }

    useLayoutEffect(()=>{
        createListAnimation(mobList.current)
    }, [])
        
    return (
            <section ref={mobList} className="MobList">
                <header className="MobList__header">
                    <div className="MobList__image-container">
                        <img src={`${id}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/images/unknown-monster.png"}} className="MobList__image" alt="moblist icon"/>
                    </div>
                    <h2 className="MobList__name">{getMobName(id)}</h2>
                    <p className="MobList__level">[{level.min} - {level.max}] Lvl</p>
                    <button onClick={handleAddItem} className="MobList__actionButton MobList__actionButton--add">
                        <img src={addIcon} className="MobList__addIcon" alt="moblist icon"/>
                    </button>
                    <button onClick={handleDeleteMob} className="MobList__actionButton MobList__actionButton--delete">
                        <img className="MobList__addIcon" src={removeIcon} alt="ikona usuwania"/>
                    </button>
                </header>
                { isAddingNewItem ? <MobAddingItem handleAddItem={handleAddItem} mobId={id}/> : null}
                <ul className="MobList__list">
                    {mobItems}
                </ul>
            </section>
    );
};

const MobAddingItem = ({handleAddItem, mobId}) => {

    const  { itemNames, addItem } = useContext(GlobalContext);
    const [chosenItem, setChosenItem] = useState('');
    const [chosenItemAmount, setChosenItemAmount] = useState('');
    const [chosenItemChance, setChosenItemChance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(chosenItem==='')
            return 
        addItem({
            id: chosenItem.value,
            count: parseInt(chosenItemAmount),
            chance: parseFloat(chosenItemChance)
        }, mobId)
        setChosenItemAmount('')
        setChosenItemChance('')
        setChosenItem('')
        handleAddItem();
    }

    const handleChange = (e) => {
        switch(e.target.name){
            case "amount": setChosenItemAmount(e.target.value); break;
            case "chance": setChosenItemChance(e.target.value); break;
        }
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="MobList__form">
            <ReactSelect 
                defaultValue={chosenItem}
                setChosenItem={setChosenItem} 
                options={itemNames} 
                portalTarget={document.body}
                className={'MobListSelect'}
                classPrefix={'MobListSelect'}
             />
            <input 
                value={chosenItemAmount}
                onChange={handleChange}
                required
                placeholder="Ilość" 
                type="number" 
                name="amount" 
                min="1" 
                className="MobList__input MobList__input--short"
            />
            <input 
                value={chosenItemChance}
                onChange={handleChange}
                placeholder="Szansa" 
                required
                step="0.01"
                min="0" 
                max="100" 
                type="number" 
                name="chance" 
                className="MobList__input MobList__input--short"
            />
            <button type="submit" className="MobList__button">Dodaj</button>
        </form>
    );
};

export default MobList;