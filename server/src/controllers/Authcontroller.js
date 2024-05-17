const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
const Register = async (req, res) => {
  try {
    var userdata = req.body;

    const user = await User.findOne({ email: userdata.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "user with given email already exists" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashpassword = await bcrypt.hash(userdata.password, salt);
    const newUser = await User.create({ ...userdata, password: hashpassword });
    res
      .status(201)
      .send({ message: "user created successfully", data: newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//login
const login = async (req, res) => {
  try {
    const userdata = req.body;

    const user = await User.findOne({ email: userdata.email }).populate("role");
    if (!user) {
      return res
        .status(404)
        .send({ message: "user with given email does not exist" });
    }
    const validpassword = await bcrypt.compare(
      userdata.password,
      user.password
    );
    if (!validpassword) {
      console.log("invalid password");
      return res.status(400).send({ message: "invalid password" });
    }
    const role = await Role.findById(user.role);
    if (!role) {
      console.log("role not found");
      return res.status(404).send({ message: "role not found" });
    }
    /* console.log(role); */
    const permissions = role
      ? {
          user: role.user,
          certificate: role.course,
        }
      : {};

    const token = jwt.sign(
      { _id: user._id, role: user.role, permissions },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );
    /*  console.log(permissions); */
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
};

module.exports = { Register, login };
