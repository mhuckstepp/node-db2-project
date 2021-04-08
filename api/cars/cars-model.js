const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where({ id }).first();
};

const create = async (car) => {
  const [id] = await db("cars").insert(car);
  return getById(id);
};

const getByVin = async (testVin) => {
  const counter = await db("cars").count("vin").where({ vin: testVin });
  console.log(counter);
  const checker = counter[0]["count(`vin`)"];
  console.log(checker);
  return checker;
};

module.exports = { getAll, getById, create, getByVin };
