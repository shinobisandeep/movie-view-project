export interface MoviesListResponse {
  count: number
  next: string
  previous: any
  results: MovieDetails[]
}

export interface MovieDetails {
  title: string
  description: string
  genres: string
  uuid: string
}
