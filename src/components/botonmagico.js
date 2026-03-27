//Recibimos "props" (las desestructuramos para usarlas diracto)
function botonmagico({texto, accion}) {
    return(
        <div>
            <button 
            onClick={accion}
            style={{backgroundColor: "grey", padding: "15px", color: "white"}}>
                {texto}
            </button>
        </div>
    )
}

export default botonmagico;