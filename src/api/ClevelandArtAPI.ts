import type {
  ArtDataInfoResponse,
  ArtDataResponse,
  ArtErrorResponse,
  ArtItem,
  Artist,
  ArtworksParams,
} from "@interfaces/IArt";
import api from "src/utils/api";
import { artImagesData } from "src/utils/misc";

export async function getArtist({
  id,
  ...props
}: {
  id: string;
} & ArtworksParams) {
  const res = await api.get<ArtDataInfoResponse<Artist>, ArtErrorResponse>({
    url: `${import.meta.env.PUBLIC_API}/creators/${id}`,
    params: {
      limit: 10,
      has_image: 1,
      ...props,
    },
  });

  return {
    ...res,
    data: {
      ...res.data,
      data: {
        ...res,
        data: res.data?.data.artworks.filter((img) => {
          const image = artImagesData(img.images);
          return (
            image &&
            Number(image.filesize) < import.meta.env.PUBLIC_MAX_IMAGE_SIZE
          );
        }),
      },
    },
  };
}

export async function getArtwork({ id }: { id: string | undefined }) {
  return await api.get<ArtDataResponse<ArtItem>, ArtErrorResponse>({
    url: `${import.meta.env.PUBLIC_API}/artworks/${id}`,
  });
}

export async function getArtworks({
  ...props
}: { artists?: string | null; culture?: string | null } & ArtworksParams) {
  const res = await api.get<ArtDataInfoResponse<ArtItem[]>, ArtErrorResponse>({
    url: `${import.meta.env.PUBLIC_API}/artworks`,
    params: {
      has_image: 1,
      ...props,
    },
  });
  return {
    ...res,
    data: {
      ...res,
      data: res.data?.data.filter((img) => {
        const image = artImagesData(img.images);
        return (
          image &&
          Number(image.filesize) < import.meta.env.PUBLIC_MAX_IMAGE_SIZE
        );
      }),
    },
  };
}
