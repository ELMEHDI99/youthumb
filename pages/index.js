import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8" style={{ width: '42%' }}>
        <h1 className="text-3xl font-bold mb-2">
        &nbsp; Free YouTube Thumbnail Downloader <br></br> 
        </h1>
       <h2 className="text-3xl font-bold mb-2">
       Easily Save Thumbnails in PNG, JPG, 4K & 8K Formats</h2> 
        
        <p className="text-gray-600">
        Youtube Thumbnail Downloader is an easy tool that helps you download any YouTube thumbnail for free! Instantly grab high-quality thumbnails in various formats. No login required. Explore and download with ease.
        </p>
      </header>

      <br></br>

      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <p className="text-gray-600">
        Example: https://www.youtube.com/watch?v=NNS5Piu-EII
        </p>
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>

      
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}


<br></br>
<br></br>
<br></br>

<div className="mt-8 text-left" style={{ width: '42%' }}>
          <p>
            <strong>Get High-Quality YouTube Thumbnails with Our Free HD Thumbnail Downloader</strong>
          </p>
          <p>
            YouTube Thumbnail Download is your go-to online tool for downloading YouTube video thumbnails in five different qualities, including Full HD (1280x720), Standard (640×480), Medium (480×360), Normal (340×180), and Small (120×90).
          </p>
          
          <p>
            <strong>Why Thumbnails Matter</strong>
          </p>
          <p>
            A thumbnail is a scaled-down version of images or videos. It serves as a separate copy of the original image, generated on a web page through client-side scripting. This allows browsers to automatically adjust the image size, reducing bandwidth usage and webpage loading times.
          </p>
          <p>
            In today's visually-driven world, thumbnails are the first impression viewers have of your content. Viewers often judge the entire video based on the thumbnail. A captivating thumbnail can make the difference between a viewer clicking to explore further or moving on.
          </p>
          <p>
            Thumbnails enhance page visibility and give viewers control over what they want to see. A compelling thumbnail can make your content stand out and attract a larger audience.
          </p>

          <p>
            <strong>Available YouTube Thumbnail Sizes</strong>
          </p>
          <p>
            YouTube offers nine different thumbnail sizes. Our thumbnail downloader provides the five most commonly used sizes:
          </p>
          <ul>
            <li>Maximum Resolution: Full-HD 1280x720</li>
            <li>Standard Definition: SD 640x480</li>
            <li>High Quality: HQ 480x360</li>
            <li>Medium Quality: HQ 320x180</li>
            <li>Small: Default 120x90</li>
          </ul>
          <p>
            YouTube generates four additional thumbnail sizes from videos:
          </p>
          <ul>
            <li>Player Background: 480x360</li>
            <li>Start: 120x90</li>
            <li>Middle: 120x90</li>
            <li>End: 120x90</li>
          </ul>
          <p>
            While High Quality, Standard Definition, and Maximum Resolution are frequently used, our YouTube thumbnail downloader offers two extra sizes for added convenience.
          </p>

          <p>
            <strong>How to Obtain a YouTube Thumbnail URL</strong>
          </p>
          <p>
            Copying a YouTube video link is straightforward:
          </p>
          <p>
            <em>For PC:</em>
          </p>
          <ul>
            <li>Right-click on any video thumbnail or title to access the pop-up menu. Select "Copy link address" to copy the video link to your clipboard.</li>
            <li>Alternatively, copy the video URL directly from your browser's address bar while playing the video.</li>
            <li>You can also use the share option to copy the video link to your clipboard.</li>
          </ul>
          <p>
            <em>For Mobile App:</em>
          </p>
          <ul>
            <li>While using the mobile app, play the video and access the share option. Choose "Copy to Clipboard" to copy the video link. This unique video ID is essential for downloading YouTube thumbnails.</li>
          </ul>

          <p>
            <strong>How to Use YouTube Thumbnail Downloader</strong>
          </p>
          <p>
            Using our Thumbnail Downloader is effortless:
          </p>
          <ol>
            <li>Copy ✂️ and paste 📋 the YouTube video link into the search box above.</li>
            <li>Our Thumbnail Downloader will automatically fetch thumbnails in five different sizes.</li>
            <li>Select the desired size and click the "Download Thumbnail" button to save it to your device. We recommend downloading the HD thumbnail for the best quality.</li>
          </ol>

          <p>
            Enhance your content's visual appeal and engagement with high-quality YouTube thumbnails. Our tool is free, easy to use, and requires no app installation. Download thumbnails today and make your videos stand out!
          </p>
        </div>

        <div class="black-footer">
        &copy; 2023 Free YouTube Thumbnail Downloader. All Rights Reserved.
      </div>

    </div>

  );
};

export default Index;