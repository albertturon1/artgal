import type { ArtItem } from "./IClevelandArt";

export type DetailRowTitleProps = {
  showTitle?: true | undefined;
  title: string
  titleClassName?: string;
} | {
  showTitle: false | undefined;
}


export type DetailRowValueProps = {
  showValue?: true | undefined;
  value: string | string[]
  containerClassName?: string;
} | {
  showValue: false | undefined;
}

export type DetailRowProps = DetailRowTitleProps & DetailRowValueProps

export type DetailRowBooleanProps = {
  showTitle?: boolean;
  showValue?: boolean;
}

export type GalleryProps = Omit<DetailRowBooleanProps, "showValue"> & {
  data: ArtItem[];
  className?: string;
  showArtist?: boolean;
};