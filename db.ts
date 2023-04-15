const mongoose = require("mongoose");


mongoose
    .connect(
        "mongodb://localhost:27017/practise-db",
        {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("mongodb connected"))
    .catch((err:any) => {
        console.log(err.message);
        process.exit(1);
    });

module.exports = mongoose;