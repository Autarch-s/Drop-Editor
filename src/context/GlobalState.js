import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    activeList: "",
    itemNames: [],
    mobNames: [],
    firstRun: false,
    drop: JSON.parse(localStorage.getItem("drop"))  || [
      {
        "mob": 101,
        "level": {
          "min": 1,
          "max": 15
        },
        "items": [
          {
            "id": 25040,
            "count": 1,
            "chance": 20
          },
          {
            "id": 50513,
            "count": 1,
            "chance": 1
          },
          {
            "id": 13087,
            "count": 1,
            "chance": 1
          },
          {
            "id": 14221,
            "count": 1,
            "chance": 1
          },
          {
            "id": 12396,
            "count": 1,
            "chance": 1
          },
          {
            "id": 71045,
            "count": 1,
            "chance": 3
          },
          {
            "id": 71044,
            "count": 1,
            "chance": 1
          },
          {
            "oneOf": [
              {
                "id": 30031,
                "count": 1,
                "chance": 30
              },
              {
                "id": 30031,
                "count": 2,
                "chance": 70
              }
            ],
            "hide_wiki": true,
            "chance": 15
          }
        ],
        "gold": [
          {
            "min": 36,
            "max": 84,
            "chance": 40
          },
          {
            "oneOf": [
              {
                "min": 36,
                "max": 84,
                "chance": 40
              },
              {
                "min": 111,
                "max": 222,
                "chance": 60
              }
            ],
            "chance": 40
          }
        ]
      },
      {
        "mob": 102,
        "level": {
          "min": 2,
          "max": 16
        },
        "items": [
          {
            "id": 3079,
            "count": 1,
            "chance": 1
          },
          {
            "id": 25040,
            "count": 5,
            "chance": 33
          },
          {
            "oneOf": [
              {
                "id": 30031,
                "count": 1,
                "chance": 30
              },
              {
                "id": 30031,
                "count": 2,
                "chance": 70
              }
            ],
            "chance": 15
          }
        ],
        "gold": [
          {
            "min": 36,
            "max": 84,
            "chance": 40
          },
          {
            "oneOf": [
              {
                "min": 36,
                "max": 84,
                "chance": 40
              },
              {
                "min": 111,
                "max": 222,
                "chance": 60
              }
            ],
            "chance": 40
          }
        ]
      },
      {
        "mob": 104,
        "level": {
          "min": 2,
          "max": 16
        },
        "items": [
          {
            "id": 30061,
            "count": 1,
            "chance": 1
          },
          {
            "id": 25040,
            "count": 12,
            "chance": 1
          },
          {
            "id": 30019,
            "count": 5,
            "chance": 0.3
          },
          {
            "oneOf": [
              {
                "id": 30031,
                "count": 1,
                "chance": 30
              },
              {
                "id": 30031,
                "count": 2,
                "chance": 70
              }
            ],
            "chance": 15
          }
        ],
        "gold": [
          {
            "min": 36,
            "max": 84,
            "chance": 40
          },
          {
            "oneOf": [
              {
                "min": 36,
                "max": 84,
                "chance": 40
              },
              {
                "min": 111,
                "max": 222,
                "chance": 60
              }
            ],
            "chance": 40
          }
        ]
      },
      {
        "mob": 1901,
        "level": {
          "min": "1",
          "max": "32"
        },
        "items": [
          {
            "id": 50050,
            "count": 1,
            "chance": 1
          },
          {
            "id": 11299,
            "count": 1,
            "chance": 0.05
          },
          {
            "id": 50513,
            "count": 1,
            "chance": 0.3
          },
          {
            "id": 50114,
            "count": 1,
            "chance": 35
          }
        ],
        "gold": [
          {
            "min": 36,
            "max": 84,
            "chance": 40
          }
        ]
      },
      {
        "mob": 2206,
        "level": {
          "min": 2,
          "max": 16
        },
        "items": [
          {
            "id": 283,
            "count": 1,
            "chance": 1
          },
          {
            "id": 50513,
            "count": 1,
            "chance": 1
          },
          {
            "id": 71032,
            "count": 1,
            "chance": 1
          },
          {
            "id": 25040,
            "count": 1,
            "chance": 1
          },
          {
            "oneOf": [
              {
                "id": 30034,
                "count": 1,
                "chance": 30
              },
              {
                "id": 30035,
                "count": 2,
                "chance": 70
              }
            ],
            "chance": 15
          }
        ],
        "gold": [
          {
            "min": 36,
            "max": 84,
            "chance": 40
          },
          {
            "oneOf": [
              {
                "min": 36,
                "max": 84,
                "chance": 40
              },
              {
                "min": 111,
                "max": 222,
                "chance": 60
              }
            ],
            "chance": 40
          }
        ]
      }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addDrop(drop){
      dispatch({
          type: 'ADD_DROP',
          payload: drop
      });
    }

    function addItemNames(itemNames){
      dispatch({
          type: 'ADD_ITEM_NAMES',
          payload: itemNames
      });
    }

    function addItem(item, mob){
      dispatch({
          type: 'ADD_ITEM_TO_MOB',
          payload: {item, mob}
      });
    }

    function addMob(mob){
      dispatch({
          type: 'ADD_MOB_TO_DROP',
          payload: mob
      });
    }

    function deleteMob(mobId){
      dispatch({
          type: 'DELETE_MOB',
          payload: mobId
      });
    }

    function addMobNames(mobNames){
      dispatch({
        type: 'ADD_MOB_NAMES',
        payload: mobNames
    });
    }

    function changeActiveList(listType){
      dispatch({
          type: 'CHANGE_ACTIVE_LIST',
          payload: listType
      });
    }

    function deleteItem(item, mob){
      dispatch({
          type: 'DELETE_ITEM_FROM_MOB',
          payload: {item, mob}
      });
    }

    function editItem(updatedItem, item, mob){
       dispatch({
          type: 'EDIT_ITEM_FROM_MOB',
          payload: {updatedItem, item, mob}
      }); 
    }

    function changeFirstRunStatus(){
      dispatch({
          type: 'CHANGE_FIRST_RUN_STATUS',
      });
    }
  
    return (
        <GlobalContext.Provider value={{
            activeList: state.activeList, 
            firstRun: state.firstRun,
            drop: state.drop, 
            itemNames: state.itemNames, 
            mobNames: state.mobNames, 
            addDrop,
            addItem, 
            changeActiveList, 
            deleteItem, 
            editItem, 
            addItemNames, 
            addMobNames, 
            addMob, 
            deleteMob, 
            changeFirstRunStatus
          }}>
          {children}
        </GlobalContext.Provider>)
}

