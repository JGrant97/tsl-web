import { MessageType } from "./messageType";
import { Session } from "./session";

export type Message =
    | { type: MessageType; data: Session[] };