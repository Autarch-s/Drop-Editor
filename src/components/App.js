import { GlobalProvider} from '../context/GlobalState';
import { BrowserRouter as Router } from 'react-router-dom';
import DownloadButton from './Buttons/DownloadButton';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import List from './Lists/List';
import UploadButton from './Buttons/UploadButton';


function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
            <Header/>
            <Categories/>
            <List/>
            <UploadButton/>
            <DownloadButton/>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
