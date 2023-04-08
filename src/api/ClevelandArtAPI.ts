import type {
  ArtDataInfoResponse,
  ArtDataResponse,
  ArtErrorResponse,
  ArtItem,
  Artist,
  ArtworksParams,
} from "@interfaces/IClevelandArt";
import api from "src/utils/api";

export async function getArtist({
  id,
  ...props
}: {
  id: string;
} & ArtworksParams) {
  return await api.get<ArtDataInfoResponse<Artist>, ArtErrorResponse>({
    url: `${import.meta.env.PUBLIC_API}/creators/${id}`,
    params: {
      limit: 10,
      has_image: 1,
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
  ...props
}: { artists?: string | null } & ArtworksParams) {
  return await api.get<ArtDataInfoResponse<ArtItem[]>, ArtErrorResponse>({
    url: `${import.meta.env.PUBLIC_API}/artworks`,
    params: {
      has_image: 1,
      ...props,
    },
  });
}
