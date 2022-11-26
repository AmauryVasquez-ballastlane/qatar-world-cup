export interface MatchData {
  matchNumber: number;
  roundNumber: number;
  dateUtc: string;
  location: string;
  homeTeam: string;
  awayTeam: string;
  group: string | null;
  homeTeamScore: number | null;
  awayTeamScore: number | null;
}

export interface GroupData {
  groupName: string;
  teams: string[];
  matches: MatchData[];
}
