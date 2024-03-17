import { DropdownOption } from '../components/MovieForm/MovieForm';

export const GENRE_LIST_OPTIONS: DropdownOption[] = [
  { label: 'DOCUMENTARY', value: 'Documentary' },
  { label: 'COMEDY', value: 'Comedy' },
  { label: 'HORROR', value: 'Horror' },
  { label: 'CRIME', value: 'Crime' },
];

export const GENRE_LIST = [
  'All',
  ...GENRE_LIST_OPTIONS.map((genre) => genre.value),
];
