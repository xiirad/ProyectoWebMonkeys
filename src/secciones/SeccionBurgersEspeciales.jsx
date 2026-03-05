function SeccionBurgersEspeciales() {
  return (
    <section
      className="seccion_bloque seccion_burgers_especiales"
      id="seccion_burgers_especiales"
    >
      <div>
        <h2 className="titulo_seccion">Burgers especiales</h2>
        <p className="texto_intro_especiales">
          Ediciones limitadas, colaboraciones y las locuras que solo un
          mono haria en cocina. Vuelan rapido y cambian a menudo, por eso
          las veras actualizadas solo aqui y en el local.
        </p>
      </div>
      <div className="grid_especiales">
        <div className="tarjeta_especial">
          <div className="tarjeta_especial_etiqueta">Edicion limitada</div>
          <div className="tarjeta_especial_titulo">Monkey del mes</div>
          <div className="tarjeta_especial_detalle">
            Una burger diferente cada mes inspirada en sabores de todo el
            mundo. Pregunta en sala cual esta rugiendo ahora mismo.
          </div>
          <div className="tarjeta_especial_estado">
            Disponible solo en sala · Unidades limitadas.
          </div>
        </div>
        <div className="tarjeta_especial">
          <div className="tarjeta_especial_etiqueta">Coleccion anterior</div>
          <div className="tarjeta_especial_titulo">
            Hall of fame Monkeys
          </div>
          <div className="tarjeta_especial_detalle">
            Las burgers que han hecho historia en Monkeys. De vez en cuando
            rescatamos una de la pared para que vuelva a la plancha.
          </div>
          <div className="tarjeta_especial_estado">
            Sigue nuestras redes para saber cuando vuelven.
          </div>
        </div>
        <div className="tarjeta_especial">
          <div className="tarjeta_especial_etiqueta">Proximamente</div>
          <div className="tarjeta_especial_titulo">Colab Monkeys</div>
          <div className="tarjeta_especial_detalle">
            Chefs amigos, marcas de salsas y locos de las brasas. Muy pronto
            nuevas burgers de colaboracion.
          </div>
          <div className="tarjeta_especial_estado">
            Atento a Instagram para no perderte ninguna.
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionBurgersEspeciales

