
import { Message } from "@/types/message";
import { SocketEventHandlers } from "@/types/socketEventHandlers";

export default function ConnectLiveSession(handlers: SocketEventHandlers) {
    const socket = new WebSocket(`${process.env.NEXT_PUBLIC_API_URL}/session/ws`);

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