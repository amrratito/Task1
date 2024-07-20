
const http = require("http");

const server = http.createServer((req,res) => {
  if(req.url === "/api/products"){
    res.write(JSON.stringify(products));
    res.end();
  }
  });


const products = [
  {
    id: 1,
    name: "PanCakes",
    description: "Sweets",
    price: 45
  },
  {
    id: 2,
    name: "Chocolate Molten",
    description: "Sweets",
    price: 50
  }
]


const PORT = 3000;
server.listen(PORT, () => 
console.log(`Server is running on port ${PORT}`)
);