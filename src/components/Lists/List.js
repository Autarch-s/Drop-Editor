import React, {useContext, useEffect, useState} from 'react';
import MobList from './MobList/MobList';
import ItemList from "./ItemList/ItemList"
import { GlobalContext } from './../../context/GlobalState';
import { convertTextData } from "../../helpers/dataConverter";
import { Route, Switch } from 'react-router-dom';
import AddMobList from './MobList/AddMobList/AddMobList';


const List = () => {
    const { drop, addMobNames, addItemNames, firstRun } = useContext(GlobalContext);
    const [loading, setLoading] = useState(true);
    const mobLists = firstRun ? 
    drop
        .map(monster => <MobList level={monster.level} items={monster.items} key={monster.mob} id={monster.mob}/>)
    :
    drop
        .sort((a,b)=>a.mob-b.mob)
        .map(monster => <MobList level={monster.level} items={monster.items} key={monster.mob} id={monster.mob}/>)
    
    
    useEffect(() => {
      const fetchItemNames = fetch('/item_names.txt')
          .then((response) => response.text())
          .then(data  => {
               const itemNames = convertTextData(data, "item")
              addItemNames(itemNames) 
          })
          .catch(err => console.warn(err)) 

        const fetchMobNames = fetch('/mob_names.txt')
          .then((response) => response.text())
          .then(data  => {
              const mobNames = convertTextData(data, "mob")
              addMobNames(mobNames)
          })
          .catch(err => console.warn(err)) 

          Promise.all([fetchItemNames, fetchMobNames]).then((values) => {
            setLoading(false);
          });
          
    }, []);
    
    return (
        <>
            <AddMobList/>
            <div className="List">
                <div className="wrapper">
                    { loading ? (<div className="Loader"/>
                    ) : (
                    <Switch>
                        <Route path="/" exact render={()=>mobLists} />
                        <Route path="/items/:id" component={ItemList} />
                        <Route render={() => (
                            <>
                                <div style={{color: 'gray', textAlign: 'center', fontSize: '55px'}}>404</div>
                                <div style={{color: 'white',  textAlign: 'center', fontSize: '55px'}}>Nie ma takiej strony!</div>
                                <div style={{color: 'white', textAlign: 'center', fontSize: '25px'}}>Coś Ci się pomyliło.</div>
                            </>
                        )} />
                    </Switch>
                    )}
                </div>
            </div>
        </>
    );
};

export default List;