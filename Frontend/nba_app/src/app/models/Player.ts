export class Player {
    RK: string;
    PLAYER_NAME: string;
    PER: string;
    CHECKED : boolean;

    constructor(_RK: string, _PLAYER_NAME: string, _PER: string) {
        this.RK = _RK;
        this.PLAYER_NAME = _PLAYER_NAME;
        this.PER = _PER;
    }
}

export interface IPlayer {
    RK: string;
    PLAYER_NAME: string;
    PER: string;
    CHECKED : boolean;
}