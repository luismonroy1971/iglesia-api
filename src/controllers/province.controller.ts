import { Response, Request, NextFunction } from "express";
import Province from "../models/province.model";
import { CreateProvince } from "../schema/province.schema";

export const createProvince = async (
  req: Request<unknown, unknown, CreateProvince>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      department,
      province,
    } = req.body;
    const ProvinceFound = await Province.findOne({
      $and: [
        { department: { $regex: `.*${department}.*` , $options: 'i' } }, // Busca el texto en campo1 (insensible a mayúsculas/minúsculas)
        { province: { $regex: `.*${province}.*` , $options: 'i' } }  // Busca el texto en campo2 (insensible a mayúsculas/minúsculas)
      ]
    });
    // if a food with the same title is found
    if (ProvinceFound)
      return res
        .status(400)
        .json({ message: "Provincia ya existe" });

    // create a new food
    const newProvince = new Province({
      department,
      province
    });

    const savedProvince = await newProvince.save();

    res.json(savedProvince);
  } catch (error) {
    next(error);
  }
};

export const getProvinces = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departamento = req.query.department;
    const provinces = await Province.find({
      $and: [
        { department: { $regex: `.*${departamento}.*` , $options: 'i' } }, // Busca el texto en campo1 (insensible a mayúsculas/minúsculas)
      ]
    });
    return res.json(provinces);
  } catch (error) {
    next(error);
  }
};

