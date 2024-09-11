const express = require("express");
const morgan = require("morgan");

const app = express();

let products = [
  {
    id: 1,
    name: "Keyboard",
    price: 100,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products", (req, res) => {
  res.send("Actualizando products");
});

app.delete("/products/:id", (req, res) => {
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
    );

  if (!productFound)
    return res.status(404).json({
      message: "Product not found",
    });
    
    products = products.filter((p) => p.id !== parseInt(res.params.id))


  console.log(products);
  res.status(204);
});

app.get("/products/:id", (req, res) => {
  const productFound = products.find(function (product) {
    return product.id == req.params.id;
  });
  if (!productFound)
    return res.status(404).json({
      message: "Product not found",
    });
  console.log(productFound);
  res.json(productFound);
});

app.listen(3000);

console.log(`Server on port ${3000}`);
