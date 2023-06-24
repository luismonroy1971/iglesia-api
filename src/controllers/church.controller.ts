import { Response, Request, NextFunction } from "express";
import Church from "../models/church.model";
import { CreateChurch } from "../schema/church.schema";

export const createChurch = async (
  req: Request<unknown, unknown, CreateChurch>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      address,
      latitude,
      length,
      pastorName,
      email,
      phone1,
      phone2,
      facebookPage,
      instagramPage,
      scheduleSabbathSchool,
      scheduleWorshipPrayer,
      scheduleYouthWorship,
      province,
      district,
      image,
    } = req.body;

    const ChurchFound = await Church.findOne({ email });
    // if a food with the same title is found
    if (ChurchFound)
      return res
        .status(400)
        .json({ message: "Email affiliate already exists" });

    // create a new food
    const newChurch = new Church({
      name,
      address,
      latitude,
      length,
      pastorName,
      email,
      phone1,
      phone2,
      facebookPage,
      instagramPage,
      scheduleSabbathSchool,
      scheduleWorshipPrayer,
      scheduleYouthWorship,
      province,
      district,
      image,
    });

    const savedChurch = await newChurch.save();

    res.json(savedChurch);
  } catch (error) {
    next(error);
  }
};

export const getChurchs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const churchs = await Church.find();
    return res.json(churchs);
  } catch (error) {
    next(error);
  }
};

export const getChurchsPart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const texto = req.query.iglesia;
    const churchs = await Church.find({
      $or: [
        { name: { $regex: texto, $options: 'i' } }, // Busca el texto en campo1 (insensible a mayúsculas/minúsculas)
        { address: { $regex: texto, $options: 'i' } }  // Busca el texto en campo2 (insensible a mayúsculas/minúsculas)
      ]
    });
    return res.json(churchs);
  } catch (error) {
    res.status(500).json({ error: 'No se encontraron iglesias' });
    next(error);
  }
};

export const getChurch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const churchFound = await Church.findById(req.params.id);
    if (!churchFound) return res.status(204).json();
    return res.json(churchFound);
  } catch (error) {
    next(error);
  }
};

export const deleteChurch = async (req: Request, res: Response) => {
  const churchFound = await Church.findByIdAndDelete(req.params.id);

  if (!churchFound) return res.status(204).json();

  return res.status(204).json();
};

export const updateChurch = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const ChurchUpdated = await Church.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!ChurchUpdated) return res.status(204).json();
  return res.json(ChurchUpdated);
};
