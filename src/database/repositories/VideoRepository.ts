import { Repository } from 'typeorm'
import { AppDataSourceRepository } from '..'
import { Video } from '../entities/Video'
import { Category } from './../entities/Category'

export default class extends Repository<Video> {
	async createAndSave(
		name: string,
		description: string,
		duration: string,
		category: string
	): Promise<Video> {
		const categoryRepository = AppDataSourceRepository(Category)

		const category_id = await categoryRepository
			.findOne({ where: { name: category } })
			.then((category) => category.id)

		const video = this.create({
			name,
			description,
			duration,
			category_id
		})
		await this.save(video)
		return video
	}

	async listAll(): Promise<Video[]> {
		const videos = await this.find()
		return videos
	}
}
