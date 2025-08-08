import { Session } from "./session";

export type Message =
    | { type: 'snapshot'; data: Session[] };