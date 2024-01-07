import {PointDto} from "../../../models/PointDto";

export interface ZonePolygon{
    id:number;
    name:string;
    geometry:PointDto[];

}
