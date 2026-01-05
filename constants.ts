
import { YearData, CountryData, RatingData } from './types';

export const GROWTH_DATA: YearData[] = [
  { year: 2008, titlesAdded: 2 },
  { year: 2010, titlesAdded: 5 },
  { year: 2012, titlesAdded: 15 },
  { year: 2014, titlesAdded: 40 },
  { year: 2015, titlesAdded: 100 },
  { year: 2016, titlesAdded: 450 },
  { year: 2017, titlesAdded: 1180 },
  { year: 2018, titlesAdded: 1650 },
  { year: 2019, titlesAdded: 2000 },
  { year: 2020, titlesAdded: 1850 },
  { year: 2021, titlesAdded: 1500 },
];

export const VINTAGE_DATA: YearData[] = [
  { year: 1940, releases: 10 },
  { year: 1960, releases: 25 },
  { year: 1980, releases: 80 },
  { year: 1990, releases: 120 },
  { year: 2000, releases: 350 },
  { year: 2010, releases: 800 },
  { year: 2015, releases: 1800 },
  { year: 2018, releases: 2200 },
  { year: 2020, releases: 2600 },
];

export const COUNTRY_DATA: CountryData[] = [
  { country: 'United States', count: 3600 },
  { country: 'India', count: 1000 },
  { country: 'United Kingdom', count: 800 },
  { country: 'Canada', count: 450 },
  { country: 'France', count: 380 },
  { country: 'Japan', count: 320 },
  { country: 'Spain', count: 250 },
  { country: 'South Korea', count: 230 },
  { country: 'Germany', count: 210 },
  { country: 'Mexico', count: 190 },
];

export const RATING_DATA: RatingData[] = [
  { rating: 'TV-MA', count: 3200 },
  { rating: 'TV-14', count: 2100 },
  { rating: 'TV-PG', count: 850 },
  { rating: 'R', count: 780 },
  { rating: 'PG-13', count: 500 },
  { rating: 'TV-Y7', count: 350 },
  { rating: 'TV-Y', count: 320 },
  { rating: 'PG', count: 300 },
  { rating: 'TV-G', count: 220 },
  { rating: 'NR', count: 100 },
];

export const STRATEGIC_COLORS = {
  primary: '#E50914', // Netflix Red
  secondary: '#221F1F', // Deep Charcoal
  accent: '#564d4d',
  chart: {
    movie: '#E50914',
    tv: '#B20710',
    grid: '#e2e8f0',
    text: '#64748b'
  }
};
