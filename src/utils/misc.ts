import type { Images } from "@interfaces/IClevelandArt";
import queryString from "query-string";

export function genQueryString(params: object | undefined) {
  if (!params || !Object.keys(params).length) return "";
  return queryString.stringify(params);
}

export function artImagesSource(images: Images) {
  return images.web?.url ?? images.print?.url ?? images.full?.url;
}

export function creatorFullname(fullname: string) {
  return fullname.split("/")[0];
}
