import React from "react";
import getYouTubeID from "get-youtube-id";

const YouTubePreview = ({ value }) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;

  if (!id) {
    return <div>Falta el ID/URL del Video.</div>;
  }

  return (
    <iframe
      width="560"
      height="315"
      title="YouTube Preview"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Video",
  fields: [
    {
      name: "url",
      type: "url",
      title: "URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: YouTubePreview,
  },
};
