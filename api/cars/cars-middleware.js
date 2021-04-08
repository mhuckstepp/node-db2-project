const { getById, getByVin } = require("./cars-model");
var vinValidator = require("vin-validator");

const checkCarId = (req, res, next) => {
  getById(req.params.id)
    .then((car) => {
      if (car) {
        req.body.car = car;
        next();
      } else {
        res
          .status(404)
          .json({ message: `car with id ${req.params.id} is not found` });
      }
    })
    .catch((err) => {
      next(err);
    });
};

const checkCarPayload = (req, res, next) => {
  const car = req.body;
  if (!car.vin) {
    res.status(400).json({ message: "vin is missing" });
  } else if (!car.make) {
    res.status(400).json({ message: "make is missing" });
  } else if (!car.model) {
    res.status(400).json({ message: "model is missing" });
  } else if (!car.mileage) {
    res.status(400).json({ message: "mileage is missing" });
  }
  next();
};

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  const isValidVin = vinValidator.validate(vin);
  if (isValidVin) {
    next();
  } else {
    res.status(400).json({ message: `vin ${vin} is invalid` });
  }
};

const checkVinNumberUnique = (req, res, next) => {
  const { vin } = req.body;
  getByVin(vin).then((numOfVins) => {
    if (numOfVins) {
      res.status(400).json({ message: `vin ${vin} already exists` });
    } else {
      next();
    }
  });
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
