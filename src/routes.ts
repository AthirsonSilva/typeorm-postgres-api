import { Router } from 'express'
import { CreateCategoryController } from './database/controllers/CreateCategoryController'
import { GetAllCategoriesController } from './database/controllers/GetCategoryController'

const routes = Router()

routes.post('/categories', new CreateCategoryController().handle)
routes.get('/categories', new GetAllCategoriesController().handle)

export { routes }
