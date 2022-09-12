import { sql_query } from "../../DB/sqldb";

const handler = async (_, res) => {
    try {
        const results = await sql_query(
            `SELECT * FROM posts
            ORDER BY post_title DESC
            LIMIT 10`
        );
        return res.json(results);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export default handler;