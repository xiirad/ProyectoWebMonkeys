import { useState } from 'react'

function NavegacionSuperior() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const manejarScrollSuave = (idDestino) => {
    setMenuAbierto(false)
    const destino = document.getElementById(idDestino)
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="barra_navegacion" aria-label="Navegación principal">
      <button
        type="button"
        className={`boton_burger ${menuAbierto ? 'burger_abierto' : ''}`}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-expanded={menuAbierto}
        aria-controls="menu_nav"
        aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span className="burger_linea burger_linea_arriba" />
        <span className="burger_linea burger_linea_medio" />
        <span className="burger_linea burger_linea_abajo" />
      </button>

      <ul id="menu_nav" className={`lista_nav ${menuAbierto ? 'lista_nav_visible' : ''}`}>
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

