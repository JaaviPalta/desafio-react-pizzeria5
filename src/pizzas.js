// Array de pizzas disponibles
export const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    precio: 5950,
    ingredientes: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    desc: "Deliciosa pizza napolitana con ingredientes frescos"
  },
  {
    id: 2,
    name: "Española",
    precio: 6950,
    ingredientes: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    desc: "Pizza española con mezcla de quesos premium"
  },
  {
    id: 3,
    name: "Pepperoni",
    precio: 6950,
    ingredientes: ["mozzarella", "pepperoni", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    desc: "Clásica pizza de pepperoni con queso mozzarella"
  },
  {
    id: 4,
    name: "Margarita",
    precio: 5490,
    ingredientes: ["mozzarella", "tomate", "albahaca", "aceite de oliva"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba3e6944",
    desc: "Pizza margarita tradicional italiana"
  },
  {
    id: 5,
    name: "Cuatro Quesos",
    precio: 7250,
    ingredientes: ["mozzarella", "gorgonzola", "parmesano", "ricotta"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1160863_640_com.jpg?alt=media&token=d338151e-036c-4e2a-b6d1-0d62ba0a11e0",
    desc: "Exquisita combinación de cuatro quesos"
  },
  {
    id: 6,
    name: "Hawaiana",
    precio: 6490,
    ingredientes: ["mozzarella", "jamón", "piña", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-ham-and-pineapple.jpg?alt=media&token=d1493069-5a9e-4e2a-9f2e-f269d325d023",
    desc: "Pizza hawaiana con jamón y piña"
  }
];

// Array del carrito de compras (simulado)
export const pizzaCart = [
  {
    id: 1,
    name: "Napolitana",
    precio: 5950,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    count: 2
  },
  {
    id: 2,
    name: "Española",
    precio: 6950,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    count: 1
  },
  {
    id: 3,
    name: "Pepperoni",
    precio: 6950,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    count: 3
  }
];
