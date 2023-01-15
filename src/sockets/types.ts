export type Room = {
    id: string;
    admin: Player;
    joinedPlayers: Player[];
    readyPlayers: Player[];
    kickedPlayers: Player[];
}

export type Game = {
    id: string;
    players: Player[];
    levelCount: number;
    currentLevel: number;
    lives: number;
    throwingStarCount: number;
    throwingStarVote: number;
    smallestCard: number;
}

export type Player = {
    socketId: string;
    username: string;
    image: string;
    roomId: string;
    currentCards: number[];
    done: boolean;
    points: number;
    isReady: boolean;
    isAdmin: boolean;
}