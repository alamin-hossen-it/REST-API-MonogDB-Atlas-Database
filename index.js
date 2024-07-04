const app = require("./app")
const config = require("./config/config")

const PORT = config.app.port;

app.listen(PORT, ()=>{
    console.log(`Server is runnung at http://localhost:${PORT}`)
})