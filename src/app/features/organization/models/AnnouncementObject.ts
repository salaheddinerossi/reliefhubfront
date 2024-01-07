import {PointDto} from "../../../models/PointDto";

export interface AnnouncementObject{
  id:number;
  title:string;
  status:string;
  organizationId:number;
  arrivePoint:PointDto;
}
