"use client";

import ConnectLiveSession from "@/api/websocket";
import { Message } from "@/types/message";
import { Session } from "@/types/session";
import { useRef, useState } from "react";
import styles from "./liveSession.module.css";
import { MessageType } from "@/types/messageType";

export default function LiveSession() {
    const [status, setStatus] = useState<'idle' | 'connecting' | 'live' | 'closed' | 'error'>('idle');
    const [sessions, setSessions] = useState<Session[]>([]);
    const socket = useRef<WebSocket>(undefined);

    function startConnection() {
        setStatus('connecting');

        socket.current = ConnectLiveSession({
            onOpen: () => setStatus("live"),
            onClose: () => setStatus("closed"),
            onError: () => setStatus("error"),
            onMessage: updateSesstion,
        })
    }

    function updateSesstion(message: Message) {
        if (message.type === MessageType.Snapshot) {
            setSessions(message.data);
        }
    }

    function disconnect() {
        socket.current?.close();
        socket.current = undefined;
        setSessions([]);
        setStatus('closed');
    }

    return (
        <div className={styles.container}>
            <h1>Sessions <small>({status})</small></h1>
            <div className={styles.buttonContainer}>
                <button onClick={startConnection} disabled={status === 'connecting' || status === 'live'}>
                    Start WebSocket
                </button>
                <button onClick={disconnect} disabled={!socket.current || status === 'closed'}>
                    Disconnect
                </button>
            </div>

            <div className={styles.sessionContainer}>
                {sessions.length > 0 ?
                    sessions.map((session) => (
                        <div key={session.Id}>
                            <div>Series: {session.Series}</div>
                            <div>Name: {session.Name}</div>
                            <div>Track: {session.Track}</div>
                            <div>State: {session.State}</div>
                            <div>Duration: {session.Duration}</div>
                        </div>
                    ))
                    : <p>...No Results</p>}
            </div>
        </div>
    )
}