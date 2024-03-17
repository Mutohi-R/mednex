import type { Timestamp } from "firebase/firestore";

export interface Comment {
    id: string,
    userId: string,
    userName: string,
    comment: string,
    timeStamp: Timestamp
}