const jwt = require("jsonwebtoken");
const user = require("../models/user");

const Authmiddleware = async (req, res, next) => {
  const header = req.header("authorization");
  const token = header && header.split(" ")[1];

  //check if the user is trying to access the below routes
  if (
    /*  req.path === "/" || */
    req.path === "/api/auth/Register" ||
    req.path === "/api/auth/login"
  ) {
    return next();
  }

  if (!token) {
    return res.status(401).send({ message: "Access Denied" });
  }

  //verify the token
  jwt.verify(token, process.env.JWT_KEY, async (err, decodeduser) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).send({ message: "Token expired" });
      } else {
        return res.status(404).send({ message: "Invalid token" });
      }
    }

    try {
      // Check if the user exists
      const user = await User.findById(decodeduser._id)
        .populate("role")
        .select("-password");
      req.user = user._id;
      req.user.role = user.role.name; // Get the role of the user
      next();
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  });
};

module.exports = Authmiddleware;
