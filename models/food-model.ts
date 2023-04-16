const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  category: String,
  image: String,
  variants: Array,
  price: {
    small: {
      type: Number,
    },
    medium: {
      type: Number,
    },
    large: {
      type: Number,
    },
  },
});

const Food = new mongoose.model("Food", foodSchema);
module.exports = Food;

//controller
exports.fetchAll = async (req, res) => {
  try {
    const data = await Food.find({}).select({
      _id: 0,
      __v: 0,
    });
    res.status(200).json({ data, total: data.length });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
