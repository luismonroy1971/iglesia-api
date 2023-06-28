import { Response, Request, NextFunction } from "express";
import District from "../models/district.model";
import { CreateDistrict } from "../schema/district.schema";

export const createDistrict = async (
  req: Request<unknown, unknown, CreateDistrict>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      department,
      province,
      district
    } = req.body;
    const DistrictFound = await District.findOne({
      $and: [
        { department: { $regex: `.*${department}.*` , $options: 'i' } }, // Busca el texto en campo1 (insensible a mayúsculas/minúsculas)
        { province: { $regex: `.*${province}.*` , $options: 'i' } },
        { district: { $regex: `.*${district}.*` , $options: 'i' } }  // Busca el texto en campo2 (insensible a mayúsculas/minúsculas)
      ]
    });
    // if a food with the same title is found
    if (DistrictFound)
      return res
        .status(400)
        .json({ message: "Distrito ya existe" });

    // create a new food
    const newDistrict = new District({
      department,
      province,
      district
    });

    const savedDistrict = await newDistrict.save();

    res.json(savedDistrict);
  } catch (error) {
    next(error);
  }
};

export const getDistricts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departamento = req.query.department;
    const provincia = req.query.province;
    const districts = await District.find({
      $and: [
        { department: { $regex: `.*${departamento}.*` , $options: 'i' } },
        { province: { $regex: `.*${provincia}.*` , $options: 'i' } } // Busca el texto en campo1 (insensible a mayúsculas/minúsculas)
      ]
    });
    return res.json(districts);
  } catch (error) {
    next(error);
  }
};

