import { Router } from 'express'
import { CreateCategoryController } from './database/controllers/Categories/CreateCategoryController'
import { GetAllCategoriesController } from './database/controllers/Categories/GetCategoryController'
import { CreateVideoController } from './database/controllers/Videos/CreateVideoController'

const routes = Router()

// Categories
routes.post('/categories', new CreateCategoryController().handle)
routes.get('/categories', new GetAllCategoriesController().handle)

// Videos
routes.post('/videos', new CreateVideoController().handle)

export { routes }
