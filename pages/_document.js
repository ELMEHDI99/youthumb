import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


import React from 'react';

const YourComponent = () => {
  return (
    <div className="container">
      <h1>WHAT IS A YOUTUBE THUMBNAIL DOWNLOADER?</h1>
      <p>
        A <strong>YouTube Thumbnail Downloader</strong> is a useful free tool for finding and downloading thumbnail images from YouTube videos. Each YouTube video can have up to five different sizes of thumbnails, which can be set up in your YouTube account within the video settings.
      </p>
      <p>
        To use a YouTube Thumbnail Downloader, you will need the YouTube video ID, which can be found in the URL of the video. Once you have the video ID, you can easily generate thumbnail URLs for the video by replacing "<code>yt-video-id</code>" in the URL with the actual ID.
      </p>
      <p>
        You can then go to one of these URLs to download the YouTube thumbnail image in different sizes and qualities. A good YouTube Thumbnail Downloader will allow you to choose the resolution of the thumbnail you want to download.
      </p>
      <p>
        It's important to note that while YouTube thumbnails are generally considered public domain images, it's still important to respect the copyright of the original creator. Make sure you have permission to use the thumbnail before you use it, and be mindful of YouTube's terms of service when using thumbnails in a way that implies endorsement by YouTube or the video's creator.
      </p>
      <h2>YOUTUBE VIDEO THUMBNAIL IMAGE URLS</h2>
      <p>You can use the following URLs to find the correct size and quality of your YouTube video thumbnail:</p>
      <ul>
        <li>Default: <code>https://img.youtube.com/vi/yt-video-id/default.jpg</code></li>
        <li>High Quality: <code>https://img.youtube.com/vi/yt-video-id/hqdefault.jpg</code></li>
        <li>Medium Quality: <code>https://img.youtube.com/vi/yt-video-id/mqdefault.jpg</code></li>
        <li>Standard Definition: <code>https://img.youtube.com/vi/yt-video-id/sddefault.jpg</code></li>
        <li>Maximum Resolution: <code>https://img.youtube.com/vi/yt-video-id/maxresdefault.jpg</code></li>
      </ul>
      <h2>HOW TO FIND A YOUTUBE VIDEO URL?</h2>
      <p>Follow the steps to get the YouTube video URL via the YouTube app or via any browser.</p>
      <h3>Find YouTube video URL via YouTube app</h3>
      <ol>
        <li>Open YouTube app.</li>
        <li>Search YouTube video.</li>
        <li>Tap on video.</li>
        <li>Tap on Share.</li>
        <li>Tap on Copy Link.</li>
      </ol>
      <h3>Find YouTube video URL via a browser</h3>
      <ol>
        <li>Open YouTube in a browser.</li>
        <li>Search YouTube video.</li>
        <li>Press on video.</li>
        <li>Press Share.</li>
        <li>Press on Copy.</li>
      </ol>
      <p>The YouTube video URL is now copied to your clipboard. You can paste the URL in our tool to download the YouTube thumbnails of this video.</p>
    </div>
  );
};

export default YourComponent;