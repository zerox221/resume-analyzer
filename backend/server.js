const experss = require('express');
const connectDB = require('./config/database');
const authRouter = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.routes');
const expressFileUpload = require('express-fileupload');


const dns = require("dns");

// Force Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);



const cors = require("cors");
const genrateInterviewReport = require('./services/ai.service');




const app = experss();

require('dotenv').config();
app.use(experss.json());
app.use(cookieParser());

app.use(expressFileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://resume-analyzer-theta-six.vercel.app",
  ],
  credentials: true,
}));

const PORT = process.env.PORT || 3000


app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);

app.listen(PORT,()=>{
    console.log(`server is running at port number ${PORT}`);
})
connectDB();

