// @ts-ignore
import {NextFunction, Request, Response} from "express";

import {User} from "../models/user.model";
import {IUser} from "../types/user.types";
import {ICommonResponse} from "../types/common.types";
import {IMessage} from "../types/common.types";

class UserController {
     public async getAll(req:Request, res:Response, next: NextFunction): Promise<Response<IUser[]>>{
         try{
             const users = await User.find();

             return res.json(users);

         }catch (e) {
             next(e);
         }

     }

     public async getById(req:Request, res:Response, next: NextFunction): Promise<Response<IUser>>{
         try{
             const {userId} = req.params;
             const user = await User.findById(userId);

             return res.json(user);

         }catch (e) {
             next(e);
         }

     }

     public async create(req:Request, res:Response, next: NextFunction): Promise<Response<ICommonResponse<IUser>>>{
         try{
             const body = req.body;
             const user = await User.create(body);

             return res.status(201).json(
                 {
                     message:"User created!",
                     data: user,
                 }
             );

         }catch (e) {
             next(e);
         }

     }

     public async update(req: Request, res: Response, next: NextFunction): Promise<Response<ICommonResponse<IUser>>> {
         try{
             const { userId } = req.params;

             const updatedUser = await User.findByIdAndUpdate(
                 userId,
                 { ...req.body },
                 { new: true }
             );

             return res.status(200).json({
                 message: "User updated",
                 data: updatedUser,
             });

         }catch (e) {
             next(e);
         }


     }

     public async delete(req: Request, res: Response, next: NextFunction): Promise<Response<IMessage>> {
         try{
             const { userId } = req.params;

             await User.deleteOne({ _id: userId });

             return res.status(200).json({
                 message: "User deleted",
             });

         }catch (e) {
             next(e);
         }


     }
 }

 export const userController = new UserController