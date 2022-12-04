import { AppDataSourceRepository } from '../../'
import { Video } from '../../entities/Video'

export class GetAllVideosService {
	async execute() {
		try {
			const repository = AppDataSourceRepository(Video)

			const videos = await repository.find()

			return videos
		} catch (error) {
			return new Error(error)
		}
	}
}
