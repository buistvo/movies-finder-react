import { MovieImage } from '../../App.styled';
import { getFullYear } from '../../helpers/dates-helper';
import { convertDuration } from '../../helpers/duration-converter';
import { Movie } from '../../types/movie';
import {
  MovieDetailsContainer,
  InfoContainer,
  InfoHeader,
  Rating,
  Genre,
  AdditionalInfo,
  Description,
} from './MovieDetails.styled';

interface MovieDetailsProps {
  movie: Movie;
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const {
    name,
    imageUrl,
    rating,
    genreList,
    releaseDate,
    description,
    duration,
  } = movie;
  return (
    <MovieDetailsContainer data-testid="movie-details-container">
      <MovieImage alt={name} src={imageUrl} />
      <InfoContainer>
        <InfoHeader>
          {name} <Rating>{rating}</Rating>
        </InfoHeader>
        <Genre>{genreList.join(', ')}</Genre>
        <AdditionalInfo>
          <span> {getFullYear(releaseDate).toString()}</span>
          <span>{convertDuration(duration)}</span>
        </AdditionalInfo>
        <Description>{description}</Description>
      </InfoContainer>
    </MovieDetailsContainer>
  );
}
