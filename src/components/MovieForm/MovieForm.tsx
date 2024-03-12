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
} from './MovieForm.styled';
import { ButtonRed } from '../../App.styled';

interface MovieFormProps {
  movie?: Movie;
  onSubmit: (movie: Movie) => void;
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
  const { movie: initialMovie, onSubmit } = props;
  const [movie, setMovie] = useState(initialMovie || new Movie());

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
          value={movie?.name}
          placeholder={'Enter title'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'RELEASE DATE'}>
        <Input
          type="date"
          onChange={(event) =>
            handleValueChanges(new Date(event.target.value), 'releaseDate')
          }
          value={movie?.releaseDate.toISOString().slice(0, 10)}
          placeholder={'Select Date'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'MOVIE URL'}>
        <Input
          onChange={(event) =>
            handleValueChanges(event.target.value, 'imageUrl')
          }
          value={movie?.imageUrl}
          placeholder={'https://'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'RATING'}>
        <Input
          type="number"
          onChange={(event) => handleValueChanges(event.target.value, 'rating')}
          value={movie?.rating || 0}
          placeholder={'7.8'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'GENRE'}>
        <Input
          onChange={(event) =>
            handleValueChanges(event.target.value, 'genreList')
          }
          value={movie?.genreList}
          placeholder={'Select Genre'}
        ></Input>
      </LabeledInput>
      <LabeledInput label={'RUNTIME'}>
        <Input
          onChange={(event) =>
            handleValueChanges(event.target.value, 'duration')
          }
          value={movie?.duration}
          placeholder={'minutes'}
        ></Input>
      </LabeledInput>
      <LabeledInputDescription fullRow={true} label={'OVERVIEW'}>
        <DescriptionInput
          onChange={(event) =>
            handleValueChanges(event.target.value, 'description')
          }
          value={movie?.description}
          placeholder={'Movie description'}
        ></DescriptionInput>
      </LabeledInputDescription>
      <Footer>
        <ButtonRed type={'button'} onClick={handleReset}>
          RESET
        </ButtonRed>
        <ButtonRed>SUBMIT</ButtonRed>
      </Footer>
    </FormContainer>
  );
}
