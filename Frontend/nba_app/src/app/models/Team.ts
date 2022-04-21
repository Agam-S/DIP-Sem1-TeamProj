export class Team {
    _id: number;
    teamName: string;

    constructor(_teamName: string) {
        this.teamName = _teamName;
    }
}

export interface ITeam {
    teamName: string;
    players: [];

}
