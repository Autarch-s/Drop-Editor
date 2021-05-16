export const convertItemId = (id, name) => {
    const idlength = id.toString().length;
    let tempId = "";
    let itemId = ""
    let checkName = name.indexOf("+") + 1;

    if(checkName)
        itemId = removeItemUpgradeSystemPostfix(id, checkName)
    else
        itemId = id

    if(idlength < 5){
        for(let i=0; i<5-idlength;i++){
            tempId += 0
        }
        tempId += itemId
        return tempId;
    }
    else
        return itemId;
}

function removeItemUpgradeSystemPostfix(id){
    let newId = id.toString().split("")
    newId[newId.length-1] = "0"
    return newId.join("");
}
