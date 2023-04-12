import type {
  AlternateImage,
  ArtAlternateImage,
  ArtImage,
  Images,
} from "@interfaces/IArt";
import type { DetailRowArrayValue } from "@interfaces/IComponentProps";
import queryString from "query-string";

export function genQueryString(params: object | undefined) {
  if (!params || !Object.keys(params).length) return "";
  return queryString.stringify(params);
}

export function artImagesData(images: Images) {
  return images.web ?? images.print ?? images.full;
}

export function creatorFullname(fullname: string) {
  return fullname.split("(")[0];
}

export function capitalize(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function detailRowArrayValueWithFallback<
  T extends DetailRowArrayValue[]
>({
  data,
  fallback = {
    value: "Unknown",
  },
}: {
  data: T | undefined;
  fallback?: DetailRowArrayValue;
}) {
  if (!data) return [fallback] satisfies DetailRowArrayValue[];
  return data satisfies DetailRowArrayValue[];
}
