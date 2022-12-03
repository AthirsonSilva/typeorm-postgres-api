import { Request, Response } from 'express'
import { CreateCategoryService } from '../services/CreateCategoryService'

export class CreateCategoryController {
	constructor(private createCategoryService: CreateCategoryService) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description } = request.body

		const result = await this.createCategoryService.execute({
			name,
			description
		})

		if (result instanceof Error)
			return response.status(400).json({ error: result.message })

		return response.status(201).json(result)
	}
}
