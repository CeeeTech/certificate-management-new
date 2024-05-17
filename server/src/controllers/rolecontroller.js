const Role = require("../models/role");

const createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).send({ message: "role created successfully", data: role });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).send(roles);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.body.role);
    if (role) {
      res.status(200).send({ message: "role deleted successfully" });
    } else {
      res.status(404).send({ message: "role not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createRole, getRoles, deleteRole };
