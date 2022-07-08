import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetail from './MovieDetail';

const imageUrl = `${process.env.PUBLIC_URL}/assets/movieHeroImages/testing.jpeg`;
const fallbackUrl = `${process.env.PUBLIC_URL}/assets/movieHeroImages/defaultImage.jpeg`;
const imageErrorUrl = '/assets/movieHeroImages/undefined.jpeg';

describe('Image', () => {
    it('should render the fallback image if the main one has an error', () => {
      render(
        <MovieDetail
          src={imageUrl}
          fallback={fallbackUrl}
        />
      );
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute('src', imageErrorUrl);
      fireEvent.error(image); // Here we trigger the error event
      expect(image).toHaveAttribute('src', fallbackUrl); // and check if the src changed
    });
});