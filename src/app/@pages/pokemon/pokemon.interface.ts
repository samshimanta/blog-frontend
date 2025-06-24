export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_shiny: string
  };
  abilities:any[]
}

export interface DisplayPokemon {
  id: number;
  name: string;
  img: string;
  abilities?: any[] ;
}