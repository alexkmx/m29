import logo from "../spotify_logo.webp";

const Header = () =>  {
    

    const componentDidMount = () => {
        console.log("La App se ha cargado correctamente");
        
    }
     
        return (
            <header className="header">
                <img src={logo}/>
                <p>Explorar</p>
                <p>Cerrar sesión</p>
                <p>Cuenta</p>
            </header>
        )
    

}

export default Header;