import React, {useState, useContext, useRef} from 'react';
import ReactSelect from '../../../Select/ReactSelect';
import AddMonsterButton from "../../../Buttons/AddMonsterButton/AddMonsterButton"
import { GlobalContext } from "../../../../context/GlobalState"
import { shakeElement } from "../../../../helpers/animations"

const AddMobList = () => {
    const [chosenMob, setChosenMob] = useState('');
    const [error, setError] = useState(false);
    const  { mobNames, addMob, drop, changeFirstRunStatus } = useContext(GlobalContext);
    const addMobListForm = useRef(null);
    const [minLevel, setMinLevel] = useState('');
    const [maxLevel, setMaxLevel] = useState('');

    const handleSubmit = (e) => {
        console.log("work")
        e.preventDefault();
        const isDuplicated = drop.some(drop => drop.mob === chosenMob.value);
        
        if(isDuplicated || chosenMob === ''){
            shakeElement(addMobListForm.current)
            setError(true)
        }
        else{
            addMob({
                mob: chosenMob, 
                level: {
                    min: minLevel,
                    max: maxLevel,
                }
            });
            clearInputs();
            changeFirstRunStatus();
            setError(false)
        }
    }

    const handleInputChange = (e) => {
        switch(e.target.name){
           case "min": setMinLevel(e.target.value); break;
           case "max": setMaxLevel(e.target.value); break;
           default: break;
        }
    }

    const clearInputs = () => {
        setChosenMob('');
        setMinLevel("");
        setMaxLevel("");
    }

    return (
        <form ref={addMobListForm} onSubmit={handleSubmit} className={`AddMobList ${error ? "AddMobList--error" : ""}`}>
            <p className="AddMobList__title">Dodaj potwora</p>
           <ReactSelect 
                setChosenItem={setChosenMob} 
                options={mobNames} 
                className={'AddMobListSelect'}
                classPrefix={'AddMobListSelect'}
           />
           <div className="AddMobList__input-container">
            <input 
                    value={minLevel} 
                    onChange={handleInputChange}
                    className="AddMobList__input"
                    type="number" 
                    name="min"
                    min="0"
                    max="100" 
                    placeholder="Min Lv"
                    required
                /> 
                <input 
                    value={maxLevel} 
                    onChange={handleInputChange}
                    className="AddMobList__input"
                    min="0"
                    max="100" 
                    placeholder="Max Lv"
                    type="number"
                    name="max"
                    required
                /> 
           </div>
           
            <AddMonsterButton/>
           <p className={`AddMobList__error ${ error ? "AddMobList__error--show":""}`}>Nie możesz dodać moba, który już istnieje!</p>
        </form>
    );
};

export default AddMobList;