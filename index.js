require('dotenv').config();

const PORT = process.env.PORT || 5000;

const express = require('express');
const usersRoutes = require('./src/routes/users');
const profileRoutes = require('./src/routes/profile');
const orderRoutes = require('./src/routes/order')
const homeRoutes = require('./src/routes/detailhome')
const middlewareLogs = require('./src/middleware/logs');
const app = express();

app.use(middlewareLogs);
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/profile', profileRoutes);
app.use('/order',orderRoutes);
app.use('/home', homeRoutes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})