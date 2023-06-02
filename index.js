
const PORT = process.env.PORT || 5000;

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./src/routes/users');
const profileRoutes = require('./src/routes/profile');
const orderRoutes = require('./src/routes/order')
const homeRoutes = require('./src/routes/detailhome')
const middlewareLogs = require('./src/middleware/logs');
require('dotenv').config();

const app = express();

app.use(middlewareLogs);
app.use(express.json());
app.use(cors({
    origin: [`http://localhost:${PORT}`],
    methods: ['POST', 'GET'],
    credentials: true,
})) /
    app.use(cookieParser());

app.use('/', usersRoutes);
app.use('/profile', profileRoutes);
app.use('/order', orderRoutes);
app.use('/detailhome', homeRoutes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})