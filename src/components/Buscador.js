import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import audioApi from "./audioApi";
import {FaSearch, FaCompactDisc} from "react-icons/fa";

function Buscador() {
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
        <div style={{ padding: '20px' }}>
      <form onSubmit={buscarMusica}>
        <input 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Busca un artista..."
          style={{ padding: '10px', borderRadius: '5px', border: 'none', width: '250px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '5px', cursor: 'pointer' }}>
          <FaSearch /> Buscar
        </button>
      </form>

      {cargando ? <p>Cargando discografía...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {albumes.map(album => (
            <Link to={`/album/${album.idAlbum}`} key={album.idAlbum} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#181818', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <img src={album.strAlbumThumb || 'https://via.placeholder.com/150'} alt={album.strAlbum} style={{ width: '100%', borderRadius: '4px' }} />
                <h4 style={{ margin: '10px 0 5px' }}>{album.strAlbum}</h4>
                <small>{album.intYearReleased}</small>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    )


}

export default Buscador;