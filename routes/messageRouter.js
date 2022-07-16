const express = require("express");
const messageRouter = express.Router();

// const tweets = require('../data/tweets')
const {
    list_all
} = require('../controllers/messageControllers')


messageRouter.get("/", list_all);


module.exports = messageRouter




// const express = require("express");
// const messageRouter = express.Router();
// const db = require('../database/client')
// // const tweets = require('../data/tweets')

// //Get all messages

// messageRouter.get("/messages", (req, res) => {
//     db.query("SELECT * FROM messages ORDER BY id ASC;")
//       .then((data) => res.json(data.rows))
//       .catch((error) => res.status(500).send(error.message));
//   });

// //Get one message

//   messageRouter.get("/messages/:id", (req, res) => {
//     const { id } = req.params;
//     db.query(`SELECT * FROM messages WHERE id = $1`, [id],)
//     .then((data) => res.json(data.rows))
//     .catch((error) => res.status(500).send(error.message))
// })

// //Create a message

// messageRouter.post("/messages", (req, res) => {
//     const { text, image, date_posted, posted_by } = req.body;
//     const createMessage = {
//         text: `INSERT INTO
//             messages
//                 (text, image, date_posted, posted_by)
//                 VALUES ($1, $2, $3, $4)
//                 RETURNING *
//                 `,
//             values: [text, image, date_posted, posted_by],
//     }
//     db.query(createMessage)
//     .then((data) => res.json(data.rows))
//     .catch((error) => res.status(500).send(error.message))
// })

// //Delete message

// messageRouter.delete("/messages/:id", (req, res) => {
//     const { id } = req.params;
//     const deleteOneMessage = {
//         text: `DELETE FROM messages WHERE id = $1 RETURNING *`, 
//         values: [id],
//     }
//     db.query(deleteOneMessage)
//     .then((data) => res.json(data.rows))
//     .catch((error) => res.status(500).send(error.message))
// })




// // messageRouter.get("/messages", (req, res) => {
// //     res.send(tweets)        
// // })

// // messageRouter.get("/messages/:id", (req, res) => {
// //     const message = tweets.find((message) => message.id === Number(req.params.id));

// //     if(message){
// //         res.send(message);
// //     } else {
// //         res.status(404).send("That message ain't there")
// //     }
// // });

// module.exports = userRouter