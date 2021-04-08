const { getById } = require("./cars-model");

const checkCarId = (req, res, next) => {
  getById(req.params.id)
    .then((car) => {
      console.log(car);
      next();
    })
    .catch((err) => {
      next(err);
    });
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};
