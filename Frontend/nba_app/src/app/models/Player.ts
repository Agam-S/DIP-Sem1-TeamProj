export class Player {
    rank: string;
    name: string;
    PER: string;

    constructor(_rank: string, _name: string, _PER: string) {
        this.rank = _rank;
        this.name = _name;
        this.PER = _PER;
    }
}

export interface IPlayer {
    rank: string;
    name: string;
    PER: string;
}