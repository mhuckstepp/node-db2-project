exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "231203812093",
          make: "tesla",
          model: "3",
          mileage: 9933,
          title: "good",
          transmission: "manual",
        },
        {
          vin: "2312067612093",
          make: "Mazda",
          model: "cheap",
          mileage: 13,
          title: "bad",
          transmission: "auto",
        },
        {
          vin: "2312067672093",
          make: "Honda",
          model: "bronco",
          mileage: 22,
          title: "good",
          transmission: "manual",
        },
      ]);
    });
};
