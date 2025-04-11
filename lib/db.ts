import sql from 'mssql';

const config: sql.config = {
    user: 'user',
    password: 'password',
    server: 'localhost',
    database: 'silviuAirline',
    options: {
        encrypt: true,
        trustServerCertificate: true, //pentru local dev
    },
};

let pool: sql.ConnectionPool | null = null;

export async function getDbConnection() {
    if (pool) return pool;

    try {
        pool = await sql.connect(config);
        return pool;
    } catch (err) {
        console.log('DB connection error: ', err);
        throw err;
    }
}
