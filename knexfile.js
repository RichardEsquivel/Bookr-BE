module.exports = {

	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/bookr.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
			tableName: 'migrations',
		},
		seeds: { directory: './data/seeds' },
	},
	production: {
		client: 'postgresql',
		connection: {
			host: process.env.DATABASE_HOST,
			database: process.env.DATABASE_NAME,
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './data/migrations',
			tableName: 'migrations',
		},
		seeds: { directory: './data/seeds' },
	},
	testing: {
		client: 'sqlite3',
		connection: {
			filename: './data/test.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		}
	}

};
