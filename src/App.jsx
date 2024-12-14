import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";

function App (){
    return(  
        <div className="flex flex-col h-50 align-middle">
            <NavBar/>
            <ItemListContainer greeting="¡BIENVENIDOS!"/>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}  />
        </div>
    )
}

export default App;