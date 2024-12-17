export default interface MentoringPost {
  id: number;
  title: string;
  mentoringTeamName: string;
  startDate: string;
  endDate: string;
  category: string[];
  contents: string;
}
