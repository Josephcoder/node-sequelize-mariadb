import { Request, Response } from "express";
import  {User}  from "../models";
class Users {
  createUser = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(await User.create(req.body));
  };
  allUsers = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(await User.findAll());
  };
}
export default new Users();
