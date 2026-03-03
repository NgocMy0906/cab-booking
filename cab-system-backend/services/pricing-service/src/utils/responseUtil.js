const successResponse = (res, data) => {
  return res.status(200).json({
    success: true,
    data
  });
};

const errorResponse = (res, message) => {
  return res.status(400).json({
    success: false,
    message
  });
};

module.exports = { successResponse, errorResponse };