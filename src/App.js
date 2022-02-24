import logo from './logo.svg';
import './App.css'
import './components/TituloApp/TituloApp.css'
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar'
import IconoCompra from './components/IconoCompra'
import TituloApp from './components/TituloApp/TituloApp'
import ItemListContainer from './components/ComponenteContenedor/ItemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <TituloApp/>
      <ItemListContainer/>
      <IconoCompra/> 
      
    </div>
                
  );
}

export default App;
