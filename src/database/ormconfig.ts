import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
	type: 'postgres',
	host: '127.0.0.1',
	port: 5432,
	username: 'athirson',
	password: '',
	database: 'code_drops_crud',
	synchronize: true,
	logging: true,
	entities: ['src/database/entities/*.ts'],
	migrations: ['src/database/migrations/*.ts']
})

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!')
	})
	.catch((err) => {
		console.error('Error during Data Source initialization', err)
	})

export default AppDataSource
