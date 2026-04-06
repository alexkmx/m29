import logo from "../spotify_logo.webp";
import {HeaderS} from "./styles";

const Header = () =>  {
    
    /*const componentDidMount = () => {
        console.log("La App se ha cargado correctamente");
        
    }*/
     
        return (
            <HeaderS >
                <img src={logo}/>
                <p>Explorar</p>
                <p>Cerrar sesión</p>
                <p>Cuenta</p>
                
            </HeaderS>
        )
    

}

export default Header;