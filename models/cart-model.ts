const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  // product_id: String, //this should be product table relation
  variant: String,
  quantity: Number,
  user_id: String, //this should be user table relation
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Cart = new mongoose.model("Cart", cartSchema);

export default Cart;

//controller
