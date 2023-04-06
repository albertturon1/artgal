export type Unframed = {
  height: number;
  width: number;
};

export type Framed = Unframed & {
  depth: number;
};

export type Dimensions = {
  framed: Framed;
  unframed: Unframed;
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

export type Images = {
  web: ArtImage;
  print: ArtImage;
  full: ArtImage;
};

export type CreatorRole = "artist";

export type Creator = {
  id: 2659;
  description: string;
  extent: string | null;
  qualifier: string | null;
  role: CreatorRole;
  biography: string | null;
  name_in_original_language: string | null;
  birth_year: string;
  death_year: string;
};

export type ClevelandArtItem = {
  id: number;
  accession_number: string;
  share_license_status: string;
  tombstone: string;
  current_location: string;
  title: string;
  creation_date: string;
  creation_date_earliest: number;
  creation_date_latest: number;
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
  fun_fact: string;
  digital_description: null;
  wall_description: string;
  external_resources: ExternalResources;
  citations: Citation[];
  url: string;
  images: Images;
  alternate_images: AlternateImage[];
  creditline: string;
  sketchfab_id: string | null;
  sketchfab_url: string | null;
  athena_id: 93014;
  creators: Creator[];
  updated_at: string;
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
  data: ClevelandArtItem[];
};
