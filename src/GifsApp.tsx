import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  }

  const handleSearch = (query: string) => {
    setPreviousTerms([...previousTerms, query]);
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de gifs" description="Descubre y comparte el Gif perfecto" />

      {/* SearchBar */}
      <SearchBar onQuery={handleSearch} />

      {/* Previous searches */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs container */}
      <GifList gifs={mockGifs} />
    </>
  )
}
