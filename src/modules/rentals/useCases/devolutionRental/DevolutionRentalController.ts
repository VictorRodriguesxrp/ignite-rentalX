import { Request, Response } from "express";
import { container } from "tsyringe";

import { DevolutionRentalUseCase } from "./DevolutionRentalUseCase";

class DevolutionRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    // http://localhost:3333/rentals/devoluton/{id}

    // sobrescreve o id do usuário para utilizar mesma nomenclatura no id dos parametros
    const { id: user_id } = request.user;
    const { id } = request.params;

    const devolutionRentalUseCase = container.resolve(DevolutionRentalUseCase);

    const rental = await devolutionRentalUseCase.execute({
      id,
      user_id,
    });

    return response.status(200).json(rental);
  }
}

export { DevolutionRentalController };
