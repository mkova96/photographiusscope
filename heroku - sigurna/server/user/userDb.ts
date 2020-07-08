export interface UserDb {
    id:number;
    email:string;
    passwordDigest:string;
    role: string;
    money: number;

    firstName:string;
    lastName:string;
    profileLink:string;
}