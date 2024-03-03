const express = require('express');
const app = express();
const PORT = 3000;
const { default: mongoose } = require('mongoose');
const { mongoURI } = require('./config/mongodb-config.js');

app.use(express.json());

const authRoutes = require('./routes/authRoutes.js');
const { validationRoutes } = require('./validationRoutes.js');
const { errorHandler } = require('./middleware/errorMiddleware.js');
const { ApiError } = require('./middleware/ApiError.js');
const { passport } = require('./middleware/passport-middleware.js');
//const { sequelize } = require('./config/squelize-config.js');
const { postRouter } = require('./routes/postRouter.js');
const { userRouter } = require('./routes/userRouter.js');

app.use(passport.initialize());
app.use('/api/auth', authRoutes);
app.use('/',userRouter);
app.use('/validate', validationRoutes);
app.use((req, res ,next) => next(new ApiError(404, 'Route not found.')));

app.use(errorHandler);

mongoose.connect(mongoURI)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Failed to connect to mongo'));



// sequelize.sync().then(() => console.log('db is ready'))

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});

