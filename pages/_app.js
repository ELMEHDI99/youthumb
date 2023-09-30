import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
<Fragment>
  <DefaultSeo
    title="Free YouTube Thumbnail Downloader | Youtube Thumbnail Grabber"
    description="FreeYouTubeThumbnailDownloader.com is your free online tool for downloading YouTube video thumbnails in different sizes and qualities. Simply enter the video URL to save the thumbnail. Experience the best YouTube thumbnail download today!"
    canonical="https://www.freeyoutubethumbnaildownloader.com/"
    openGraph={{
      url: "https://www.freeyoutubethumbnaildownloader.com/",
      title: "Free YouTube Thumbnail Downloader | Youtube Thumbnail Grabber",
      description: "FreeYouTubeThumbnailDownloader.com is your free online tool for downloading YouTube video thumbnails in different sizes and qualities. Simply enter the video URL to save the thumbnail. Experience the best YouTube thumbnail download today!",
      site_name: "Free YouTube Thumbnail Downloader",
    }}
  />
  <Component {...pageProps} />
</Fragment>

  );
}

export default MyApp;
