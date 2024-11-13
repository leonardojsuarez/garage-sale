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
        "images/products/colchón.webp"
      ]
    },
    {
      "name": "Sillón Reina Mora, Modelo Tokyo con camastro",
      "description": "<h3 dir='ltr'>Sill&oacute;n&nbsp;</h3><ul><li dir='ltr'><strong>Ancho:</strong> 180 cm</li><li dir='ltr'><strong>Profundidad:</strong> 85 cm</li><li dir='ltr'><strong>Alto:</strong> 85 cm<strong><br></strong></li></ul><h3 dir='ltr'>Camastro</h3><ul><li dir='ltr'><strong>Ancho:</strong> 54 cm&nbsp;</li><li dir='ltr'><strong>Alto:</strong> 44 cm</li></ul>",
      "price": 322000,
      "pictures": [
        "images/products/IMG_4188.jpg",
        "images/products/IMG_4203.jpg",
        "images/products/IMG_4204.jpg",
        "images/products/IMG_4206.jpg"
      ]
    },
    {
      "name": "Bicicleta Tern Plegable Link B7",
      "description": "<ul><li>Rodado 20</li><li>Cuadro de aluminio</li><li>7 velocidades</li></ul>",
      "price": 660000,
      "pictures": [
        "images/products/IMG_9537.jpg"
      ]
    }
  ]
}

const json = JSON.parse(JSON.stringify(data))

export default json