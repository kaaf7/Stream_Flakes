export const  getRandomGenre=(genreList:string[]) =>{
  const randomIndex = Math.floor(Math.random() * genreList.length)
  return genreList[randomIndex]
}