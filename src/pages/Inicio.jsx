import ItemListContainer from "../components/ItemListContainer"
import Banner from "../components/banner";
import bannerImg from "../assets/banner_home.jpg"
function Inicio () {
    return(
        <div>
            <ItemListContainer greeting="¡BIENVENIDOS!"/>
            <h1>Oro Verde</h1>
            <Banner url={bannerImg}/>
        </div>

    )
}

export default Inicio;