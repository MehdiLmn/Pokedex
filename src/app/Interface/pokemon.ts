
export interface IPokemon {
  id: number,
  name: string,
  image: string,
  spirit: string,
  slug: string,
  stats: {
    HP: number,
    attack: number,
    defense: number,
    special_attack: number,
    special_defense: number,
    speed: number
  },
  apiTypes:[{
    name: string,
    image: string
  }],
  apiEvolutions:[{
    name: string,
    pokedexId: number
      }]
}
