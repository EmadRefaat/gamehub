import noimage from "../assets/no_image.jpg";

const getCropedImageUrl = (url: string) => {
  if (!url) return noimage;
  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCropedImageUrl;
