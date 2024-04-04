import express from "express";

const app =express();
app.use(express.json());
const PORT =5000;

app.get("/order/food", (req, res) => {
const {menu, price,quantity} =req.query;

const {user, country}= req.headers;
   const totalPrice = parseInt(price) * parseInt(quantity);
  
    res.json({
        message: `You have ordered ${quantity} ${menu}`,
        bill:`Your total bill is ${totalPrice}`,
        details:` You are ${user} from ${country}`
    })
})


app.get("/food/:type", (req, res) => {
const {type}= req.params

if(type=="veg"){
    return res.json({
        message: "You have orderd food"
    })
}
else{
    return res.json({
        message: "You have orderd non-veg food"
})
    res.json({
        message: "You have ordered food"
    })
}
})

app.post('/user', (req, res)=>{
const{name, age} = req.body;

res.json ({
    message:`Hello ${name}, you are ${age} years old`
})
})
app.listen(PORT, ()=>{

    console.log(`Server is running on port ${PORT}`);
})