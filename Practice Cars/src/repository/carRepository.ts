import db from "../config/database.js";

async function getCars() {
  return db.cars.findMany();
}

async function getCar(id: number) {
  return db.cars.findFirst({
    where: { id }
  });
}

async function getCarWithLicensePlate(licensePlate: string) {
  return db.cars.findFirst({
    where: { licensePlate }
  });
}

async function createCar(model: string, licensePlate: string, year: string, color: string) {
  const newCar = {
    model: model,
    licensePlate: licensePlate,
    year: year,
    color: color
  }
  await db.cars.create({
    data: newCar
  });
}

async function deleteCar(id: number) {
  db.cars.delete({
    where: {
      id: id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;