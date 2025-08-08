"use client";

import { Session } from "@/types/session";
import { useState } from "react";

export default async function LiveSession() {
    const [status, setStatus] = useState<'idle' | 'connecting' | 'live' | 'closed' | 'error'>('idle');
    const [sessions, setSessions] = useState<Session[]>([]);

    function startConnection() {

    }

    function disconnect() {

    }

    return (
        <div>
            <h1>Sessions <small>({status})</small></h1>

            <button onClick={startConnection} disabled={status === 'connecting' || status === 'live'}>
                Start WebSocket
            </button>
            <button onClick={disconnect}>
                Disconnect
            </button>
        </div>
    )
}