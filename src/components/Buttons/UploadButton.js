import React, {useContext} from 'react';
import uploadIcon from "../../img/icon-upload.svg";
import { GlobalContext } from "../../context/GlobalState";

const UploadButton = () => {
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
            <label className="UploadButton">
                <input type="file" accept=".json" onChange={e => handleFileChosen(e.target.files[0])} className="UploadButton" id="file-selector" multiple/>
                <img src={uploadIcon} alt="download icon"/>
                <p className="UploadButton__text">Upload</p>
            </label>
            
        </>
    );
};

export default UploadButton;