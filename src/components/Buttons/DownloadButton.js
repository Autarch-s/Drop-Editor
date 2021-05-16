import React, {useContext} from 'react';
import downloadIcon from "../../img/icon-download.svg";
import { GlobalContext } from "../../context/GlobalState";

const DownloadButton = () => {
    const  { drop } = useContext(GlobalContext);
    const dropToJSON = JSON.stringify(drop, null, 2);
    
    const handleClick = () => {
        saveDropToLocalStorage();
        viewDropInNewTab();
    }

    const viewDropInNewTab = () => {
        const newTab = window.open();
        newTab.document.open();
        newTab.document.write('<html><body><pre>' + dropToJSON + '</pre></body></html>');
        newTab.document.close();
    }

    const saveDropToLocalStorage = () => {
        localStorage.setItem("drop", dropToJSON);
    }
    return (
        <>
            <button onClick={handleClick} className="DownloadButton">
                <img src={downloadIcon} alt="download icon"/>
                <p className="DownloadButton__text">Download</p>
            </button>
            
        </>
    );
};

export default DownloadButton;