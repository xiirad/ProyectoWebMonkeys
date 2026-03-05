import logoMonkeys from '../img/Monkeys_WhiteLogo.png'

function SeccionHero() {
  return (
    <>
      <section className="seccion_nav_ancla" id="inicio_monkeys" />
      <header className="cabecera_monkeys">
        <img
          src={logoMonkeys}
          alt="Monkeys Burgers and Cocktails"
          className="logo_imagen_monkeys"
        />
      </header>
    </>
  )
}

export default SeccionHero

