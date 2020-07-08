import { User } from './user';


export interface Transaction {
    id:number;
    amount:number;
    senderId:number;
    receiverId:number;
    date:string;

    sender: User;
    receiver: User;
}