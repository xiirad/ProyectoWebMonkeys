function SeccionSobre() {
  return (
    <section
      className="seccion_bloque seccion_sobre"
      id="seccion_sobre"
    >
      <h2 className="titulo_seccion">Sobre Monkeys</h2>
      <div className="grid_sobre">
        <div className="bloque_sobre">
          <p className="texto_sobre">
            Monkeys es una hamburgueseria de barrio con alma de cocina
            callejera. Picamos, mezclamos y montamos cada burger a mano
            todos los dias. Nada se queda preparado de un dia para otro.
          </p>
          <p className="texto_sobre">
            Creemos en el producto fresco, en las cocciones al punto y en
            los detalles que hacen que quieras volver: patatas siempre
            crujientes, salsas propias y una carta corta pero afinada.
          </p>
        </div>

        <div className="bloque_sobre">
          <div className="bloque_contacto">
            <div className="fila_contacto">
              <span className="etiqueta_contacto">Telefono de reservas:</span>
              <span className="telefono_destacado">Telefono Monkeys</span>
            </div>

            <div className="fila_contacto">
              <span className="etiqueta_contacto">Contacto:</span>
              <div className="grupo_redes">
                <a
                  href="#"
                  aria-label="Instagram Monkeys"
                  className="icono_red_social icono_instagram"
                >
                  IG
                </a>
                <a
                  href="#"
                  aria-label="Whatsapp Monkeys"
                  className="icono_red_social icono_whatsapp"
                >
                  WA
                </a>
              </div>
            </div>

            <p className="nota_pedidos">
              No se pueden pedir burgers por la pagina web. Usa esta carta
              para elegir tu combo y llamanos para reservar mesa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionSobre

