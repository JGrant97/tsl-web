import { Message } from "@/types/message";
import { SocketEventHandlers } from "@/types/SocketEventHandlers";

export default async function Connect(handlers: SocketEventHandlers) {
    const socket = new WebSocket(`${process.env.API_URL}/ws`);

    socket.onopen = () => handlers.onOpen?.();
    socket.onclose = () => handlers.onClose?.();
    socket.onerror = (err) => handlers.onError?.(err);
    socket.onmessage = (evt) => {
        try {
            const msg = JSON.parse(evt.data) as Message;
            handlers.onMessage?.(msg);
        } catch {
            // ignore bad payloads
        }
    };

    return socket;
}