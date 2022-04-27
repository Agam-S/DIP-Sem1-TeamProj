export class Team {
    _id: number;
    teamName: string;
    players: [];

    constructor(_teamName: string, _id: number, players: []) {
        this._id = _id;
        this.teamName = _teamName;
        this.players = players;
    }
}

export interface ITeam {
    teamName: string;
    players: [];

}
