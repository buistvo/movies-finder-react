import { MovieDetailed } from '../../types/movie-detailed';
import {
  MovieDetailsContainer,
  ImageContainer,
  InfoContainer,
  InfoHeader,
  Rating,
  Genre,
  AdditionalInfo,
  Description,
} from './MovieDetails.styled';

interface MovieDetailsProps {
  movie: MovieDetailed;
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <MovieDetailsContainer>
      <ImageContainer>
        <img alt={movie.name} src={movie.imageUrl}></img>
      </ImageContainer>
      <InfoContainer>
        <InfoHeader>
          {movie.name} <Rating>{movie.rating}</Rating>
        </InfoHeader>
        <Genre>{movie.genreList.join(', ')}</Genre>
        <AdditionalInfo>
          <span> {movie.year}</span>
          <span>{movie.duration}</span>
        </AdditionalInfo>
        <Description>{movie.description}</Description>
      </InfoContainer>
    </MovieDetailsContainer>
  );
}
