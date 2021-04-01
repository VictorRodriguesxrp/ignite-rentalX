import { ICreateCarsDTO } from "../dtos/ICreateCarDTO";

interface ICarsRepository {
  create(data: ICreateCarsDTO);
}

export { ICarsRepository };
