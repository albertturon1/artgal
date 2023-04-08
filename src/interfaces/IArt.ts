export type Unframed = {
  height: number;
  width: number;
};

export type Framed = Unframed & {
  depth: number;
};

export type Dimensions = {
  framed: Framed | undefined;
  unframed: Unframed | undefined;
};

export type Inscription = {
  inscription: string;
  inscription_translation: string | null;
  inscription_remark: string | null;
};

export type ExhibitionCurrent = {
  id: number;
  title: string;
  description: string;
  opening_date: string;
};

export type Provenance = {
  description: string;
  citations: string[];
  footnotes: string[];
  date: string;
};

export type ArtImage = {
  url: string;
  width: string;
  height: string;
  filesize: string;
  filename: string;
};

export type AlternateImage = {
  date_created: string;
  annotation: string;
  web: ArtImage;
  print: ArtImage;
  full: ArtImage;
};

export type ExternalResources = {
  wikidata: string[];
  internet_archive: string[];
};

export type Exhibitions = {
  current: ExhibitionCurrent[];
  legacy: string[];
};

export type Citation = {
  citation: string;
  page_number: null;
  url: null;
};

//images can be empty object
export type Images = {
  web: ArtImage | null;
  print: ArtImage | null;
  full: ArtImage | null;
};

export type CreatorRole = "artist";

export type Creator = {
  id: number;
  description: string;
  extent: string | null;
  qualifier: string | null;
  role: CreatorRole;
  biography: string | null;
  name_in_original_language: string | null;
  birth_year: string;
  death_year: string;
};

export type ArtItem = {
  id: number;
  accession_number: string;
  share_license_status: string;
  tombstone: string;
  current_location: string | null;
  title: string;
  creation_date: string | null;
  creation_date_earliest: number | null;
  creation_date_latest: number | null;
  artists_tags: string[];
  culture: string[];
  technique: string;
  support_materials: string[];
  department: string;
  collection: string;
  type: string;
  measurements: string;
  dimensions: Dimensions;
  state_of_the_work: null;
  edition_of_the_work: null;
  copyright: null;
  inscriptions: Inscription[];
  exhibitions: Exhibitions;
  provenance: Provenance[];
  find_spot: null;
  related_works: any[];
  former_accession_numbers: string[];
  fun_fact: string | null;
  digital_description: null | null;
  wall_description: string | null;
  external_resources: ExternalResources;
  citations: Citation[];
  url: string;
  images: Images;
  alternate_images: AlternateImage[];
  creditline: string;
  sketchfab_id: string | null;
  sketchfab_url: string | null;
  athena_id: number;
  creators: Creator[];
  updated_at: string | null;
};

export type Info = {
  total: number;
  parameters: {
    limit?: number;
    skip?: number;
    has_image?: "1" | "0";
  };
};

export type ClevelandArt = {
  info: Info;
  data: ArtItem[];
};

export type ArtistArtwork = {
  id: string;
  accession_number: string;
  title: string;
  tombstone: string;
  url: string;
};

export type Artist = {
  name: string;
  nationality: string;
  description: string;
  biography: string | null;
  birth_year: string;
  death_year: string;
  id: number;
  artworks: ArtItem[];
};

export type ArtworksParams = {
  indent?: number; //Number of spaces to indent JSON content if "pretty" formatting is desired.
  skip?: number;
  limit?: number;
};

export type ArtDataResponse<T> = {
  data: T;
};
export type ArtDataInfoResponse<T> = ArtDataResponse<T> & {
  info: Info;
};

export interface ArtErrorResponse {
  detail: string;
}
