const app = require("./index")
const connect = require("./config/db")
const port = 5000;
 

app.listen(port,async()=>{
    try {
        await connect()
        console.log(`port is working ${port}.........`)
    } catch (error) {
        throw error
    }
})  


