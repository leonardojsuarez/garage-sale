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
      "pictures": [
        "images/products/sillon_1.jpg",
        "images/products/sillon_2.jpg",
        "images/products/sillon_3.jpg",
        "images/products/sillon_4.jpg"
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
      "pictures": [
        "images/products/cama_1.jpg"
      ]
    }
  ]
}

const json = JSON.parse(JSON.stringify(data))

export default json