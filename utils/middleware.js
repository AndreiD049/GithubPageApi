const errorHandler = (error, req, res, next) => {
  console.log(`Received ${error.name}`);
  const sendToClientErrors = ['Error', 'CastError', 'ValidationError', 'MongoError'];
  if (sendToClientErrors.indexOf(error.name) > -1) {
    return res.json({
      error: error.message,
    });
  }
  return next();
};

module.exports = {
  errorHandler,
};
