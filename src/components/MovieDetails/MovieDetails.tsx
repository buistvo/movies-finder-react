import { Movie } from '../../types/movie';
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
      <ImageContainer>
        <img alt={name} src={imageUrl} />
      </ImageContainer>
      <InfoContainer>
        <InfoHeader>
          {name} <Rating>{rating}</Rating>
        </InfoHeader>
        <Genre>{genreList.join(', ')}</Genre>
        <AdditionalInfo>
          <span> {releaseDate?.getFullYear()}</span>
          <span>{duration}</span>
        </AdditionalInfo>
        <Description>{description}</Description>
      </InfoContainer>
    </MovieDetailsContainer>
  );
}
