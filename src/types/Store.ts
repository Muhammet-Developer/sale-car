interface addCarType {
    allCarData:addCarDataType[]
};

interface addCarDataType{
    id:number;
    name:string;
    image:any;
    urgent:boolean;
    date:any;
    count:number
}