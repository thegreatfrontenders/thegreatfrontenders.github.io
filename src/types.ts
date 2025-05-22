export interface DevilFruitREST {
  id: number
  name: string
  description: string
  roman_name: string
  type: string // make type later
  filename: string
}

export interface DevilFruit {
  avatarSrc: string
  currentOwner: string
  description: string
  englishName: string
  id: number
  meaning: string
  type: string
}

export interface CharacterGQ {
      affiliations: string;
      avatarSrc: string;
      description: string;
      devilFruitName: string;
      englishName: string;
      id: string; 
      origin: string;
}

export interface Character {
  id: number
  name: string
  index: number
  fruit?: DevilFruit
  age: string
  bounty: string
  job?: string
}