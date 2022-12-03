import { Router } from 'express'
import { CreateCategoryController } from './database/controllers/CreateCategoryController'
import { CreateCategoryService } from './database/services/CreateCategoryService'

const routes = Router()
const createCategoryService = new CreateCategoryService()
const createCategoryController = new CreateCategoryController(
	createCategoryService
)

routes.post('/categories', createCategoryController.handle)

export { routes }
