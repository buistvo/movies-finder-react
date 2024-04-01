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
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

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

  const { register, handleSubmit, reset, control } = useForm<Movie>();

  function handleReset() {
    reset(initialMovie);
  }
  const onSubmitHandler: SubmitHandler<Movie> = (data) => {
    onSubmit({
      ...data,
      duration: +data.duration,
      releaseDate: new Date(data.releaseDate),
      rating: data.rating ? +data.rating : 0,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
      <LabeledInput label={'TITLE'}>
        <Input
          defaultValue={name}
          placeholder={'Enter title'}
          {...register('name')}
          required={true}
        />
      </LabeledInput>
      <LabeledInput label={'RELEASE DATE'}>
        <Input
          type="date"
          defaultValue={releaseDate.toISOString().slice(0, 10)}
          placeholder={'Select Date'}
          {...register('releaseDate')}
          required={true}
        />
      </LabeledInput>
      <LabeledInput label={'MOVIE URL'}>
        <Input
          defaultValue={imageUrl}
          placeholder={'https://'}
          {...register('imageUrl')}
          required={true}
        />
      </LabeledInput>
      <LabeledInput label={'RATING'}>
        <Input
          type="number"
          defaultValue={rating || 0}
          placeholder={'7.8'}
          {...register('rating')}
          required={true}
        />
      </LabeledInput>
      <LabeledInput label={'GENRE'}>
        <Controller
          name="genreList"
          control={control}
          defaultValue={genreList}
          render={({ field }) => (
            <Select
              isMulti={true}
              styles={CustomStyles}
              options={GENRE_LIST_OPTIONS.filter((g) => g.value)}
              onChange={(val) => field.onChange(val.map((v) => v.value))}
              value={GENRE_LIST_OPTIONS.filter((g) =>
                field.value.some((f) => g.value === f)
              )}
            />
          )}
        ></Controller>
      </LabeledInput>
      <LabeledInput label={'RUNTIME'}>
        <Input
          defaultValue={duration}
          placeholder={'minutes'}
          {...register('duration')}
          type="number"
          min={1}
          required={true}
        />
      </LabeledInput>
      <LabeledInputDescription fullRow={true} label={'OVERVIEW'}>
        <DescriptionInput
          defaultValue={description}
          placeholder={'Movie description'}
          {...register('description')}
        />
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
