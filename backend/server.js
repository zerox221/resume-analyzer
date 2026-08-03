const experss = require('express');
const connectDB = require('./config/database');
const authRouter = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.routes');
const expressFileUpload = require('express-fileupload');




const cors = require("cors");
const genrateInterviewReport = require('./services/ai.service');



const app = experss();

require('dotenv').config();
app.use(experss.json());
app.use(cookieParser());
app.use(expressFileUpload({
  useTempFiles:true,
  tempFileDir : "/temp/",
}))

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

const PORT = process.env.PORT || 3000


app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);

app.listen(PORT,()=>{
    console.log(`server is running at port number ${PORT}`);
})
connectDB();

