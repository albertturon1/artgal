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

export type WebImage = {
  url: string;
  width: string;
  height: string;
  filesize: string;
  filename: string;
};

export type AlternateImage = {
  date_created: string;
  annotation: string;
  web: {
    url: string;
    width: string;
    height: string;
    filesize: string;
  };
  print: {
    url: string;
    width: string;
    height: string;
    filesize: string;
  };
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
  weg: WebImage;
};

export type ClevelandArt = {
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
};
