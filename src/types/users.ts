export interface userState{
    users:User[],
    loading:boolean,
    error:null | string
}
export interface User{
    id:number,
    name:string,
    email:string
}
