const db = require('../database/client')

const list_all = (req, res) => {
    db.query("SELECT * FROM messages ORDER BY id ASC;")
      .then((data) => res.json(data.rows))
      .catch((error) => res.status(500).send(error.message));
}

module.exports = {
    list_all,
}