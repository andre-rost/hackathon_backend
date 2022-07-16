const db = require('../database/client')

const list_all = (req, res) => {
    db.query("SELECT * FROM users ORDER BY id ASC;")
      .then((data) => res.json(data.rows))
      .catch((error) => res.status(500).send(error.message));
}

const me = (req, res) => {
    db.query("SELECT id FROM users ORDER BY RANDOM;")
    res.send("This is me")
}

// const find_one = (req, res) => (req, res) => {
//     const { id } = req.params;
//     db.query(`SELECT * FROM authors WHERE id = $1`, [id],)
//     .then((data) => res.json(data.rows))
//     .catch((error) => res.status(500).send(error.message))
// }

// const create_one = (req, res) => {
//     const { username, avatatar, date_joined } = req.body;
//     const createUser = {
//         text: `INSERT INTO
//             users
//                 (username, avatar, date_joined)
//                 VALUES ($1, $2, $3, $4)
//                 RETURNING *
//                 `,
//             values: [username, avatar, date_joined],
//     }
//     db.query(createUser)
//     .then((data) => res.json(data.rows))
//     .catch((error) => res.status(500).send(error.message))
// }

// const delete_one = (req, res) => {
//     const { id } = req.params;
//     const deleteOneUser = {
//         text: `DELETE FROM users WHERE id = $1 RETURNING *`, 
//         values: [id],
//     }
//     db.query(deleteOneUser)
//     .then((data) => res.json(data.rows))
//     .catch((error) => res.status(500).send(error.message))
// }

module.exports = {
    list_all,
    // find_one,
    // create_one,
    // delete_one,
    me
}