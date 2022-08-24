
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { ItemCount } from './Components/ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const onAdd = (contador)=>{

    toast.info('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      alert("Haz agregado "+contador+" productos!")

}

  return (
     
      
    <div className="App">
            
        <NavBar/>
        <ItemListContainer titulo="Crescent" slogan="Bienestar en tu hogar"/>
        <ItemCount stock={10} initial={1} agregarProducto={onAdd} />
        
        
          
    </div>
    
  );
}

export default App;
