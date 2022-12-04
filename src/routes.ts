import { Router } from 'express'
import { CreateCategoryController } from './database/controllers/Categories/CreateCategoryController'
import { GetAllCategoriesController } from './database/controllers/Categories/GetCategoryController'
import { CreateVideoController } from './database/controllers/Videos/CreateVideoController'
import { DeleteVideoController } from './database/controllers/Videos/DeleteVideoController'
import { FindVideosByNameController } from './database/controllers/Videos/FindVideoByNameController'
import { GetAllVideosController } from './database/controllers/Videos/GetVideosController'
import { UpdateVideoController } from './database/controllers/Videos/UpdateVideoController'

const routes = Router()

// Categories
routes.post('/categories', new CreateCategoryController().handle)
routes.get('/categories', new GetAllCategoriesController().handle)

// Videos
routes.post('/videos', new CreateVideoController().handle)
routes.get('/videos', new GetAllVideosController().handle)
routes.delete('/videos', new DeleteVideoController().handle)
routes.patch('/videos', new UpdateVideoController().handle)
routes.post('/video', new FindVideosByNameController().handle)

export { routes }
