import { Router } from 'express'
import { CreateCategoryController } from './database/controllers/CreateCategoryController'

const routes = Router()

routes.post('/categories', new CreateCategoryController().handle)

export { routes }
