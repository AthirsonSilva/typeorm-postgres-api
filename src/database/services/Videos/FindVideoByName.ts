import { AppDataSource } from '../../'
import { Video } from '../../entities/Video'

type VideoRequest = {
	name: string
}

export class FindVideosByNameService {
	async execute({ name }: VideoRequest): Promise<Video | Error> {
		try {
			const videoRepository = AppDataSource.getRepository(Video)

			const video = await videoRepository.findOne({
				where: { name }
			})

			if (!video) {
				return new Error('Video not found')
			}

			return video
		} catch (error) {
			throw new Error(error.message as string)
		}
	}
}
