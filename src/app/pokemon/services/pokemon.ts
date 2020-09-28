export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: Data[];
}

interface Data {
  name: string;
  url: string;
}
