
export interface CatalogStats {
  totalTitles: number;
  movieCount: number;
  tvShowCount: number;
  topRating: string;
}

export interface YearData {
  year: number;
  titlesAdded: number;
  releases?: number;
}

export interface CountryData {
  country: string;
  count: number;
}

export interface RatingData {
  rating: string;
  count: number;
}
