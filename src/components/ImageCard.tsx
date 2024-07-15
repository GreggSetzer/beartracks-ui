import React from 'react';

interface ImageCardProps {
  /**
   * @name title
   * @description The title text to be displayed under the image.
   * @type string
   */
  title: string;

  /**
   * @name description
   * @description The copy text to display under the title.
   * @type string
   */
  description: string;

  /**
   * @name linkUrl
   * @description The URL for this card.
   * @type string
   */
  linkUrl: string;

  /**
   * @name imgSrc
   * @description The source of the image
   * @type string
   */
  imgSrc: string;

  /**
   * @name alt
   * @description The image alt text.
   * @type string
   */
  alt: string;

  /**
   * @name newBrowserTab
   * @description If true, a new browser tab will be opened. Otherwise, the same browser window is used during navigation. Optional.
   * @type boolean
   */
  newBrowserTab?: boolean;
}

const ImageCard = ({
  title,
  description,
  imgSrc,
  alt,
  linkUrl,
  newBrowserTab,
}: ImageCardProps) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-lg border border-gray-200">
      <a
        href={linkUrl}
        target={newBrowserTab ? '_blank' : '_self'}
        rel={newBrowserTab ? 'noopener noreferrer' : undefined}
        aria-label={`Link to ${title}`}
      >
        <img className="w-full max-h-48 object-cover" src={imgSrc} alt={alt} />
      </a>
      <div className="px-6 py-4">
        <p className="font-bold mb-2">
          <a href={linkUrl} className="hover:underline" aria-label={`Link to ${title}`}>
            {title}
          </a>
        </p>
        <p className="text-gray-700 text-base line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
