import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAlbum = {
  __typename?: 'AggregateAlbum';
  _avg?: Maybe<AlbumAvgAggregate>;
  _count?: Maybe<AlbumCountAggregate>;
  _max?: Maybe<AlbumMaxAggregate>;
  _min?: Maybe<AlbumMinAggregate>;
  _sum?: Maybe<AlbumSumAggregate>;
};

export type AggregateArtist = {
  __typename?: 'AggregateArtist';
  _avg?: Maybe<ArtistAvgAggregate>;
  _count?: Maybe<ArtistCountAggregate>;
  _max?: Maybe<ArtistMaxAggregate>;
  _min?: Maybe<ArtistMinAggregate>;
  _sum?: Maybe<ArtistSumAggregate>;
};

export type AggregateTrack = {
  __typename?: 'AggregateTrack';
  _avg?: Maybe<TrackAvgAggregate>;
  _count?: Maybe<TrackCountAggregate>;
  _max?: Maybe<TrackMaxAggregate>;
  _min?: Maybe<TrackMinAggregate>;
  _sum?: Maybe<TrackSumAggregate>;
};

export type Album = {
  __typename?: 'Album';
  _count?: Maybe<AlbumCount>;
  artist: Artist;
  artistId: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['String'];
  tracks: Array<Track>;
};


export type AlbumTracksArgs = {
  cursor?: Maybe<TrackWhereUniqueInput>;
  distinct?: Maybe<Array<TrackScalarFieldEnum>>;
  orderBy?: Maybe<Array<TrackOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TrackWhereInput>;
};

