import { User } from './user';

export interface Message {
    id:number;
    content:string;
    date:string;
    senderId:number;
    receiverId:number;

    sender:User;
    receiver:User;
}