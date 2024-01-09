import {PointDto} from "../../../models/PointDto";

export interface AdminDeclaration{
  id:number;
  fullName:string;
  phoneNumber:string;
  address:string;
  description:string;
  localisation:PointDto;
  isArchived:Boolean;
}
