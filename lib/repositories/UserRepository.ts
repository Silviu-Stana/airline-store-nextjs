import { getDbConnection } from '../db';

export class UserRepository {
    async getAllUsers() {
        const db = await getDbConnection();
        const result = await db.request().query('SELECT * FROM Users');
        return result.recordset;
    }

    async getUserById(id: number) {
        const db = await getDbConnection();
        const result = await db
            .request()
            .input('id', id)
            .query('SELECT * FROM Users WHERE userId=@id');

        return result.recordset[0];
    }
}
