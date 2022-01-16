import './App.css';
import { Provider } from 'react-redux';
import Routers from './routers/Routers';
import Store from './store/Store';
function App() {
  return (
    <Provider store={Store()}>
       <Routers/>
    </Provider>
    
   
  );
}

export default App;
