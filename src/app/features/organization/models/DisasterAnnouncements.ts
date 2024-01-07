import {PointDto} from "../../../models/PointDto";
import {ZoneObject} from "./ZoneObject";

export interface DisasterAnnouncements{
  name:string;
  mainZone:PointDto[];
  zoneObjects:ZoneObject[];
}
