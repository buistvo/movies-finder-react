import { DropdownOption } from '../components/MovieForm/MovieForm';

export const GENRE_LIST_OPTIONS: DropdownOption[] = [
  { label: 'DOCUMENTARY', value: 'DOCUMENTARY' },
  { label: 'COMEDY', value: 'COMEDY' },
  { label: 'HORROR', value: 'HORROR' },
  { label: 'CRIME', value: 'CRIME' },
];

export const GENRE_LIST = GENRE_LIST_OPTIONS.map((genre) => genre.label);
