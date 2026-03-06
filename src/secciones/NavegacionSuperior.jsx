import { useState } from 'react'
import logoMonkeys from '../img/Monkeys_WhiteLogo.png'

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
      <a
        href="#inicio_monkeys"
        className="logo_nav"
        onClick={(e) => {
          e.preventDefault()
          manejarScrollSuave('inicio_monkeys')
        }}
        aria-label="Ir al inicio"
      >
        <img src={logoMonkeys} alt="Monkeys" className="logo_nav_imagen" />
      </a>
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
            <span className="enlace_nav_sizer" aria-hidden>Inicio</span>
            <span className="enlace_nav_visible">Inicio</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="enlace_nav"
            onClick={() => manejarScrollSuave('seccion_carta')}
          >
            <span className="enlace_nav_sizer" aria-hidden>Carta</span>
            <span className="enlace_nav_visible">Carta</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="enlace_nav"
            onClick={() => manejarScrollSuave('seccion_burgers_especiales')}
          >
            <span className="enlace_nav_sizer" aria-hidden>Burgers especiales</span>
            <span className="enlace_nav_visible">Burgers especiales</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="enlace_nav"
            onClick={() => manejarScrollSuave('seccion_sobre')}
          >
            <span className="enlace_nav_sizer" aria-hidden>Sobre nosotros</span>
            <span className="enlace_nav_visible">Sobre nosotros</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavegacionSuperior

