import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car brand",
      category_id: "category_id",
      daily_rate: 110,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "12345",
      name: "Car 1",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Brand_Teste",
      category_id: "category_id",
      daily_rate: 110,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "12345",
      name: "Car 2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand_Teste",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Brand",
      category_id: "category_id",
      daily_rate: 110,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "12345",
      name: "Car3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Category",
      category_id: "123456",
      daily_rate: 110,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "12345",
      name: "Car Category",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123456",
    });

    expect(cars).toEqual([car]);
  });
});
