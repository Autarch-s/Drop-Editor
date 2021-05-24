import React, {useContext} from 'react';
import uploadIcon from "../../../img/icon-send.svg";
import { GlobalContext } from "../../../context/GlobalState";

const UploadMobNames = () => {
    const  { addDrop } = useContext(GlobalContext);
    let fileReader;
    
    const handleFileRead = (e) => {
        const content = JSON.parse(fileReader.result);
        addDrop(content)
      };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
      };

    return (
        <>
            <label className="MenuButton">
                <input type="file" accept=".txt" onChange={e => handleFileChosen(e.target.files[0])} className="MenuButton" id="file-selector" multiple/>
                <img src={uploadIcon} alt="download icon"/>
                <p className="MenuButton__text">Mob Names</p>
            </label>
            
        </>
    );
};

export default UploadMobNames;