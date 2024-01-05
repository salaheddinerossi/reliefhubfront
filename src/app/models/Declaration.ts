import {PointDto} from "./PointDto";

export interface Declaration{
  fullName:string;
  phoneNumber:string;
  address:string;
  description:string;
  localisation:PointDto;
}
