import { ReactNode, SyntheticEvent, useState } from 'react';
import { Movie } from '../../types/movie';
import {
  LabeledInputContainer,
  Label,
  LabeledInputFullSizeContainer,
  FormContainer,
  Input,
  DescriptionInput,
  Footer,
  MovieFormButton,
} from './MovieForm.styled';
import Select from 'react-select';
import { CustomStyles } from '../../config/react-select.config';
import { GENRE_LIST_OPTIONS } from '../../constants/genre-list-options';

export type DropdownOption = { value: string; label: string };
interface MovieFormProps {
  movie?: Movie;
  onSubmit: (movie: Movie) => void;
}

interface LabeledInputProps {
  label: string;
  children: ReactNode;
  fullRow?: boolean;
}

const LabeledInput = ({ label, children }: LabeledInputProps) => (
  <LabeledInputContainer>
    <Label>{label}</Label>
    {children}
  </LabeledInputContainer>
);

const LabeledInputDescription = ({ label, children }: LabeledInputProps) => (
  <LabeledInputFullSizeContainer>
    <Label>{label}</Label>
    {children}
  </LabeledInputFullSizeContainer>
);

export function MovieForm(props: MovieFormProps) {
  const { movie: initialMovie, onSubmit } = props;
  const [movie, setMovie] = useState(initialMovie || new Movie());
  const {
    name,
    description,
    imageUrl,
    rating,
    genreList,
    releaseDate,
    duration,
  } = movie;

  function handleReset() {
    setMovie(initialMovie || new Movie());
  }

  function handleSubmit(event: SyntheticEvent) {
    const fd = new FormData(event.target as HTMLFormElement);
    const obj = Object.fromEntries(
      Array.from(fd.keys(), (key) => {
        const val = fd.getAll(key);
        return [key, val.length > 1 ? val : val.pop()];
      })
    ) as unknown as Movie;
    event.preventDefault();
    onSubmit(obj);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabeledInput label={'TITLE'}>
        <Input name="name" defaultValue={name} placeholder={'Enter title'} />
      </LabeledInput>
      <LabeledInput label={'RELEASE DATE'}>
        <Input
          type="date"
          name="releaseDate"
          defaultValue={releaseDate.toISOString().slice(0, 10)}
          placeholder={'Select Date'}
        />
      </LabeledInput>
      <LabeledInput label={'MOVIE URL'}>
        <Input
          name="imageUrl"
          defaultValue={imageUrl}
          placeholder={'https://'}
        />
      </LabeledInput>
      <LabeledInput label={'RATING'}>
        <Input
          name="rating"
          type="number"
          defaultValue={rating || 0}
          placeholder={'7.8'}
        />
      </LabeledInput>
      <LabeledInput label={'GENRE'}>
        <Select
          name="genreList"
          isMulti={true}
          styles={CustomStyles}
          options={GENRE_LIST_OPTIONS}
          defaultValue={genreList.map((g) => ({ label: g, value: g }))}
        />
      </LabeledInput>
      <LabeledInput label={'RUNTIME'}>
        <Input
          name="duration"
          defaultValue={duration}
          placeholder={'minutes'}
        />
      </LabeledInput>
      <LabeledInputDescription fullRow={true} label={'OVERVIEW'}>
        <DescriptionInput
          name="description"
          defaultValue={description}
          placeholder={'Movie description'}
        ></DescriptionInput>
      </LabeledInputDescription>
      <Footer>
        <MovieFormButton type="button" onClick={handleReset}>
          RESET
        </MovieFormButton>
        <MovieFormButton type="submit">SUBMIT</MovieFormButton>
      </Footer>
    </FormContainer>
  );
}
