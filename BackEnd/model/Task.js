import {db} from "../db/database.js";

export default class Task {
   
    static async criarTask(description) {
        const res = await db.query('INSERT INTO task(description) VALUES($1) RETURNING *',[description]);
        return res.rows[0];
    }

    static async listarTodasTask() {
        const res = await db.query('SELECT * FROM task ORDER BY id');
        return res.rows;
    }

    static async listarUmaTask(id) {
        const res = await db.query('SELECT * FROM task WHERE id = $1', [id]);
        return res.rows;
    }

    static async alterarTask(id, newTask) {
        const res = await db.query('UPDATE task SET description = $2, isdone = $3 WHERE id = $1 RETURNING *', [id, newTask.description, newTask.isDone]);
        return res.rows;
    }

    static async deletarTask(id) {
        const res = await db.query('DELETE FROM task WHERE id = $1 RETURNING *', [id]);
        return res.rows;
    }
}