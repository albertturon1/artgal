import type { ArtItem } from "./IClevelandArt";

export interface PaintingWithDetailsProps {
  item: ArtItem;
  showArtist?: boolean;
  showTitle?: boolean;
  itemClassName?: string;
}
