import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import audioApi from "./audioApi";
import {FaSearch, FaCompactDisc} from "react-icons/fa";

function SearchBar() {
    const [albumes, setAlbumes] = useState([]);
    const [busqueda, setBusqueda] = useState("Rush");
    const [cargando, setCargando] = useState(false);

    const buscarMusica = async (e) => {
        if (e) e.preventDefault();
        setCargando(true);
        try {
            const res = await audioApi.get(`/searchalbum.php?s=${busqueda}`);
            
            setAlbumes(res.data.album || []);
        } catch (err) {
            console.error("Error en la petición", err);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {buscarMusica();}, []);

    
    return(
        <div className="search_cont">
          <form onSubmit={buscarMusica}>
            <input 
              value={busqueda} 
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Busca un artista..."
              
            />
            <button type="submit" >
              <FaSearch /> Buscar
            </button>
          </form>

          {cargando ? <p>Cargando discografía...</p> : (
        <div className="search_discografia">
          {albumes.map(album => (
            <Link to={`/album/${album.idAlbum}`} key={album.idAlbum} className="link" >
              <div className="search_album">
                <img src={album.strAlbumThumb || 'https://via.placeholder.com/150'} alt={album.strAlbum} />
                <h4 >{album.strAlbum}</h4>
                <small>{album.intYearReleased}</small>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    )


}

export default SearchBar;