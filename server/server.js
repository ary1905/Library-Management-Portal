const express = require('express');
const mysql = require("mysql");
const cors = require('cors')
const app = express();
app.use(express.json())

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "library"
});

app.post('/login_auth', (req, res) => {

    const ID = req.body.ID;
    const Pass_word = req.body.Pass_word;

    db.query("SELECT Admin_ID, Admin_password FROM admin_login WHERE Admin_ID = ? AND Admin_password = ? ",
        [ID, Pass_word],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.status(200).send(result);
            }
            else {
                res.send({ message: "Invalid ID/password" });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("server started on 3001");
})