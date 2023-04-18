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

const Food = new mongoose.model("Product", foodSchema);

export default Food;

//controller
