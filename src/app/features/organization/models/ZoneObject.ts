import {PointDto} from "../../../models/PointDto";
import {AssistantRequestObject} from "./AssistantRequestObject";
import {AnnouncementObject} from "./AnnouncementObject";

export interface ZoneObject{
  id:number;
  name:string;
  geometry:PointDto[];
  assistantRequestsObjects:AssistantRequestObject[];
  announcementObjects:AnnouncementObject[];
}
