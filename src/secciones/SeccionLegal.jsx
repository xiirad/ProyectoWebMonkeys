function SeccionLegal() {
  return (
    <section
      className="seccion_bloque seccion_legal"
      id="seccion_legal"
    >
      <footer className="pie_monkeys">
        <div className="pie_columna_legal">
          <h2 className="titulo_seccion">Legal y redes</h2>
          <p>
            Este sitio web muestra una seleccion de la carta disponible en el
            local Monkeys. Los precios y productos pueden variar en funcion de
            la temporada o de la disponibilidad del producto fresco.
          </p>
          <p>
            Para informacion sobre alérgenos o intolerancias pregunta siempre
            al personal en sala. Disponemos de fichas nutricionales completas
            de cada plato.
          </p>
          <div className="pie_enlaces">
            <span className="pie_enlace">Aviso legal</span>
            <span className="pie_enlace">Politica de privacidad</span>
            <span className="pie_enlace">Cookies</span>
          </div>
        </div>

        <div className="pie_columna_horario">
          <div className="grupo_carta_titulo">Horario Monkeys</div>
          <div className="lista_horario">
            <div className="fila_horario">
              <span className="fila_horario_dia">Lunes</span>
              <span className="fila_horario_hora">Cerrado</span>
            </div>
            <div className="fila_horario">
              <span className="fila_horario_dia">Martes</span>
              <span className="fila_horario_hora">19:30 a 23:00</span>
            </div>
            <div className="fila_horario">
              <span className="fila_horario_dia">Miercoles</span>
              <span className="fila_horario_hora">19:30 a 23:00</span>
            </div>
            <div className="fila_horario">
              <span className="fila_horario_dia">Jueves</span>
              <span className="fila_horario_hora">19:30 a 23:00</span>
            </div>
            <div className="fila_horario">
              <span className="fila_horario_dia">Viernes</span>
              <span className="fila_horario_hora">19:30 a 1:30</span>
            </div>
            <div className="fila_horario">
              <span className="fila_horario_dia">Sabado</span>
              <span className="fila_horario_hora">19:30 a 1:30</span>
            </div>
            <div className="fila_horario">
              <span className="fila_horario_dia">Domingo</span>
              <span className="fila_horario_hora">Cerrado (excepto verano)</span>
            </div>
          </div>
        </div>

        <div className="pie_firma">
          © {new Date().getFullYear()} Monkeys. Todos los derechos reservados.
        </div>
      </footer>
    </section>
  )
}

export default SeccionLegal

