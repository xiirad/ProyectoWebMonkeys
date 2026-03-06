import imgAmericana from '../img/Monkeys Americana.jpg'
import imgBrie from '../img/Monkeys Brie.jpg'
import imgCabra from '../img/Monkeys Cabra.jpg'
import imgCampera from '../img/Monkeys Campera.jpg'
import imgCrispyLotus from '../img/Monkeys Crispy Lotus.jpg'
import imgJackDaniels from '../img/Monkeys Jack Daniels BBQ.jpg'
import imgKingKong from '../img/Monkeys King Kong Jr.jpg'
import imgMejicana from '../img/Monkeys Mejicana.jpg'
import imgVeggie from '../img/Monkeys Veggie.jpg'

const guarnicionesCarta = [
  {
    grupo: 'Fritas',
    descripcion: 'Patatas y fritos para compartir',
    items: [
      {
        nombre: 'Fritas al punto de sal',
        detalle: 'Con sal Maldon, mayonesa y ketchup',
        precio: '4,90€',
      },
      {
        nombre: 'Bravas',
        detalle: 'Con salsa brava al curry y cebolla crunchy',
        precio: '5,70€',
      },
      {
        nombre: 'Trufadas',
        detalle: 'Empolvadas en Grana Padano, trufa negra y sal negra',
        precio: '7,90€',
      },
      {
        nombre: 'Chicken rocks',
        detalle: 'Rocas de pollo rebozado extra crujiente',
        precio: '6,50€',
      },
      {
        nombre: 'Tequeños',
        detalle: 'Rellenos de mozzarella para dipear en salsa BBQ (4 uds)',
        precio: '7,50€',
      },
    ],
  },
  {
    grupo: 'Nachos homemade',
    descripcion: 'Nuestra especialidad · Hechos en casa',
    items: [
      {
        nombre: 'Granjeros',
        detalle: 'Con guacamole y cebolleta tierna',
        precio: '6,90€',
      },
      {
        nombre: 'Rabiosos',
        detalle: 'Con cheddar fundido y salsa Valentina',
        precio: '6,90€',
      },
      {
        nombre: 'Mejicanos',
        detalle: 'Con cheddar fundido y pico de gallo',
        precio: '8,90€',
      },
      {
        nombre: 'Texanos',
        detalle: 'Con ternera estilo tex-mex, cebolla y cheddar',
        precio: '11,50€',
      },
      {
        nombre: 'All in',
        detalle:
          'Ternera tex-mex, cheddar fundido, chipotle, pico de gallo, Philadelphia, guacamole y salsa BBQ',
        precio: '14,90€',
      },
      {
        nombre: 'Extra de guacamole',
        detalle: '',
        precio: '1,90€',
      },
    ],
  },
]

const burgersCarta = [
  {
    nombre: 'Cheese burger',
    detalle:
      'Cheddar Jack · Lechuga baby · Pepinillo crunchy · Chipotle spicy',
    precio: '8,90€',
    proteina: '38g',
    imagen: imgVeggie,
  },
  {
    nombre: 'Sweet cabra',
    detalle:
      'Rulo de cabra · Mermelada de tomate · Cebolla crunchy · Brotes',
    precio: '12,50€',
    proteina: '46g',
    imagen: imgCabra,
  },
  {
    nombre: 'Flor de esgueva',
    detalle: 'Queso Flor de Esgueva · Aros de cebolla · Rucula · Mostaza miel',
    precio: '11,60€',
    proteina: '44g',
    imagen: imgVeggie,
  },
  {
    nombre: 'La brie',
    detalle: 'Brie a la plancha · Mayo · Mermelada de pimientos · Rucula',
    precio: '11,60€',
    proteina: '42g',
    imagen: imgBrie,
  },
  {
    nombre: 'Jack daniels BBQ',
    detalle: 'Burger 230g con panceta iberica y cebolleta',
    precio: '13,60€',
    proteina: '53g',
    imagen: imgJackDaniels,
  },
  {
    nombre: 'King kong – brutal',
    detalle: 'Doble burger 300g · Trufa · Brie fundido · Mayo trufada',
    precio: '15,90€',
    proteina: '68g',
    imagen: imgKingKong,
  },
  {
    nombre: 'Americana – top nº1',
    detalle:
      'Doble bacon · Cheddar · Cebolla caramelizada · Iceberg · Mayo',
    precio: '12,90€',
    proteina: '44g',
    imagen: imgAmericana,
  },
  {
    nombre: 'Crispy lotus',
    detalle: 'Galleta Lotus · Bacon · Cebolla pochada · Mayo · Curry brava',
    precio: '11,60€',
    proteina: '37g',
    imagen: imgCrispyLotus,
  },
  {
    nombre: 'Mejicana picante',
    detalle: 'Chipotle · Guacamole · Cheddar · Nachos · Espinaca baby',
    precio: '11,50€',
    proteina: '39g',
    imagen: imgMejicana,
  },
  {
    nombre: 'Campera',
    detalle:
      'Pollo a cuchillo · Cheddar · Mayo Monkeys · Tomate seco · Rucula',
    precio: '11,60€',
    proteina: '47g',
    imagen: imgCampera,
  },
]

