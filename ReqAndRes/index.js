const express = require('express')
const app = express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));



const data = [
    {id:"1",Name:"Arzuman",Age:20},
    {id:"2",Name:"Hajy",Age:20},
    {id:"3",Name:"Niga",Age:20},
    {id:"4",Name:"Arzuman",Age:20},
    {id:"5",Name:"Hajy",Age:20},
    {id:"6",Name:"Niga",Age:20},
    {id:"7",Name:"Arzuman",Age:20},
    {id:"8",Name:"Hajy",Age:20},
    {id:"9",Name:"Niga",Age:20},
    {id:"10",Name:"Arzuman",Age:20},
    {id:"11",Name:"Hajy",Age:20},
    {id:"12",Name:"Niga",Age:20}
]



app.get("/",(req, res)=>{
        res.json(data)
})
app.get('/user',(req,res)=>{
    const {count,offset}=(req.query)
    console.log(count,offset)
    let dataTwo=data.slice(Number(offset),Number(offset)+Number(count))
    console.log(dataTwo);
    res.json(dataTwo);
})

app.post("/",(req, res)=>{
    console.log(req.body);
        res.json(req.body)
})
app.get("/details/:name",(req,res)=>{
    let name = req.params.name
        
        let newData = data.find(item=>item.Name===name)

        console.log(newData)
        if(newData){

            return res.json(newData)
        }
        res.send("Bele user yoxdu")
})



const PORT =5000
app.listen(PORT,(error)=>{
if(!error){
    console.log(`Server is running on the port ${PORT} `)
}
else{
    console.log("Error");
}
})