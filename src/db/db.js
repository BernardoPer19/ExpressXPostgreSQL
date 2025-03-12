import pg from 'pg'


export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "mysqlcasa",
    database: "users_db",
    port: 5432
})

// pool.query('SELECT NOW()').then(res=>{
//     console.log(res);
    
// })
