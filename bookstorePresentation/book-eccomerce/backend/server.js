const express = require("express");
const mysql = require("mysql");
const path = require("path");

const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookstore",
});

//Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

//Serve static images from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

//API endpoint to fetch books
app.get("/api/books", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) {
      console.error("Error fetching books:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

//Start the backend server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
