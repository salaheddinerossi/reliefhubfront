import {PointDto} from "../../../models/PointDto";
import {Target} from "../../../models/Target";

export interface AnnouncementPublic{
    id:number;
    title:string;
    description:string;
    image:string;
    departPoint:PointDto;
    arrivePoint:PointDto;
    organizationName:string;
    organizationEmail:string;
    targets:Target[];

}
