const userService = require("../services/user.services");

exports.findAll = async (req, res) => {
  console.log("Find all users");
  try {
    const result = userService.findAll();
    res.status(200).json({ data: result });
    console.log("Success in reading all users");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Problem in reading users");
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  console.log("Find user:", id);
  try {
    const result = await userService.findOne(id);
    res.status(200).json({ data: result });
    console.log("Succes in retrieving user");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Problem in retrieving user");
  }
};

exports.create = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const address = req.body.address;
  const phone = req.body.phone;
  try {
    const result = await userService.create(
      username,
      password,
      name,
      surname,
      email,
      address,
      phone
    );
    res.status(200).json({ data: result });
    console.log("Success in inserting user");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Problem in inserting user", err);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const result = userService.delete(id);
    res.status(200).json({ data: result });
    console.log("Deletion of user succeed");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Deletion of user failed");
  }
};
