function NavegacionSuperior() {
  const manejarScrollSuave = (idDestino) => {
    const destino = document.getElementById(idDestino)
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="barra_navegacion">
      <ul className="lista_nav">
        <li>
          <button
            type="button"
            className="enlace_nav"
            onClick={() => manejarScrollSuave('inicio_monkeys')}
          >
            Inicio
          </button>
        </li>
        <li>
          <button
            type="button"
            className="enlace_nav"
            onClick={() => manejarScrollSuave('seccion_carta')}
          >
            Carta
          </button>
        </li>
        <li>
          <button
            type="button"
            className="enlace_nav"
            onClick={() => manejarScrollSuave('seccion_burgers_especiales')}
          >
            Burgers especiales
          </button>
        </li>
        <li>
          <button
            type="button"
            className="enlace_nav"
            onClick={() => manejarScrollSuave('seccion_sobre')}
          >
            Sobre nosotros
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavegacionSuperior

