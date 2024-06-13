// import * as dotenv from 'dotenv'
// dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// author
const AUTHOR: string = process.env.AUTHOR || 'RH'

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de'
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const PORT: number = +process.env.PORT || 14047
const END_POINT: string = process.env.END_POINT || 'graphql'
const VOYAGER: string = process.env.VOYAGER || 'voyager'
const FE_URL: string = process.env.FE_URL || 'xxx'
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10

export {
	NODE_ENV,
	AUTHOR,
	PRIMARY_COLOR,
	DOMAIN,
	PORT,
	END_POINT,
	VOYAGER,
	FE_URL,
	RATE_LIMIT_MAX,
	GRAPHQL_DEPTH_LIMIT,
	BCRYPT_SALT,
}