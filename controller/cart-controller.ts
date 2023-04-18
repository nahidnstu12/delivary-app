import Cart from "../models/cart-model";

export const fetchAll = async (req: any, res: any) => {
  try {
    const data = await Cart.find({}).populate("product");
    res.status(200).json({ data, total: data.length });
  } catch (err: any) {
    console.log(err);
    res.send(err.message);
  }
};

export const create = async (req: any, res: any) => {
  try {
    // const newCart = new Cart(req.body);
    // const result = await newCart.save();
    const productId = req.body.product;
    // 2nd approach
    // const newCart = {
    //   user_id: req.body.user_id,
    //   product_id: req.body.product_id,
    //   variant: req.body.variant,
    // };
    //

    // const result = await Cart.findOneAndUpdate(
    //   { product_id: productId },
    //   { ...newCart, $inc: { quantity: req.body.quantity } },
    //   { new: true, upsert: true }
    // );

    // 3rd appraoch
    const cartItem = await Cart.findOne({
      product: productId,
      variant: req.body.variant,
    });
    let result;
    if (cartItem) {
      result = await Cart.updateOne(
        { product: productId, variant: req.body.variant },
        { ...req.body, quantity: req.body.quantity + cartItem.quantity }
      );
    } else {
      result = await Cart.create({ ...req.body });
    }

    res.status(201).json({ message: "Insert Successfully", result });
    // console.log(newCart, productId);
    console.log(cartItem, result);
  } catch (err: any) {
    console.log(err);
    res.send(err.message);
  }
};
