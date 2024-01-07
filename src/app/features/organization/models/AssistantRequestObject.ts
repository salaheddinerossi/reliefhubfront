import {PointDto} from "../../../models/PointDto";

export interface AssistantRequestObject{
  id:number;
  expressNeeds:string;
  localisation:PointDto;
}
