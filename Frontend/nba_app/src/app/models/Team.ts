export class Team {
    _id: string;
    teamName: string;
    players: [];

    constructor(_teamName: string, _id: string, players: []) {
        this._id = _id;
        this.teamName = _teamName;
        this.players = players;
    }
}

export interface ITeam {
    teamName: string;
    players: [];

}
