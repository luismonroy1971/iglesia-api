import { Response, Request, NextFunction } from "express";
import Department from "../models/department.model";
import { CreateDepartment } from "../schema/department.schema";

export const createDepartment = async (
  req: Request<unknown, unknown, CreateDepartment>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      department,
    } = req.body;

    const DepartmentFound = await Department.findOne({ department });
    // if a food with the same title is found
    if (DepartmentFound)
      return res
        .status(400)
        .json({ message: "Departamento ya existe" });

    // create a new food
    const newDepartment = new Department({
      department,
    });

    const savedDepartment = await newDepartment.save();

    res.json(savedDepartment);
  } catch (error) {
    next(error);
  }
};

export const getDepartments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departments = await Department.find();
    return res.json(departments);
  } catch (error) {
    next(error);
  }
};

