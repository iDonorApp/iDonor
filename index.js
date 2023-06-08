const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./src/routes/users');
const homeRoutes = require('./src/routes/home');
const profileRoutes = require('./src/routes/profile');
const reqdonorRoutes = require('./src/routes/reqdonor');
const reqaktifRoutes = require('./src/routes/reqaktif');
const detailhomeRoutes = require('./src/routes/detailhome');
const middlewareLogs = require('./src/middleware/logs');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: [`https://idonorapi-dot-idonor-trialdevelopment.et.r.appspot.com`],
    methods: ['POST', 'GET'],
    credentials: true,
})) /
    app.use(middlewareLogs);

app.use('/', usersRoutes);
app.use('/', homeRoutes);
app.use('/detailhome', detailhomeRoutes);
app.use('/reqdonor', reqdonorRoutes);
app.use('/reqaktif', reqaktifRoutes);

app.use('/profile', profileRoutes);



app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan pada port ${PORT}`);
  });