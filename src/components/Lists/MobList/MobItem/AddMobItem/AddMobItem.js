import React, {useState, useContext, useRef, useEffect, useLayoutEffect} from 'react';
import addIcon from "../../../../../img/icon-add.svg"
import removeIcon from "../../../../../img/icon-remove.svg"
import MobItem from './../../MobItem/MobItem';
import { GlobalContext } from '../../../../../context/GlobalState';
import ReactSelect from "../../../../Select/ReactSelect"
import { createListAnimation, createElementAnimation, removeListAnimation } from "../../../../../helpers/animations"

const AddMobItem = ({isAddingNewItem, handleAddItem, mobId}) => {

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
        <form ref={addItemForm} onSubmit={handleSubmit} autoComplete="off" className="AddMobItem">
            <div className="AddMobItem__input-wrapper">
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
                    className="AddMobItem__input AddMobItem__input--short"
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
                    className="AddMobItem__input AddMobItem__input--short"
                />
            </div>
            <button type="submit" className="AddMobItem__button">Dodaj</button>
        </form>
    );
};

export default AddMobItem;