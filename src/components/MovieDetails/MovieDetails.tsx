import { AppLogo } from '../../App';
import { Icon, MovieImage } from '../../App.styled';
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
    <MovieDetailsContainer>
      <MovieImage alt={name} src={imageUrl} />
      <InfoContainer>
        <InfoHeader>
          {name} <Rating>{rating}</Rating>
        </InfoHeader>
        <Genre>{genreList.join(', ')}</Genre>
        <AdditionalInfo>
          <span> {releaseDate?.getFullYear()}</span>
          <span>{convertDuration(duration)}</span>
        </AdditionalInfo>
        <Description>{description}</Description>
      </InfoContainer>
    </MovieDetailsContainer>
  );
}
