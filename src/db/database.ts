const data = {
  "products": [
    {
      "name": "Colchón BOX - King 2 1/2 plazas",
      "description": `
        <ul>
          <li><strong>Color:</strong> Gris</li><li><strong>Material:</strong> Tela</li><li><strong>Medidas:</strong> Largo: 190 cm Ancho: 140 cm Alto: 25 cm</li>
        </ul>
      `,
      "price": 240000,
      "pictures": [
        "images/products/colchon1.webp"
      ]
    },
    {
      "name": "Sillón Reina Mora, Modelo Tokyo con camastro",
      "description": "<h3 dir='ltr'>Sill&oacute;n&nbsp;</h3><ul><li dir='ltr'><strong>Ancho:</strong> 180 cm</li><li dir='ltr'><strong>Profundidad:</strong> 85 cm</li><li dir='ltr'><strong>Alto:</strong> 85 cm<strong><br></strong></li></ul><h3 dir='ltr'>Camastro</h3><ul><li dir='ltr'><strong>Ancho:</strong> 54 cm&nbsp;</li><li dir='ltr'><strong>Alto:</strong> 44 cm</li></ul>",
      "price": 322000,
      "main_image": "images/products/sillon_1.jpg",
      "pictures": [
        "images/products/sillon_2.jpg",
        "images/products/sillon_3.jpg",
        "images/products/sillon_4.jpg",
        "images/products/sillon_1.jpg"
      ]
    },
    {
      "name": "Bicicleta Tern Plegable Link B7",
      "description": "<ul><li>Rodado 20</li><li>Cuadro de aluminio</li><li>7 velocidades</li></ul>",
      "price": 660000,
      "pictures": [
        "images/products/bici_1.jpg"
      ]
    },
    {
      "name": "Cama + 2 mesas de luz minimalista",
      "description": `
        <p dir="ltr"><strong>Largo: </strong>195 cm</p>
        <p dir="ltr"><strong>Ancho:</strong> 161 cm</p>
        <p><strong>Alto:</strong> 30 cm</p>
      `,
      "price": 150000,
      "main_image": "images/products/cama_1.jpg",
      "pictures": []
    },
    {
      "name": "Chromecast 3 Generación",
      "description": `
        <p>Conectividad wifi y bluetooth.</p>
        <p>Interfaz de conexión HDMI.</p>
        <p>Puerto y tipo de conector: Micro-USB.</p>
      `,
      "price": 84000,
      "main_image": "images/products/chrome_1.jpg",
      "pictures": []
    },
    {
      "name": "Heladera con freezer Patrick Blanca HPK135CD",
      "description": `
        <p dir="ltr">5 a&ntilde;os de uso</p>
<ul>
<li dir="ltr">256 litros de capacidad bruta.</li>
<li dir="ltr">Luz interior.</li>
<li dir="ltr">Estantes regulables en altura en refrigerador.</li>
<li dir="ltr">Medidas: Ancho x Alto x Profundidad</li>
<li dir="ltr">Ancho 54 cm. x Alto 159cm. x Prof. 62 cm</li>
</ul>
<p dir="ltr">&nbsp;</p>
      `,
      "price": 534000,
      "main_image": "images/products/heladera_1.jpg",
      "pictures": []
    },
    {
      "name": "Vaporera Eléctrica Liliana 12lts",
      "description": `
        <ul>
<li dir="ltr">Voltaje: 220V</li>
<li dir="ltr">Alimentos recomendados: arroz.</li>
<li dir="ltr">Con 3 niveles.</li>
<li dir="ltr">Con 5 programas.</li>
<li dir="ltr">Con recipiente de vapor de 1.4L.</li>
<li dir="ltr">Con rejilla de huevos.</li>
<li dir="ltr">Con temporizador y apagado autom&aacute;tico.</li>
<li dir="ltr">Con alarma sonora.</li>
<li dir="ltr">Con colector de jugos.</li>
</ul>
      `,
      "price": 78000,
      "main_image": "images/products/vaporera_1.jpg",
      "pictures": []
    },
    {
      "name": "Pava Eléctrica Barista Peabody + Jarra Y Filtro Café",
      "description": `
<p dir="ltr">Pava Electrica Peabody, Con Pico de Cisne para filtrados, con m&eacute;todo de goteo</p>
<p dir="ltr">Jarra de vidrio con capacidad de 800 ml</p>

      `,
      "price": 400000,
      "main_image": "images/products/pava_1.jpg",
      "pictures": []
    },
    {
      "name": "Reposapiés angulo graduable DATA",
      "description": `
<ul>
<li dir="ltr"><strong>Ancho:</strong> 50 cm</li>
<li dir="ltr"><strong>Profundidad:</strong> 32 cm</li>
<li dir="ltr"><strong>Altura:</strong> 18 cm</li>
</ul>
      `,
      "price": 54000,
      "main_image": "images/products/reposa_1.jpg",
      "pictures": []
    }
  ]
}

const json = JSON.parse(JSON.stringify(data))

export default json