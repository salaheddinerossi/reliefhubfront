import {PointDto} from "../../../models/PointDto";
import {ZonePolygon} from "./ZonePolygon";

export interface DisasterPolygon{
    name:string;
    mainZone:PointDto[];
    zones:ZonePolygon[];
}
