import pg from 'pg'
import {DB_USER,DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,PORT} from '../confing.js'

export const pool = new pg.Pool({
    user:DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})

// pool.query('SELECT NOW()').then(res=>{
//     console.log(res);
    
// })
