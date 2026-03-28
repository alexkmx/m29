import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaPlay, FaClock, FaListOl } from 'react-icons/fa';
import audioApi from "./audioApi";

function DetalleAlbum() {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [canciones, setCanciones] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerTodo = async () => {
            try {
                const resAlbum = await audioApi.get(`/album.php?m=${id}`);
                setAlbum(resAlbum.date.album[0]);
                
                const resTracks = await audioApi.get(`/track.php?m=${id}`);
                setCanciones(resTracks.data.track || []);
            } catch (err) {
                console.error("Error al obtener datos", err);
            } finally {
                setCargando(false)
            }
        };
        obtenerTodo();
    }, [id]);

    if (cargando) return <div>Cargando...</div>
    if (!album) return <p>Cargando detalles...</p>;

    return (
       <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#1DB954', textDecoration: 'none' }}>← Volver al buscador</Link>
      
      {/* Encabezado del Álbum */}
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
        <img 
          src={album.strAlbumThumb} 
          alt={album.strAlbum} 
          style={{ width: '250px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }} 
        />
        <div style={{ flex: 1 }}>
          <h1>{album.strAlbum}</h1>
          <h3 style={{ color: '#b3b3b3' }}>{album.strArtist} • {album.intYearReleased}</h3>
          <p style={{ fontSize: '0.9rem', color: '#888' }}>Género: {album.strGenre}</p>
        </div>
      </div>

      {/* Lista de Canciones */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          <FaListOl style={{ marginRight: '10px' }} /> Lista de canciones
        </h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ color: '#b3b3b3', textAlign: 'left', borderBottom: '1px solid #222' }}>
              <th style={{ padding: '10px' }}>#</th>
              <th>Título</th>
              <th style={{ textAlign: 'right', paddingRight: '10px' }}><FaClock /></th>
            </tr>
          </thead>
          <tbody>
            {canciones.map((track, index) => (
              <tr 
                key={track.idTrack} 
                style={{ borderBottom: '1px solid #222', transition: '0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#282828'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: '15px', color: '#b3b3b3' }}>{index + 1}</td>
                <td>
                  <span style={{ display: 'block', fontWeight: 'bold' }}>{track.strTrack}</span>
                </td>
                <td style={{ textAlign: 'right', paddingRight: '10px', color: '#b3b3b3' }}>
                  {/* Convertimos milisegundos a minutos:segundos si la API los da */}
                  {track.intDuration ? (Math.floor(track.intDuration / 60000) + ":" + ((track.intDuration % 60000) / 1000).toFixed(0).padStart(2, '0')) : "--:--"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default DetalleAlbum;