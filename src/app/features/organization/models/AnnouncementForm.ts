import {PointDto} from "../../../models/PointDto";
import {TargetForm} from "./TargetForm";

export interface AnnouncementForm{
  title:string;
  description:string;
  departPoint:PointDto;
  arrivePoint:PointDto;
  image:string;
  zone_id:number;
  authorization_id:number;
  targetsDto:TargetForm[];

}
