import { Message } from "./message";

export type SocketEventHandlers = {
    onOpen?: () => void;
    onClose?: () => void;
    onError?: (err: Event) => void;
    onMessage?: (msg: Message) => void;
};