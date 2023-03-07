const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // try {
  //   const token = req.headers.authorization.split(' ')[1];
  //   const decodedToken = jwt.verify(token, process.env.TOKEN);
  //   const userId = decodedToken.userId;
  //   const isAdmin = decodedToken.isAdmin;
    
  //   // req.auth = {userId: userId};
  //   if (req.body.userId && req.body.userId !== userId) {
  //     throw 'Invalid user ID';
  //   } else {
  //     req.auth = {userId: userId, isAdmin:isAdmin}
  //     next();
  //   }
  // } catch {
  //   res.status(401).json({
  //     error: new Error('Invalid request!')
  //   });
  // }

  const token = req.header("x-auth-token");

  if(!token) return res.status(401).send("Access denied, token not found")

  try {
    const user = jwt.verify(token, process.env.TOKEN);
    req.user = user;
    next()

  } catch (error){
    res.status(400).send("Invalid")
  }
};