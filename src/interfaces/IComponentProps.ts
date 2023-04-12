import type { ArtItem, Images } from "./IArt";

export type DetailRowTitleProps = {
  showTitle?: boolean;
  className?: string;
};

export type DetailRowValueProps = {
  showValue?: boolean;
  className?: string;
};

export type DetailRowArrayValue = {
  value: string;
  hrefClassName?: string;
  className?: string;
} & Omit<CustomLinkProps, "className">;

export type DetailRowArrayValuesProps = {
  showValues?: boolean;
  values: DetailRowArrayValue[];
  hrefClassName?: string;
} & Omit<CustomLinkProps, "className">;

export type DetailRowArrayProps = {
  containerClassName?: string;
  title: string;
  titleClassName?: string;
  valueClassName?: string;
  valuesContainerClassName?: string;
} & DetailRowTitleProps &
  DetailRowArrayValuesProps;

export type DetailRowBooleanProps = {
  showTitle?: boolean;
  showValue?: boolean;
};

export type GalleryProps = {
  data: ArtItem[];
  className?: string;
  showCreators?: boolean;
};

export type CustomLinkProps = {
  href?: string;
  className?: string;
  resetHrefStyle?: boolean;
};

export type PaintingWithDetailsProps = Omit<
  DetailRowArrayValuesProps,
  "values"
> &
  Pick<DetailRowBooleanProps, "showTitle"> & {
    item: ArtItem;
    itemClassName?: string;
  };

export type DetailRowProps = {
  value: string;
  title: string;
  containerClassName?: string;
  titleClassName?: string;
  valueClassName?: string;
} & Omit<DetailRowTitleProps, "className"> &
  Omit<DetailRowValueProps, "className">;

export type ArtistArtworksProps = Pick<
  DetailRowProps,
  "containerClassName" | "title" | "titleClassName"
> &
  Omit<GalleryProps, "className"> & { galleryClassName?: string };

export type PaintingProps =
  | {
      images: Images;
      assignSizes?: boolean;
      className?: string;
    }
  | {
      url: string;
      className?: string;
      alt: string;
    };
