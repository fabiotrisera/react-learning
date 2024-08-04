import { AspectRatio } from "@/components/ui/aspect-ratio"
import HoverCardProvider from "./HoverCardProvider"
import useFetch from "@/hooks/useFetch"

interface ICharacter {
  _id: number
  films: string[]
  tvShows: string[]
  videoGames: string[]
  sourceUrl: string
  name: string
  imageUrl: string
}

interface ICharacters {
  data: ICharacter[]
}

export default function DisneyList() {
  const { data, isLoading } = useFetch<ICharacters>("https://api.disneyapi.dev/character");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="flex flex-row flex-wrap">
          {data.data.map((character: ICharacter) => {
            return (
              <HoverCardProvider
                key={character._id}
                bodyChildren={
                  <div className="w-40">
                    <AspectRatio ratio={1 / 1} key={character._id}>
                      <img src={character.imageUrl} alt={character.name} />
                    </AspectRatio>
                  </div>
                }
                hoverCardContentChildren={
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{character.name}</h4>
                    {character.films.length > 0 && (
                      <p className="text-sm">
                        Films: {character.films.join(", ")}
                      </p>
                    )}
                    {character.tvShows.length > 0 && (
                      <p className="text-sm">
                        Tv Shows: {character.tvShows.join(", ")}
                      </p>
                    )}
                    {character.videoGames.length > 0 && (
                      <p className="text-sm">
                        Video Games: {character.videoGames.join(", ")}
                      </p>
                    )}
                  </div>
                }
              />
            )
          })}
        </div>
      )}
    </>
  )
}
