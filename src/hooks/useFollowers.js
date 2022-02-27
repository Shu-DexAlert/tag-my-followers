import { useEffect, useState } from "react";

export default function useFollowers(userId) {
    const [followers, setFollowers] = useState();

    useEffect(() => {
        if (userId === '3247907959') {
            setFollowers({
                "data": [
                    {
                        "id": "1453968133308379144",
                        "name": "Mel◎nApple",
                        "username": "MelonAppless"
                    },
                    {
                        "id": "829495991455797248",
                        "name": "Monarch",
                        "username": "mahsann_"
                    },
                    {
                        "id": "995579454",
                        "name": "DMNDHANDSS",
                        "username": "DMNDHANDSS"
                    },
                    {
                        "id": "1478895287078834179",
                        "name": "Kasper",
                        "username": "EthKasper"
                    },
                    {
                        "id": "1483552361566154759",
                        "name": "LOADED MUSHROOM",
                        "username": "LoadedMushroom"
                    },
                    {
                        "id": "704790175474319361",
                        "name": "alexnomas.sol 𓀡",
                        "username": "alexnomas3101"
                    },
                    {
                        "id": "1490203229820440577",
                        "name": "Elontama Official",
                        "username": "elontama"
                    },
                    {
                        "id": "1496471266336727044",
                        "name": "Cool Doggys 🐶🐶",
                        "username": "CoolDoggy15"
                    },
                    {
                        "id": "1496446690060300292",
                        "name": "Ashva",
                        "username": "Ashvanft"
                    },
                    {
                        "id": "1476898129370763265",
                        "name": "FoxPunk🦊",
                        "username": "FOX_Metaverse"
                    }
                ],
                "meta": {
                    "result_count": 10,
                    "next_token": "AH7FJ7EP1NP1EZZZ"
                }
            });
        } else {
            setFollowers(null);
        }
    }, [userId]);

    return [followers];
}