const greenBurgers = [
  {
    nombre: 'Avocados',
    detalle: 'Guacamole · Pico de gallo · Espinaca · Rucula · Chimichurri',
  },
  {
    nombre: 'La fresca',
    detalle: 'Tomate · Aros de cebolla · Pepinillos · Iceberg · Mayo',
  },
  {
    nombre: 'Como una cabra',
    detalle: 'Rulo de cabra · Cebolla crunchy · Mermelada de tomate',
  },
  {
    nombre: 'La brie',
    detalle: 'Brie · Mayo Monkeys · Mermelada de pimientos · Rucula',
  },
  {
    nombre: 'Philadelphia',
    detalle: 'Queso Philadelphia · Tomate seco · Espinaca · Oregano',
  },
  {
    nombre: 'Mejicana',
    detalle: 'Chipotle · Guacamole · Cheddar · Nachos · Espinaca',
  },
]

function SeccionCarta() {
  return (
    <section
      className="seccion_bloque seccion_carta"
      id="seccion_carta"
    >
      <div className="bloque_enunciado">
        <div className="subtitulo_carta">Burgers en carta</div>
        <h2 className="titulo_seccion">La carta Monkeys</h2>
        <p className="texto_destacado_carta texto_secundario">
          Burgers hechas a mano, fritas recien salidas de la freidora y
          nachos homemade. Elige tu combo y dejate llevar.
        </p>
      </div>

      <div className="bloque_carta bloque_carta_guarniciones">
        {guarnicionesCarta.map((grupo) => (
          <div key={grupo.grupo} className="grupo_carta_simple">
            <div className="grupo_carta_titulo">{grupo.grupo}</div>
            {grupo.descripcion ? (
              <div className="grupo_carta_descripcion">
                {grupo.descripcion}
              </div>
            ) : null}
            <div className="lista_items_carta">
              {grupo.items.map((item) => (
                <div key={item.nombre} className="item_carta">
                  <div className="item_carta_contenido">
                    <div className="item_carta_nombre">{item.nombre}</div>
                    {item.detalle ? (
                      <div className="item_carta_detalle">
                        {item.detalle}
                      </div>
                    ) : null}
                  </div>
                  <div className="item_carta_precio">{item.precio}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bloque_carta">
        <div className="grupo_carta_titulo">Burgers clasicas</div>
        <div className="grid_burgers_carta">
          {burgersCarta.map((burger) => (
            <article key={burger.nombre} className="tarjeta_burger_carta">
              <div className="burger_carta_imagen_contenedor">
                <img
                  src={burger.imagen}
                  alt={burger.nombre}
                  className="imagen_burger_carta"
                />
              </div>
              <div className="tarjeta_burger_carta_contenido">
                <div className="tarjeta_burger_carta_info">
                  <div className="item_carta_nombre">{burger.nombre}</div>
                  <div className="item_carta_detalle">{burger.detalle}</div>
                  <div className="item_carta_detalle">
                    Proteina {burger.proteina}
                  </div>
                  <div className="item_carta_precio">{burger.precio}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bloque_carta">
        <div className="bloque_green">
          <div className="bloque_enunciado green_enunciado">
            <div className="etiqueta_green">The green burger – Monkeys</div>
            <h3 className="titulo_seccion">La opcion 100% vegana</h3>
            <p className="descripcion_green">
              Base de guisante, remolacha, zanahoria y manzana,
              enriquecida con hierro y B12. Puedes pedir cualquiera de
              estas combinaciones con green burger.
            </p>
          </div>

          <div className="grid_green">
            {greenBurgers.map((burger) => (
              <div key={burger.nombre}>
                <div className="item_green_titulo">{burger.nombre}</div>
                <div className="item_green_detalle">{burger.detalle}</div>
              </div>
            ))}
          </div>

          <div className="item_green_precio">
            Precio green burgers – 12,50€ · Extra de guacamole 1,90€.
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionCarta

