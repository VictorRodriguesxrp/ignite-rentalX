import { getRepository, Repository } from "typeorm";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../../repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

// singleton

// DTO - Data Transfer Object

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  // :void é para determinar que uma função vai retornar vazio
  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    // cria a entidade para posteriormente salvar, se não criar antes o typeorm não salva
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({
      name,
    });

    return category;
  }
}

export { CategoriesRepository };
