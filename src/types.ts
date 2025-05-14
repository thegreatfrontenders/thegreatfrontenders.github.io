export interface DevilFruit {
  id: number;
  name: string;
  description: string;
  roman_name: string;
  type: string; // make type later
  filename: string;
}

//interface for characters but leverage redux . also -- put them 

export interface MultipleChoiceOption {
  status: boolean;
  fruit: DevilFruit;
}