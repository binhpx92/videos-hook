import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { useState } from "react";
import useVideos from "../hooks/useVideos";
import { useEffect } from "react";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // setSelectedVideo(response.data.items[0]);

  const [videos, search] = useVideos("madfit stretch");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="six wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(x) => {
                setSelectedVideo(x);
              }}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
