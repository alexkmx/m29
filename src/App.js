import React, {useState, useEffect} from "react"; //1.- Importamos los Hooks
import BotonMagico from "./components/botonmagico";
import BotonFavorita from "./components/botonfavorita";
import {FaMusic, FaCompactDisc, FaSpinner} from "react-icons/fa"; //Importar iconos.
import {canciones} from "./components/datos";
import axios from "axios";

//Configuración instancia para TheAudioDB
const audioAPI = axios.create({
  baseURL: "https://www.theaudiodb.com/api/v1/json/123" //Usamos key gratuita
});

function App() {
  //2.- Declaramos el estado: [valor, funcionParaCambiarlo] = useState(valorInicial)
  
  const [albumes, setAlbumes] = useState([]);
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null);

 

  // 2.1.- Definir el efecto
  useEffect(() => {
    const fetchMusica  = async () => {
      try{
        //Buscamoslos albumés de un artista
        const respuesta = await audioAPI.get("searchalbum.php?s=soda stereo");
        console.log(respuesta.data);
        if (respuesta.data.album) {
          setAlbumes(respuesta.data.album);
        }else{
          setError("No se encontraron albumes para este artista");
        }
        
      }catch (err) {
        setError("Error de conexión con TheAudioDB");
      } finally {
        setCargando(false);
      }
    };
    fetchMusica();
  },[]); //3.1.- La matriz de dependencias

  

  return(
    <div style={{ padding: '20px', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <h1><FaMusic color="#1DB954" /> Discografía: Soda Stereo</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {albumes.map((album) => (
          <div key={album.idAlbum} style={{ 
            background: '#181818', 
            padding: '15px', 
            borderRadius: '10px',
            textAlign: 'center',
            border: '1px solid #282828'
          }}>
            {/* Imagen del álbum (TheAudioDB provee strAlbumThumb) */}
            <img 
              src={album.strAlbumThumb || 'https://via.placeholder.com/150'} 
              alt={album.strAlbum} 
              style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }}
            />
            <h3 style={{ fontSize: '1rem', margin: '5px 0' }}>{album.strAlbum}</h3>
            <p style={{ fontSize: '0.8rem', color: '#b3b3b3' }}>
              <FaCompactDisc /> {album.intYearReleased}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;