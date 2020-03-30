export interface Info {
    id:number,
    name:string,
    username:string,
    email:string,
    address: {
        street:string,
        suite:string,
        city:string,
        zipcode:String,
        geo:{
            lat:number,
            lng:number
        }
    },
    phone:string,
    website:string,
    company:{
        name:string,
        catchPhrase:string,
        bs:string
    }
}