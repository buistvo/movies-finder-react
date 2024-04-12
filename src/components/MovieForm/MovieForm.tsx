import { ReactNode } from 'react';
import { Movie, MovieFormFields } from '../../types/movie';
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
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldError,
} from 'react-hook-form';
import { INITIAL_MOVIE_FORM_VALUE } from '../../constants/initial-movie-form';

export type DropdownOption = { value: string; label: string };
interface MovieFormProps {
  movie?: MovieFormFields;
  onSubmit: (movie: Movie) => void;
}

interface LabeledInputProps {
  label: string;
  children: ReactNode;
  fullRow?: boolean;
  error?: FieldError;
}

const LabeledInput = ({ label, children, error }: LabeledInputProps) => (
  <LabeledInputContainer>
    <Label>{label}</Label>
    {children}
    {error && <span role="alert">{error.message}</span>}
  </LabeledInputContainer>
);

const LabeledInputDescription = ({
  label,
  children,
  error,
}: LabeledInputProps) => (
  <LabeledInputFullSizeContainer>
    <Label>{label}</Label>
    {children}
    {error && <span role="alert">{error.message}</span>}
  </LabeledInputFullSizeContainer>
);

export function MovieForm(props: MovieFormProps) {
  const { movie: initialMovie, onSubmit } = props;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Movie>({
    defaultValues: {
      ...INITIAL_MOVIE_FORM_VALUE,
      ...initialMovie,
    },
  });

  function handleReset() {
    reset(initialMovie);
  }
  const onSubmitHandler: SubmitHandler<Movie> = (data) => {
    onSubmit({
      ...data,
      duration: +data.duration!,
      releaseDate: data.releaseDate,
      rating: +data.rating!,
      id: initialMovie?.id,
    });
  };

  const urlRegex = /^https?:\/\/.+/;

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
      <LabeledInput label={'TITLE'} error={errors.name}>
        <Input
          placeholder={'Enter title'}
          {...register('name', { required: 'Name is required' })}
        />
      </LabeledInput>
      <LabeledInput label={'RELEASE DATE'} error={errors.releaseDate}>
        <Input
          type="date"
          placeholder={'Select Date'}
          {...register('releaseDate', { required: 'Release date is required' })}
        />
      </LabeledInput>
      <LabeledInput label={'MOVIE URL'} error={errors.imageUrl}>
        <Input
          placeholder={'https://'}
          {...register('imageUrl', {
            required: 'Movie URL is required',
            pattern: {
              value: urlRegex,
              message: 'Enter a valid URL',
            },
          })}
        />
      </LabeledInput>
      <LabeledInput label={'RATING'} error={errors.rating}>
        <Input
          defaultValue={initialMovie?.rating || 0}
          placeholder={'7.8'}
          {...register('rating', {
            min: { value: 0.01, message: 'Rating should be more than 0' },
            max: { value: 10, message: 'Rating should be less than 10' },
            required: true,
          })}
          type="number"
        />
      </LabeledInput>
      <LabeledInput label={'GENRE'} error={errors.genreList as FieldError}>
        <Controller
          name="genreList"
          control={control}
          rules={{ required: 'At least one genre should be selected' }}
          render={({ field }) => (
            <Select
              isMulti={true}
              styles={CustomStyles}
              options={GENRE_LIST_OPTIONS.filter((g) => g.value)}
              onChange={(val) => field.onChange(val.map((v) => v.value))}
              value={GENRE_LIST_OPTIONS.filter((g) =>
                field.value?.some((f) => g.value === f)
              )}
            />
          )}
        ></Controller>
      </LabeledInput>
      <LabeledInput label={'RUNTIME'} error={errors.duration}>
        <Input
          placeholder={'minutes'}
          {...register('duration', {
            min: { value: 1, message: 'Runtime should be more than 1 minute' },
            required: 'Runtime is required',
          })}
          type="number"
        />
      </LabeledInput>
      <LabeledInputDescription
        fullRow={true}
        label={'OVERVIEW'}
        error={errors.description}
      >
        <DescriptionInput
          placeholder={'Movie description'}
          {...register('description', { required: 'Description is required' })}
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
