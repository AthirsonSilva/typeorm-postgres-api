import { getRepository } from 'typeorm'
import { Category } from '../entities/Category'

type CategoryRequest = {
	name: string
	description: string
}

export class CreateCategoryService {
	async execute({ name, description }: CategoryRequest): Promise<Category> {
		const repository = getRepository(Category)

		const categoryAlreadyExists = await repository.findOne({
			where: { name }
		})

		if (categoryAlreadyExists) {
			throw new Error('Category already exists')
		}

		const newCategory = await repository.create({ name, description })

		await repository.save(newCategory)

		return newCategory
	}
}
