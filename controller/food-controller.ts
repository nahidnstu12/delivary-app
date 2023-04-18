import Food from "../models/food-model";
export const fetchAll = async (req: any, res: any) => {
  try {
    const data = await Food.find({});
    res.status(200).json({ data, total: data.length });
  } catch (err: any) {
    console.log(err);
    res.send(err.message);
  }
};
