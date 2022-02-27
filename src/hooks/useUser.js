import { useEffect, useState } from "react";

export default function useUser(handle) {
    const [user, setUser] = useState();

    useEffect(() => {
        if (handle === 'shudexalert') {
            setUser({
                "data": {
                    "id": "3247907959",
                    "name": "shu",
                    "username": "shudexalert"
                }
            });
        } else {
            setUser(null);
        }
    }, [handle]);

    return [user];
}