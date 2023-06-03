require("dotenv").config();
const Koa = require('koa');
const koaBody = require("koa-bodyparser")
const studentRoutes = require("./routes/StudentRoutes");
const mongoose = require("mongoose");
const cors = require('@koa/cors')

const app = new Koa();
app.use(cors())
app.use(koaBody()) // Middleware


app.use(studentRoutes.routes());

mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(() => {
    console.log("Connected to MongoDB");
    const port = process.env.PORT || 4000;
    app.listen(port , () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((error) => {
    console.log("Failed to connect to MongoDB" , error);
})