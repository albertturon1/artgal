import type { AlternateImage, ArtAlternateImage, ArtImage, Images } from "@interfaces/IArt";
import queryString from "query-string";

export function genQueryString(params: object | undefined) {
  if (!params || !Object.keys(params).length) return "";
  return queryString.stringify(params);
}

function getDataFromArtImage(img: ArtImage | null) {
  if (!img) return null;
  return { width: img.width, height: img.height, src: img.url, filesize: img.filesize }
}

export function artImagesData(images: Images) {
  return getDataFromArtImage(images.web) ?? getDataFromArtImage(images.print) ?? getDataFromArtImage(images.full);
}

export function creatorFullname(fullname: string) {
  return fullname.split("(")[0];
}

export function capitalize(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}