export type AlbumAvgAggregate = {
  __typename?: 'AlbumAvgAggregate';
  artistId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type AlbumAvgOrderByAggregateInput = {
  artistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type AlbumCount = {
  __typename?: 'AlbumCount';
  tracks: Scalars['Int'];
};

export type AlbumCountAggregate = {
  __typename?: 'AlbumCountAggregate';
  _all: Scalars['Int'];
  artistId: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type AlbumCountOrderByAggregateInput = {
  artistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type AlbumCreateInput = {
  artist: ArtistCreateNestedOneWithoutAlbumsInput;
  title: Scalars['String'];
  tracks?: Maybe<TrackCreateNestedManyWithoutAlbumInput>;
};

export type AlbumCreateNestedManyWithoutArtistInput = {
  connect?: Maybe<Array<AlbumWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AlbumCreateOrConnectWithoutArtistInput>>;
  create?: Maybe<Array<AlbumCreateWithoutArtistInput>>;
};

export type AlbumCreateNestedOneWithoutTracksInput = {
  connect?: Maybe<AlbumWhereUniqueInput>;
  connectOrCreate?: Maybe<AlbumCreateOrConnectWithoutTracksInput>;
  create?: Maybe<AlbumCreateWithoutTracksInput>;
};

export type AlbumCreateOrConnectWithoutArtistInput = {
  create: AlbumCreateWithoutArtistInput;
  where: AlbumWhereUniqueInput;
};

export type AlbumCreateOrConnectWithoutTracksInput = {
  create: AlbumCreateWithoutTracksInput;
  where: AlbumWhereUniqueInput;
};

export type AlbumCreateWithoutArtistInput = {
  title: Scalars['String'];
  tracks?: Maybe<TrackCreateNestedManyWithoutAlbumInput>;
};

export type AlbumCreateWithoutTracksInput = {
  artist: ArtistCreateNestedOneWithoutAlbumsInput;
  title: Scalars['String'];
};

export type AlbumGroupBy = {
  __typename?: 'AlbumGroupBy';
  _avg?: Maybe<AlbumAvgAggregate>;
  _count?: Maybe<AlbumCountAggregate>;
  _max?: Maybe<AlbumMaxAggregate>;
  _min?: Maybe<AlbumMinAggregate>;
  _sum?: Maybe<AlbumSumAggregate>;
  artistId: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type AlbumListRelationFilter = {
  every?: Maybe<AlbumWhereInput>;
  none?: Maybe<AlbumWhereInput>;
  some?: Maybe<AlbumWhereInput>;
};

export type AlbumMaxAggregate = {
  __typename?: 'AlbumMaxAggregate';
  artistId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type AlbumMaxOrderByAggregateInput = {
  artistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type AlbumMinAggregate = {
  __typename?: 'AlbumMinAggregate';
  artistId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type AlbumMinOrderByAggregateInput = {
  artistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type AlbumOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type AlbumOrderByWithAggregationInput = {
  _avg?: Maybe<AlbumAvgOrderByAggregateInput>;
  _count?: Maybe<AlbumCountOrderByAggregateInput>;
  _max?: Maybe<AlbumMaxOrderByAggregateInput>;
  _min?: Maybe<AlbumMinOrderByAggregateInput>;
  _sum?: Maybe<AlbumSumOrderByAggregateInput>;
  artistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type AlbumOrderByWithRelationInput = {
  artist?: Maybe<ArtistOrderByWithRelationInput>;
  artistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  tracks?: Maybe<TrackOrderByRelationAggregateInput>;
};

export type AlbumRelationFilter = {
  is?: Maybe<AlbumWhereInput>;
  isNot?: Maybe<AlbumWhereInput>;
};

export enum AlbumScalarFieldEnum {
  ArtistId = 'artistId',
  Id = 'id',
  Title = 'title'
}

export type AlbumScalarWhereInput = {
  AND?: Maybe<Array<AlbumScalarWhereInput>>;
  NOT?: Maybe<Array<AlbumScalarWhereInput>>;
  OR?: Maybe<Array<AlbumScalarWhereInput>>;
  artistId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
};

export type AlbumScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<AlbumScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<AlbumScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<AlbumScalarWhereWithAggregatesInput>>;
  artistId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
};

export type AlbumSumAggregate = {
  __typename?: 'AlbumSumAggregate';
  artistId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type AlbumSumOrderByAggregateInput = {
  artistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type AlbumUpdateInput = {
  artist?: Maybe<ArtistUpdateOneRequiredWithoutAlbumsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  tracks?: Maybe<TrackUpdateManyWithoutAlbumInput>;
};

export type AlbumUpdateManyMutationInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AlbumUpdateManyWithWhereWithoutArtistInput = {
  data: AlbumUpdateManyMutationInput;
  where: AlbumScalarWhereInput;
};

export type AlbumUpdateManyWithoutArtistInput = {
  connect?: Maybe<Array<AlbumWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AlbumCreateOrConnectWithoutArtistInput>>;
  create?: Maybe<Array<AlbumCreateWithoutArtistInput>>;
  delete?: Maybe<Array<AlbumWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AlbumScalarWhereInput>>;
  disconnect?: Maybe<Array<AlbumWhereUniqueInput>>;
  set?: Maybe<Array<AlbumWhereUniqueInput>>;
  update?: Maybe<Array<AlbumUpdateWithWhereUniqueWithoutArtistInput>>;
  updateMany?: Maybe<Array<AlbumUpdateManyWithWhereWithoutArtistInput>>;
  upsert?: Maybe<Array<AlbumUpsertWithWhereUniqueWithoutArtistInput>>;
};

export type AlbumUpdateOneRequiredWithoutTracksInput = {
  connect?: Maybe<AlbumWhereUniqueInput>;
  connectOrCreate?: Maybe<AlbumCreateOrConnectWithoutTracksInput>;
  create?: Maybe<AlbumCreateWithoutTracksInput>;
  update?: Maybe<AlbumUpdateWithoutTracksInput>;
  upsert?: Maybe<AlbumUpsertWithoutTracksInput>;
};

export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
  data: AlbumUpdateWithoutArtistInput;
  where: AlbumWhereUniqueInput;
};

export type AlbumUpdateWithoutArtistInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  tracks?: Maybe<TrackUpdateManyWithoutAlbumInput>;
};

export type AlbumUpdateWithoutTracksInput = {
  artist?: Maybe<ArtistUpdateOneRequiredWithoutAlbumsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
  create: AlbumCreateWithoutArtistInput;
  update: AlbumUpdateWithoutArtistInput;
  where: AlbumWhereUniqueInput;
};

export type AlbumUpsertWithoutTracksInput = {
  create: AlbumCreateWithoutTracksInput;
  update: AlbumUpdateWithoutTracksInput;
};

export type AlbumWhereInput = {
  AND?: Maybe<Array<AlbumWhereInput>>;
  NOT?: Maybe<Array<AlbumWhereInput>>;
  OR?: Maybe<Array<AlbumWhereInput>>;
  artist?: Maybe<ArtistRelationFilter>;
  artistId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  tracks?: Maybe<TrackListRelationFilter>;
};

export type AlbumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Artist = {
  __typename?: 'Artist';
  _count?: Maybe<ArtistCount>;
  albums: Array<Album>;
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type ArtistAlbumsArgs = {
  cursor?: Maybe<AlbumWhereUniqueInput>;
  distinct?: Maybe<Array<AlbumScalarFieldEnum>>;
  orderBy?: Maybe<Array<AlbumOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AlbumWhereInput>;
};

export type ArtistAvgAggregate = {
  __typename?: 'ArtistAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ArtistAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ArtistCount = {
  __typename?: 'ArtistCount';
  albums: Scalars['Int'];
};

export type ArtistCountAggregate = {
  __typename?: 'ArtistCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ArtistCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ArtistCreateInput = {
  albums?: Maybe<AlbumCreateNestedManyWithoutArtistInput>;
  name: Scalars['String'];
};

export type ArtistCreateNestedOneWithoutAlbumsInput = {
  connect?: Maybe<ArtistWhereUniqueInput>;
  connectOrCreate?: Maybe<ArtistCreateOrConnectWithoutAlbumsInput>;
  create?: Maybe<ArtistCreateWithoutAlbumsInput>;
};

export type ArtistCreateOrConnectWithoutAlbumsInput = {
  create: ArtistCreateWithoutAlbumsInput;
  where: ArtistWhereUniqueInput;
};

export type ArtistCreateWithoutAlbumsInput = {
  name: Scalars['String'];
};

export type ArtistGroupBy = {
  __typename?: 'ArtistGroupBy';
  _avg?: Maybe<ArtistAvgAggregate>;
  _count?: Maybe<ArtistCountAggregate>;
  _max?: Maybe<ArtistMaxAggregate>;
  _min?: Maybe<ArtistMinAggregate>;
  _sum?: Maybe<ArtistSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ArtistMaxAggregate = {
  __typename?: 'ArtistMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ArtistMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ArtistMinAggregate = {
  __typename?: 'ArtistMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ArtistMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ArtistOrderByWithAggregationInput = {
  _avg?: Maybe<ArtistAvgOrderByAggregateInput>;
  _count?: Maybe<ArtistCountOrderByAggregateInput>;
  _max?: Maybe<ArtistMaxOrderByAggregateInput>;
  _min?: Maybe<ArtistMinOrderByAggregateInput>;
  _sum?: Maybe<ArtistSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ArtistOrderByWithRelationInput = {
  albums?: Maybe<AlbumOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ArtistRelationFilter = {
  is?: Maybe<ArtistWhereInput>;
  isNot?: Maybe<ArtistWhereInput>;
};

export enum ArtistScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type ArtistScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ArtistScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ArtistScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ArtistScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type ArtistSumAggregate = {
  __typename?: 'ArtistSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ArtistSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ArtistUpdateInput = {
  albums?: Maybe<AlbumUpdateManyWithoutArtistInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtistUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtistUpdateOneRequiredWithoutAlbumsInput = {
  connect?: Maybe<ArtistWhereUniqueInput>;
  connectOrCreate?: Maybe<ArtistCreateOrConnectWithoutAlbumsInput>;
  create?: Maybe<ArtistCreateWithoutAlbumsInput>;
  update?: Maybe<ArtistUpdateWithoutAlbumsInput>;
  upsert?: Maybe<ArtistUpsertWithoutAlbumsInput>;
};

export type ArtistUpdateWithoutAlbumsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ArtistUpsertWithoutAlbumsInput = {
  create: ArtistCreateWithoutAlbumsInput;
  update: ArtistUpdateWithoutAlbumsInput;
};

export type ArtistWhereInput = {
  AND?: Maybe<Array<ArtistWhereInput>>;
  NOT?: Maybe<Array<ArtistWhereInput>>;
  OR?: Maybe<Array<ArtistWhereInput>>;
  albums?: Maybe<AlbumListRelationFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
};

export type ArtistWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: Album;
  createArtist: Artist;
  createTrack: Track;
  deleteAlbum?: Maybe<Album>;
  deleteArtist?: Maybe<Artist>;
  deleteManyAlbum: AffectedRowsOutput;
  deleteManyArtist: AffectedRowsOutput;
  deleteManyTrack: AffectedRowsOutput;
  deleteTrack?: Maybe<Track>;
  updateAlbum?: Maybe<Album>;
  updateArtist?: Maybe<Artist>;
  updateManyAlbum: AffectedRowsOutput;
  updateManyArtist: AffectedRowsOutput;
  updateManyTrack: AffectedRowsOutput;
  updateTrack?: Maybe<Track>;
  upsertAlbum: Album;
  upsertArtist: Artist;
  upsertTrack: Track;
};


export type MutationCreateAlbumArgs = {
  data: AlbumCreateInput;
};


export type MutationCreateArtistArgs = {
  data: ArtistCreateInput;
};


export type MutationCreateTrackArgs = {
  data: TrackCreateInput;
};


export type MutationDeleteAlbumArgs = {
  where: AlbumWhereUniqueInput;
};


export type MutationDeleteArtistArgs = {
  where: ArtistWhereUniqueInput;
};


export type MutationDeleteManyAlbumArgs = {
  where?: Maybe<AlbumWhereInput>;
};


export type MutationDeleteManyArtistArgs = {
  where?: Maybe<ArtistWhereInput>;
};


export type MutationDeleteManyTrackArgs = {
  where?: Maybe<TrackWhereInput>;
};


export type MutationDeleteTrackArgs = {
  where: TrackWhereUniqueInput;
};


export type MutationUpdateAlbumArgs = {
  data: AlbumUpdateInput;
  where: AlbumWhereUniqueInput;
};


export type MutationUpdateArtistArgs = {
  data: ArtistUpdateInput;
  where: ArtistWhereUniqueInput;
};


export type MutationUpdateManyAlbumArgs = {
  data: AlbumUpdateManyMutationInput;
  where?: Maybe<AlbumWhereInput>;
};


export type MutationUpdateManyArtistArgs = {
  data: ArtistUpdateManyMutationInput;
  where?: Maybe<ArtistWhereInput>;
};


export type MutationUpdateManyTrackArgs = {
  data: TrackUpdateManyMutationInput;
  where?: Maybe<TrackWhereInput>;
};


export type MutationUpdateTrackArgs = {
  data: TrackUpdateInput;
  where: TrackWhereUniqueInput;
};


export type MutationUpsertAlbumArgs = {
  create: AlbumCreateInput;
  update: AlbumUpdateInput;
  where: AlbumWhereUniqueInput;
};


export type MutationUpsertArtistArgs = {
  create: ArtistCreateInput;
  update: ArtistUpdateInput;
  where: ArtistWhereUniqueInput;
};


export type MutationUpsertTrackArgs = {
  create: TrackCreateInput;
  update: TrackUpdateInput;
  where: TrackWhereUniqueInput;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAlbum: AggregateAlbum;
  aggregateArtist: AggregateArtist;
  aggregateTrack: AggregateTrack;
  album?: Maybe<Album>;
  albums: Array<Album>;
  artist?: Maybe<Artist>;
  artists: Array<Artist>;
  findFirstAlbum?: Maybe<Album>;
  findFirstArtist?: Maybe<Artist>;
  findFirstTrack?: Maybe<Track>;
  groupByAlbum: Array<AlbumGroupBy>;
  groupByArtist: Array<ArtistGroupBy>;
  groupByTrack: Array<TrackGroupBy>;
  track?: Maybe<Track>;
  tracks: Array<Track>;
};


export type QueryAggregateAlbumArgs = {
  cursor?: Maybe<AlbumWhereUniqueInput>;
  orderBy?: Maybe<Array<AlbumOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AlbumWhereInput>;
};


export type QueryAggregateArtistArgs = {
  cursor?: Maybe<ArtistWhereUniqueInput>;
  orderBy?: Maybe<Array<ArtistOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ArtistWhereInput>;
};


export type QueryAggregateTrackArgs = {
  cursor?: Maybe<TrackWhereUniqueInput>;
  orderBy?: Maybe<Array<TrackOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TrackWhereInput>;
};


export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput;
};


export type QueryAlbumsArgs = {
  cursor?: Maybe<AlbumWhereUniqueInput>;
  distinct?: Maybe<Array<AlbumScalarFieldEnum>>;
  orderBy?: Maybe<Array<AlbumOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AlbumWhereInput>;
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput;
};


export type QueryArtistsArgs = {
  cursor?: Maybe<ArtistWhereUniqueInput>;
  distinct?: Maybe<Array<ArtistScalarFieldEnum>>;
  orderBy?: Maybe<Array<ArtistOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ArtistWhereInput>;
};


export type QueryFindFirstAlbumArgs = {
  cursor?: Maybe<AlbumWhereUniqueInput>;
  distinct?: Maybe<Array<AlbumScalarFieldEnum>>;
  orderBy?: Maybe<Array<AlbumOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AlbumWhereInput>;
};


export type QueryFindFirstArtistArgs = {
  cursor?: Maybe<ArtistWhereUniqueInput>;
  distinct?: Maybe<Array<ArtistScalarFieldEnum>>;
  orderBy?: Maybe<Array<ArtistOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ArtistWhereInput>;
};


export type QueryFindFirstTrackArgs = {
  cursor?: Maybe<TrackWhereUniqueInput>;
  distinct?: Maybe<Array<TrackScalarFieldEnum>>;
  orderBy?: Maybe<Array<TrackOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TrackWhereInput>;
};


export type QueryGroupByAlbumArgs = {
  by: Array<AlbumScalarFieldEnum>;
  having?: Maybe<AlbumScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<AlbumOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AlbumWhereInput>;
};


export type QueryGroupByArtistArgs = {
  by: Array<ArtistScalarFieldEnum>;
  having?: Maybe<ArtistScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ArtistOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ArtistWhereInput>;
};


export type QueryGroupByTrackArgs = {
  by: Array<TrackScalarFieldEnum>;
  having?: Maybe<TrackScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TrackOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TrackWhereInput>;
};


export type QueryTrackArgs = {
  where: TrackWhereUniqueInput;
};


export type QueryTracksArgs = {
  cursor?: Maybe<TrackWhereUniqueInput>;
  distinct?: Maybe<Array<TrackScalarFieldEnum>>;
  orderBy?: Maybe<Array<TrackOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TrackWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Track = {
  __typename?: 'Track';
  album: Album;
  albumId: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['String'];
  track_num: Scalars['Int'];
};

export type TrackAvgAggregate = {
  __typename?: 'TrackAvgAggregate';
  albumId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  track_num?: Maybe<Scalars['Float']>;
};

export type TrackAvgOrderByAggregateInput = {
  albumId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  track_num?: Maybe<SortOrder>;
};

export type TrackCountAggregate = {
  __typename?: 'TrackCountAggregate';
  _all: Scalars['Int'];
  albumId: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  track_num: Scalars['Int'];
};

export type TrackCountOrderByAggregateInput = {
  albumId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  track_num?: Maybe<SortOrder>;
};

export type TrackCreateInput = {
  album: AlbumCreateNestedOneWithoutTracksInput;
  title: Scalars['String'];
  track_num: Scalars['Int'];
};

export type TrackCreateNestedManyWithoutAlbumInput = {
  connect?: Maybe<Array<TrackWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TrackCreateOrConnectWithoutAlbumInput>>;
  create?: Maybe<Array<TrackCreateWithoutAlbumInput>>;
};

export type TrackCreateOrConnectWithoutAlbumInput = {
  create: TrackCreateWithoutAlbumInput;
  where: TrackWhereUniqueInput;
};

export type TrackCreateWithoutAlbumInput = {
  title: Scalars['String'];
  track_num: Scalars['Int'];
};

export type TrackGroupBy = {
  __typename?: 'TrackGroupBy';
  _avg?: Maybe<TrackAvgAggregate>;
  _count?: Maybe<TrackCountAggregate>;
  _max?: Maybe<TrackMaxAggregate>;
  _min?: Maybe<TrackMinAggregate>;
  _sum?: Maybe<TrackSumAggregate>;
  albumId: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['String'];
  track_num: Scalars['Int'];
};

export type TrackListRelationFilter = {
  every?: Maybe<TrackWhereInput>;
  none?: Maybe<TrackWhereInput>;
  some?: Maybe<TrackWhereInput>;
};

export type TrackMaxAggregate = {
  __typename?: 'TrackMaxAggregate';
  albumId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  track_num?: Maybe<Scalars['Int']>;
};

export type TrackMaxOrderByAggregateInput = {
  albumId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  track_num?: Maybe<SortOrder>;
};

export type TrackMinAggregate = {
  __typename?: 'TrackMinAggregate';
  albumId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  track_num?: Maybe<Scalars['Int']>;
};

export type TrackMinOrderByAggregateInput = {
  albumId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  track_num?: Maybe<SortOrder>;
};

export type TrackOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TrackOrderByWithAggregationInput = {
  _avg?: Maybe<TrackAvgOrderByAggregateInput>;
  _count?: Maybe<TrackCountOrderByAggregateInput>;
  _max?: Maybe<TrackMaxOrderByAggregateInput>;
  _min?: Maybe<TrackMinOrderByAggregateInput>;
  _sum?: Maybe<TrackSumOrderByAggregateInput>;
  albumId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  track_num?: Maybe<SortOrder>;
};

export type TrackOrderByWithRelationInput = {
  album?: Maybe<AlbumOrderByWithRelationInput>;
  albumId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  track_num?: Maybe<SortOrder>;
};

export enum TrackScalarFieldEnum {
  AlbumId = 'albumId',
  Id = 'id',
  Title = 'title',
  TrackNum = 'track_num'
}

export type TrackScalarWhereInput = {
  AND?: Maybe<Array<TrackScalarWhereInput>>;
  NOT?: Maybe<Array<TrackScalarWhereInput>>;
  OR?: Maybe<Array<TrackScalarWhereInput>>;
  albumId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  track_num?: Maybe<IntFilter>;
};

export type TrackScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TrackScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TrackScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TrackScalarWhereWithAggregatesInput>>;
  albumId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  track_num?: Maybe<IntWithAggregatesFilter>;
};

export type TrackSumAggregate = {
  __typename?: 'TrackSumAggregate';
  albumId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  track_num?: Maybe<Scalars['Int']>;
};

export type TrackSumOrderByAggregateInput = {
  albumId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  track_num?: Maybe<SortOrder>;
};

export type TrackUpdateInput = {
  album?: Maybe<AlbumUpdateOneRequiredWithoutTracksInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  track_num?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TrackUpdateManyMutationInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  track_num?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TrackUpdateManyWithWhereWithoutAlbumInput = {
  data: TrackUpdateManyMutationInput;
  where: TrackScalarWhereInput;
};

export type TrackUpdateManyWithoutAlbumInput = {
  connect?: Maybe<Array<TrackWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TrackCreateOrConnectWithoutAlbumInput>>;
  create?: Maybe<Array<TrackCreateWithoutAlbumInput>>;
  delete?: Maybe<Array<TrackWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TrackScalarWhereInput>>;
  disconnect?: Maybe<Array<TrackWhereUniqueInput>>;
  set?: Maybe<Array<TrackWhereUniqueInput>>;
  update?: Maybe<Array<TrackUpdateWithWhereUniqueWithoutAlbumInput>>;
  updateMany?: Maybe<Array<TrackUpdateManyWithWhereWithoutAlbumInput>>;
  upsert?: Maybe<Array<TrackUpsertWithWhereUniqueWithoutAlbumInput>>;
};

export type TrackUpdateWithWhereUniqueWithoutAlbumInput = {
  data: TrackUpdateWithoutAlbumInput;
  where: TrackWhereUniqueInput;
};

export type TrackUpdateWithoutAlbumInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  track_num?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TrackUpsertWithWhereUniqueWithoutAlbumInput = {
  create: TrackCreateWithoutAlbumInput;
  update: TrackUpdateWithoutAlbumInput;
  where: TrackWhereUniqueInput;
};

export type TrackWhereInput = {
  AND?: Maybe<Array<TrackWhereInput>>;
  NOT?: Maybe<Array<TrackWhereInput>>;
  OR?: Maybe<Array<TrackWhereInput>>;
  album?: Maybe<AlbumRelationFilter>;
  albumId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  track_num?: Maybe<IntFilter>;
};

export type TrackWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type AlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type AlbumsQuery = { __typename?: 'Query', albums: Array<{ __typename?: 'Album', id: number, title: string, artist: { __typename?: 'Artist', name: string } }> };

export type ArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type ArtistsQuery = { __typename?: 'Query', artists: Array<{ __typename?: 'Artist', id: number, name: string }> };

export type TracksQueryVariables = Exact<{ [key: string]: never; }>;


export type TracksQuery = { __typename?: 'Query', tracks: Array<{ __typename?: 'Track', id: number, track_num: number, title: string }> };


export const AlbumsDocument = gql`
    query albums {
  albums {
    id
    title
    artist {
      name
    }
  }
}
    `;

/**
 * __useAlbumsQuery__
 *
 * To run a query within a React component, call `useAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, options);
      }
export function useAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, options);
        }
export type AlbumsQueryHookResult = ReturnType<typeof useAlbumsQuery>;
export type AlbumsLazyQueryHookResult = ReturnType<typeof useAlbumsLazyQuery>;
export type AlbumsQueryResult = Apollo.QueryResult<AlbumsQuery, AlbumsQueryVariables>;
export const ArtistsDocument = gql`
    query artists {
  artists {
    id
    name
  }
}
    `;

/**
 * __useArtistsQuery__
 *
 * To run a query within a React component, call `useArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useArtistsQuery(baseOptions?: Apollo.QueryHookOptions<ArtistsQuery, ArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArtistsQuery, ArtistsQueryVariables>(ArtistsDocument, options);
      }
export function useArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArtistsQuery, ArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArtistsQuery, ArtistsQueryVariables>(ArtistsDocument, options);
        }
export type ArtistsQueryHookResult = ReturnType<typeof useArtistsQuery>;
export type ArtistsLazyQueryHookResult = ReturnType<typeof useArtistsLazyQuery>;
export type ArtistsQueryResult = Apollo.QueryResult<ArtistsQuery, ArtistsQueryVariables>;
export const TracksDocument = gql`
    query tracks {
  tracks {
    id
    track_num
    title
  }
}
    `;

/**
 * __useTracksQuery__
 *
 * To run a query within a React component, call `useTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTracksQuery(baseOptions?: Apollo.QueryHookOptions<TracksQuery, TracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TracksQuery, TracksQueryVariables>(TracksDocument, options);
      }
export function useTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TracksQuery, TracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TracksQuery, TracksQueryVariables>(TracksDocument, options);
        }
export type TracksQueryHookResult = ReturnType<typeof useTracksQuery>;
export type TracksLazyQueryHookResult = ReturnType<typeof useTracksLazyQuery>;
export type TracksQueryResult = Apollo.QueryResult<TracksQuery, TracksQueryVariables>;