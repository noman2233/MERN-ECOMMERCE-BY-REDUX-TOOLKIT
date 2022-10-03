const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {


  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json({
      status: "user not authenticated",

    });
  }
  try {
    jwt.verify(token,process.env.SECRET_KEY, (err, user) => {
      if (err)
        return res.json({ status: "Invalid Token", message: err.message });

      req.user = user;
      next();
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Internal server error", message: error.message });

  }
};

const verifyUser = (req, res, next) => {
    verifyToken(req, res,next,() => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.status(403).json({ status: "You are not autherized" });
      }
    })
 };
  

const verifyAdmin = (req, res, next) => {
  verifyToken(req,res,next,() => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ status: "You are not autherized" });
    }
  })
  
};


module.exports = { verifyToken, verifyUser, verifyAdmin };

