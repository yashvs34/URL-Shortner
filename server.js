const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./configs/mongoDBconnection');
const urlRoutes = require('./routes/urlRoutes');
const { sanitizeInput } = require('./middlewares/sanitizeInput');
const limiter = require('./middlewares/rateLimitter');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(sanitizeInput);
app.use(limiter);

app.use('/api', urlRoutes);

app.get('/', (req, res) => {
    connectDB();
    res.send("Hello World");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})