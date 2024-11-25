export interface PropsMentor {
  mentorImage: string;
  fullName: string;
  projectName: string;
  projectImage: string;
  reviewCount: number;
  sessionCount: number;
  language: string;
  countryFlagIcon: string;
  hourlyRate: number;
  detailsLink: string;
}

export interface inputdate {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

export interface IconPromps{
  width: number,
  height: number,
}
export interface AplicationCart {
  urlImg:string,
  nameProject:string,
  Top:number,
  Industry:string,
  Developer:boolean,
  numberOfScores:number,
  numberVotes:number,
  Category:string[],
  id:number
  fnDelete:(id:number) => undefined 
} 