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
  const { name, imageUrl, rating, genreList, year, description, duration } =
    movie;
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
          <span> {year}</span>
          <span>{duration}</span>
        </AdditionalInfo>
        <Description>{description}</Description>
      </InfoContainer>
    </MovieDetailsContainer>
  );
}
