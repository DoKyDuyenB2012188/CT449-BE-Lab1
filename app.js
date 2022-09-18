const express = require('express');
const contactRouter = require('./app/routes/contactRoutes');
const ApiError = require('./app/api-error');

const app = express();
app.use(express.json());
app.use('/api/contacts', contactRouter);

// ----- handle 404 response
// app.use('*', (req, res, next) => {
//   res.status(404).send({
//     status: 'fail',
//     message: 'Resource not found',
//   });
//   next();
// });
app.use((req, res, next) => {
  return next(new ApiError(404, 'Resource not found'));
});
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    status: 'fail',
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
