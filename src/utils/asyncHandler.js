// using Promises
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };




// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// using try and catch
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       messgae: error.code,
//     });
//   }
// };
