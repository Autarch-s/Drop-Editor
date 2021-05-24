import React, {useState, useContext, useRef, useEffect, useLayoutEffect} from 'react';
import AddMobItem from "./MobItem/AddMobItem/AddMobItem"
import addIcon from "../../../img/icon-add.svg"
import removeIcon from "../../../img/icon-remove.svg"
import MobItem from './MobItem/MobItem';
import { GlobalContext } from '../../../context/GlobalState';
import ReactSelect from "../../Select/ReactSelect"
import { createListAnimation, createElementAnimation, removeListAnimation } from "../../../helpers/animations"


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
                        <img src={`/mobs/${id}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/images/unknown-monster.png"}} className="MobList__image" alt="moblist icon"/>
                    </div>
                    <div className="MobList__title-containter">
                        <h2 className="MobList__name">{getMobName(id)}</h2>
                        <p className="MobList__level">[{level.min} - {level.max}] Lvl</p>
                    </div>
                    <button onClick={handleAddItem} className="MobList__actionButton MobList__actionButton--add">
                        <img src={addIcon} className="MobList__addIcon" alt="moblist icon"/>
                    </button>
                    <button onClick={handleDeleteMob} className="MobList__actionButton MobList__actionButton--delete">
                        <img className="MobList__addIcon" src={removeIcon} alt="ikona usuwania"/>
                    </button>
                </header>
                { isAddingNewItem ? <AddMobItem handleAddItem={handleAddItem} isAddingNewItem={isAddingNewItem} mobId={id}/> : null}
                <ul className="MobList__list">
                    {mobItems}
                </ul>
            </section>
    );
};

/* const MobAddingItem = ({isAddingNewItem, handleAddItem, mobId}) => {

    const  { itemNames, addItem } = useContext(GlobalContext);
    const [chosenItem, setChosenItem] = useState('');
    const [chosenItemAmount, setChosenItemAmount] = useState('');
    const [chosenItemChance, setChosenItemChance] = useState('');
    const addItemForm = useRef(null);

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

    useEffect(()=>{
        createElementAnimation(addItemForm.current);
        return () => {
            removeListAnimation(addItemForm.current)
        }
    }, [])



    const handleChange = (e) => {
        switch(e.target.name){
            case "amount": setChosenItemAmount(e.target.value); break;
            case "chance": setChosenItemChance(e.target.value); break;
        }
    }

    return (
        <form ref={addItemForm} onSubmit={handleSubmit} autoComplete="off" className="MobList__form">
            <div className="MobList__input-wrapper">
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
            </div>
            <button type="submit" className="MobList__button">Dodaj</button>
        </form>
    );
}; */

export default MobList;