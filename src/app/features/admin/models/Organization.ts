export interface Organization{
    id:number;
    name:string;
    address:string;
    email:string;
    password:string;
    description:string;
    documents:string;
    isActive?:boolean;
}
