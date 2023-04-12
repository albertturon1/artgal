import type {
  ArtDataInfoResponse,
  ArtDataResponse,
  ArtErrorResponse,
  ArtItem,
  Artist,
  ArtworksParams,
} from "@interfaces/IArt";
import api from "src/utils/api";

export async function getCreators({
  id,
  has_image = "1",
  ...props
}: {
  id?: string;
  has_image?: "1" | "0";
} & ArtworksParams) {
  return await api.get<ArtDataInfoResponse<Artist>, ArtErrorResponse>({
    url: id
      ? `${import.meta.env.PUBLIC_API}/creators/${id}`
      : `${import.meta.env.PUBLIC_API}/creators`,
    params: {
      limit: 10,
      has_image,
      ...props,
    },
  });
}

export async function getArtwork({ id }: { id: string | undefined }) {
  return await api.get<ArtDataResponse<ArtItem>, ArtErrorResponse>({
    url: `${import.meta.env.PUBLIC_API}/artworks/${id}`,
  });
}

export async function getArtworks({
  has_image = "1",
  ...props
}: {
  artists?: string | null;
  culture?: string | null;
  has_image?: "1" | "0";
} & ArtworksParams) {
  return await api.get<ArtDataInfoResponse<ArtItem[]>, ArtErrorResponse>({
    url: `${import.meta.env.PUBLIC_API}/artworks`,
    params: {
      has_image,
      ...props,
    },
  });
}
