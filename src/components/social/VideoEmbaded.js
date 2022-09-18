import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, height=300, width=350 }) => (
  <div className="video-responsive">
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;