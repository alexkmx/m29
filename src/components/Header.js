import logo from "../spotify_logo.webp";
import {HeaderS} from "./styles";

const Header = () =>  {
         
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