function botonfavorita({titulo, texto}) {
    return (
        <div>
            <button
            onClick={titulo}
            style={{marginTop: "5px"}}
            >
            {texto}
            </button>
        </div>
    )
}

export default botonfavorita;