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
  const counterResult = await db("cars").count("vin").where({ vin: testVin });
  const counter = counterResult[0]["count(`vin`)"];
  return counter;
};

module.exports = { getAll, getById, create, getByVin };
