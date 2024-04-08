const productService = require("../services/product.services");

exports.findAll = async (req, res) => {
  try {
    const result = productService.findAll();
    console.log("Find all products");
    res.status(200).json({ data: result });
    console.log("Success in reading all products");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Problem in reading categories");
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  console.log("Find product:", id);
  try {
    const result = await productService.findOne(id);
    res.status(200).json({ data: result });
    console.log("Succes in retrieving product");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Problem in retrieving product");
  }
};

exports.create = async (req, res) => {
  const data = req.body;
  console.log("Insert new product");
  try {
    const result = await productService.create(data);
    res.status(200).json({ data: result });
    console.log("Success in inserting product");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Problem in inserting product", err);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const result = productService.delete(id);
    res.status(200).json({ data: result });
    console.log("Deletion of product succeed");
  } catch (err) {
    res.status(404).json({ data: err });
    console.log("Deletion of product failed");
  }
};
