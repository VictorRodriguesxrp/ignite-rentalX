import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "new car",
      description: "new car description",
      daily_rate: 100,
      license_plate: "1000",
      fine_amount: 30000,
      brand: "chevrolet",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with an existent license_plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car 1",
        description: "new car description",
        daily_rate: 100,
        license_plate: "FGK123",
        fine_amount: 30000,
        brand: "chevrolet",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Car 1",
        description: "new car description",
        daily_rate: 100,
        license_plate: "FGK123",
        fine_amount: 30000,
        brand: "chevrolet",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "new car description",
      daily_rate: 100,
      license_plate: "ABCD-1234",
      fine_amount: 30000,
      brand: "chevrolet",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
