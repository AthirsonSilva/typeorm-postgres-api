import { AppDataSourceRepository } from '..'
import { Category } from '../entities/Category'

export class GetAllCategoriesService {
	async execute() {
		const repository = AppDataSourceRepository(Category)

		const categories = await repository.find()

		return categories
	}
}
