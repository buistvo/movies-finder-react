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

export type DropdownOption = { value: string; label: string };
interface MovieFormProps {
  movie?: Movie;
  onSubmit: (movie: Movie) => void;
  genreOptions: DropdownOption[];
}

interface LabeledInputProps {
  label: string;
  children: ReactNode;
  fullRow?: boolean;
}

type MoviePropsNames = Extract<keyof Movie, string>;

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
  const { movie: initialMovie, onSubmit, genreOptions } = props;
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

  function handleValueChanges(value: unknown, prop: MoviePropsNames) {
    setMovie({
      ...movie,
      [prop]: value,
    });
  }

  function handleSubmit(event: SyntheticEvent) {
    //const result = Object.fromEntries(new FormData(event.target));
    //console.log(result);
    event.preventDefault();
    onSubmit(movie);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabeledInput label={'TITLE'}>
        <Input
          onChange={(event) => handleValueChanges(event.target.value, 'name')}
          value={name}
          placeholder={'Enter title'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'RELEASE DATE'}>
        <Input
          type="date"
          onChange={(event) =>
            handleValueChanges(new Date(event.target.value), 'releaseDate')
          }
          value={releaseDate.toISOString().slice(0, 10)}
          placeholder={'Select Date'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'MOVIE URL'}>
        <Input
          onChange={(event) =>
            handleValueChanges(event.target.value, 'imageUrl')
          }
          value={imageUrl}
          placeholder={'https://'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'RATING'}>
        <Input
          type="number"
          onChange={(event) => handleValueChanges(event.target.value, 'rating')}
          value={rating || 0}
          placeholder={'7.8'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'GENRE'}>
        <Select
          isMulti={true}
          styles={CustomStyles}
          options={genreOptions}
          value={genreList.map((g) => ({ label: g, value: g }))}
          onChange={(newValue) =>
            handleValueChanges(
              newValue.map((v) => v.value),
              'genreList'
            )
          }
        />
      </LabeledInput>
      <LabeledInput label={'RUNTIME'}>
        <Input
          onChange={(event) =>
            handleValueChanges(event.target.value, 'duration')
          }
          value={duration}
          placeholder={'minutes'}
        ></Input>
      </LabeledInput>
      <LabeledInputDescription fullRow={true} label={'OVERVIEW'}>
        <DescriptionInput
          onChange={(event) =>
            handleValueChanges(event.target.value, 'description')
          }
          value={description}
          placeholder={'Movie description'}
        ></DescriptionInput>
      </LabeledInputDescription>
      <Footer>
        <MovieFormButton type={'button'} onClick={handleReset}>
          RESET
        </MovieFormButton>
        <MovieFormButton>SUBMIT</MovieFormButton>
      </Footer>
    </FormContainer>
  );
}
