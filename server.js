const mongoose = require("mongoose");
// GOdMjEZWABEhYLzZ;
const app = require("./app");
const DB_HOST =
  "mongodb+srv://dmytro:GOdMjEZWABEhYLzZ@cluster0.hpqcrkd.mongodb.net/contacts_read?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
