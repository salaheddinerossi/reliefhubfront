import {PointDto} from "../../../models/PointDto";

export interface ReliefRequest{
  fullname:string;
  phone:string;
  localisation:PointDto;
  address:string;
  expressNeeds:string;
  disasterId:number;

}
