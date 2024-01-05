import {PointDto} from "../../../models/PointDto";

export  interface DisasterZone{
  disasterId:number;
  disasterName:string;
  polygon:PointDto[]
}
