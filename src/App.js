import React, {useState, useEffect} from "react"; //1.- Importamos los Hooks
import BotonMagico from "./components/botonmagico";
import BotonFavorita from "./components/botonfavorita";

const canciones = [
  { id: 1, album: "Signos", title: "Prófugos", artist: "Soda Stereo", length: "4:35" },
  { id: 2, album: "Thriller", title: "Billie Jean", artist: "Michael Jackson", length: "4:54" },
  { id: 3, album: "Abbey Road", title: "Come Together", artist: "The Beatles", length: "4:19" },
  { id: 4, album: "The Dark Side of the Moon", title: "Time", artist: "Pink Floyd", length: "6:53" },
  { id: 5, album: "Discovery", title: "One More Time", artist: "Daft Punk", length: "5:20" },
  { id: 6, album: "Rumours", title: "Dreams", artist: "Fleetwood Mac", length: "4:17" },
  { id: 7, album: "Nevermind", title: "Smells Like Teen Spirit", artist: "Nirvana", length: "5:01" },
  { id: 8, album: "Back to Black", title: "Rehab", artist: "Amy Winehouse", length: "3:35" },
  { id: 9, album: "Ok Computer", title: "Karma Police", artist: "Radiohead", length: "4:21" },
  { id: 10, album: "El Madrileño", title: "Tú me dejaste de querer", artist: "C. Tangana", length: "3:17" }
];

function App() {
  //2.- Declaramos el estado: [valor, funcionParaCambiarlo] = useState(valorInicial)
  const [contador, setContador] = useState(0);
  const [favorita, setFavorita] = useState("");

  // Definimos el color basado en una condición
  const colorTexto = contador < 0 ? "red" : "black"

  // 2.1.- Definir el efecto
  /*useEffect(() => {
    document.title = `Clics: ${contador}`;
    console.log("Me ejecuté porque el contador cambió");
    
  },[contador]); //3.1.- La matriz de dependencias
*/
  return(
    <div style={{textAlign: "center", marginTop: "50px"}}>
      {/*Aplicamos color dinámico */}
      <h1 style={{color: colorTexto}}>Hola Han</h1>
      <h2>1.- Componente App Mi playlist de estudio</h2>
      <p>Este es mi primer componente en React con CRA</p>

      <div><h2>Mi canción favorita es: {favorita}</h2></div>

      <div style={{display: "grid",gridTemplateColumns: "repeat(5,1fr)", gap: "10px"}}>
        {canciones.map((cancion) => (
          <div key={cancion.id}
            style={{border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#f1f1f1"  
          }}
          >
            <h3>{cancion.title}</h3>
            <p style={{margin: "0", color:"#555"}}>
              <strong>Artista:</strong>{cancion.artist} |
              <strong>Albúm:</strong>{cancion.album}
            </p>
            <span style={{fontSize: "0.8rem", color: "#888"}}>
              Duración: {cancion.length}
            </span>
            <br/>
            <BotonFavorita 
              texto="Me gusta"
              titulo={() => setFavorita(cancion.title)}
              
            />
          </div>
        ))}
      </div>


      {/*3.- Le pasamos una "prop" llamada "accion" que contiene la lógica*/}
      <div style={{display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px"}}>
        <BotonMagico 
          texto="Haz clic aquí para sumar 1(componente 2)"
          accion={() => setContador(contador + 1)}
        />
        <BotonMagico 
          texto="Haz clic aquí para restar 1(componente 2)"
          accion={() => setContador(contador - 1)}
        />
        <BotonMagico 
          texto="Haz clic aquí para resetear(componente 2)"
          accion={() => setContador(contador - contador)}
        />
      </div>
      {/*Renderizado condicional*/}
      {contador < 0 && <p style={{color:"red"}}>Estas en números negativos</p>}
      <p>Has hecho clic {contador} veces</p>
    </div>
  )
}

export default App;