import { render, screen } from '@testing-library/react';
import ImageCard from '../../src/components/ImageCard';
import React from 'react';

const renderElement = (newBrowserTab = false) => {
  return (
    <ImageCard
      alt="Alt Text"
      description="Description"
      title="Title"
      imgSrc="Image Src"
      linkUrl="https://www.react.dev"
      newBrowserTab={newBrowserTab}
    />
  );
};

describe('ImageCard Component', () => {
  test('Renders an ImageCard', () => {
    render(renderElement());

    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(2);

    const imageElement = screen.getByAltText('Alt Text');
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByText('Title');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText('Description');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('Renders an ImageCard with links that open in the same browser tab', () => {
    render(renderElement());

    const [imageLinkElement, titleLinkElement] = screen.getAllByRole('link');

    expect(imageLinkElement).toBeInTheDocument();
    expect(imageLinkElement).toHaveAttribute('href', 'https://www.react.dev');
    expect(imageLinkElement).not.toHaveAttribute('rel');

    expect(titleLinkElement).toBeInTheDocument();
    expect(titleLinkElement).toHaveAttribute('href', 'https://www.react.dev');
    expect(imageLinkElement).not.toHaveAttribute('rel');
  });

  test('Renders an ImageCard with links that open in a new browser tab', () => {
    render(renderElement(true));

    const [imageLinkElement, titleLinkElement] = screen.getAllByRole('link');

    expect(imageLinkElement).toBeInTheDocument();
    expect(imageLinkElement).toHaveAttribute('href', 'https://www.react.dev');
    expect(imageLinkElement).toHaveAttribute('rel', 'noopener noreferrer');

    expect(titleLinkElement).toBeInTheDocument();
    expect(titleLinkElement).toHaveAttribute('href', 'https://www.react.dev');
    expect(imageLinkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
