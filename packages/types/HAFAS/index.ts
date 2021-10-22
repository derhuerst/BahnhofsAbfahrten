import type { HimSearchRequest } from 'types/HAFAS/HimSearch';
import type { JourneyCourseRequest } from 'types/HAFAS/JourneyCourse';
import type { JourneyDetailsRequest } from './JourneyDetails';
import type { JourneyGeoPosRequest } from 'types/HAFAS/JourneyGeoPos';
import type { JourneyGraphRequest } from 'types/HAFAS/JourneyGraph';
import type { JourneyMatchRequest } from 'types/HAFAS/JourneyMatch';
import type { JourneyTreeRequest } from 'types/HAFAS/JourneyTree';
import type { LocGeoPosRequest } from './LocGeoPos';
import type { LocMatchRequest } from './LocMatch';
import type { SearchOnTripRequest } from 'types/HAFAS/SearchOnTrip';
import type { StationBoardRequest } from 'types/HAFAS/StationBoard';
import type { SubscrCreateRequest } from 'types/HAFAS/Subscr/SubscrCreate';
import type { SubscrDeleteRequest } from 'types/HAFAS/Subscr/SubscrDelete';
import type { SubscrDetailsRequest } from 'types/HAFAS/Subscr/SubscrDetails';
import type { SubscrSearchRequest } from 'types/HAFAS/Subscr/SubscrSearch';
import type { SubscrUserCreateRequest } from 'types/HAFAS/Subscr/SubscrUserCreate';
import type { SubscrUserDeleteRequest } from 'types/HAFAS/Subscr/SubscrUserDelete';
import type { TripSearchRequest } from './TripSearch';

export type JourneyFilterMode = 'BIT' | 'EXC' | 'INC' | 'UNDEF';
export type JourneyFilterType =
  | 'ADM'
  // station accessibility attributes, e.g.
  // - `mode: 'EXC', value: 'w2'` for "disable stairs"
  // - `mode: 'EXC', value: 'w3'` for "disable escalators"
  // - `mode: 'EXC', value: 'w4'` for "disable elevators"
  | 'ATTRF'
  // vehicle accessibility attributes, e.g.
  // - `mode: 'INC', value: 'LF'` for "low-floor buses only"
  // - `mode: 'INC', value: 'HS'` for "wheelchair", as used by ÖBB
  // - `mode: 'INC', value: '__'` for "wheelchair", as used by ÖBB
  // - `mode: 'INC', value: '81'`, as used by ÖBB
  | 'ATTRJ'
  // - `mode: 'INC', value: 'Pc', as used by mobiliteit.lu for `locFltrL` entries
  // - `mode: 'INC', value: 'Pa', as used by mobiliteit.lu for `locFltrL` entries
  // - `mode: 'INC', value: 'Pe', as used by mobiliteit.lu for `locFltrL` entries
  | 'ATTRL'
  | 'BC' // bicycle carriage
  | 'CAT'
  | 'COUCH'
  | 'CTX_RECON'
  // types of routing modes? e.g.
  // - `mode: 'INC', value: 'BIKE'` for bicycle-only connections
  // - `mode: 'INC', value: 'KISS'` for car-only connections
  // - `mode: 'INC', value: 'OEV'` for public-transport-only connections
  // - `mode: 'INC', value: 'WALK'` for walking-only connections
  | 'GROUP'
  | 'INFOTEXTS'
  | 'JID'
  | 'LID'
  | 'LINE'
  // line (?) ID, e.g.
  // - `mode: 'INC', value: '311'` for trips with `prodCtx.lineId: '311'`, as used by CMTA
  | 'LINEID'
  // - `mode: 'INC', meta: 'notBarrierfree'`, as used by VBB
  // - `mode: 'INC', meta: 'limitedBarrierfree'`, as used by VBB
  // - `mode: 'INC', meta: 'completeBarrierfree'`, as used by VBB
  | 'META'
  | 'NAME'
  | 'NUM'
  | 'OP'
  | 'PID'
  // products bitmask, e.g.
  // - `mode: 'INC', value: '127'`
  // - `mode: 'BIT', value: '0000010001'`
  // - `mode: 'BIT', value: '0001110000000000'`
  | 'PROD'
  | 'ROUTE'
  | 'SLEEP'
  | 'STATIONS'
  // UIC country code
  // - `mode: 'INC', value: '81'` for "only Austrian", as used by ÖBB Scotty
  | 'UIC';

export type AllowedHafasMethods =
  | 'BookingAssortment'
  | 'BookingData'
  | 'BookingValidation'
  | 'FeederBoard'
  | 'FetcherBoard'
  | 'GisRoute'
  | 'HimMatch'
  | 'HimSearch'
  | 'JourneyCourse'
  | 'JourneyDetails'
  | 'JourneyGeoPos'
  | 'JourneyGraph'
  | 'JourneyMatch'
  | 'JourneyTree'
  | 'LocDetails'
  | 'LocGeoPos'
  | 'LocGeoReach'
  | 'LocGraph'
  | 'LocMatch'
  | 'MatchMe'
  | 'OneFieldSearch'
  | 'PartialSearch'
  | 'Reconstruction'
  | 'SearchOnTrip'
  | 'ServerInfo'
  | 'StationBoard'
  | 'StationDetails'
  | 'SubscriptionCreate'
  | 'SubscriptionDelete'
  | 'SubscriptionDetails'
  | 'SubscriptionNotification'
  | 'SubscriptionSearch'
  | 'SubscriptionStatus'
  | 'SubscriptionUpdate'
  | 'SubscriptionUserCreate'
  | 'SubscriptionUserDelete'
  | 'SubscriptionUserUpdate'
  | 'SubscriptionValidate'
  | 'TripSearch';

export type HafasDirection = 'B' | 'F' | 'FB';
export type HimFilterMode = 'BIT' | 'EXC' | 'INC' | 'UNDEF';
export type HimFilterType =
  | 'ADMIN'
  | 'CAT'
  | 'CH'
  | 'COMP'
  | 'DEPT'
  | 'EID'
  | 'HIMCAT'
  | 'HIMID'
  | 'LINE'
  | 'OPR'
  | 'PID'
  | 'PROD'
  | 'REG'
  | 'TRAIN';
export interface HimFilter {
  mode: HimFilterMode;
  type: HimFilterType;
  value: string;
}
export interface JourneyFilter {
  mode: JourneyFilterMode;
  type: JourneyFilterType;
  value: string;
}

export type LocationFilterMode = 'BIT' | 'EXC' | 'INC';
export type LocationFilterType =
  // - `mode: 'INC', value: 'Pc', as used by mobiliteit.lu
  // - `mode: 'INC', value: 'Pa', as used by mobiliteit.lu
  // - `mode: 'INC', value: 'Pe', as used by mobiliteit.lu
  | 'ATTRL'
  | 'ATTRP'
  | 'META'
  | 'NGR'
  | 'PLATF'
  | 'PROD'
  | 'ROUP_A'
  | 'ROUP_N'
  | 'ROUP_S'
  | 'ROUP_V'
  | 'ROUP_Z'
  | 'ROUS_A'
  | 'ROUS_N'
  | 'ROUS_S'
  | 'ROUS_V'
  | 'ROUS_Z'
  | 'ROU_A'
  | 'ROU_N'
  | 'ROU_S'
  | 'ROU_Z'
  | 'SLCTP_A'
  | 'SLCTP_N'
  | 'SLCTP_V'
  | 'SLCTP_Z'
  | 'SLCTS_A'
  | 'SLCTS_N'
  | 'SLCTS_S'
  | 'SLCTS_V'
  | 'SLCTS_Z'
  | 'SLCT_A'
  | 'SLCT_N'
  | 'SLCT_S'
  | 'SLCT_V'
  | 'SLCVT_Z';

export type LocationNGrammFilterMode =
  | 'DIST_ATTR'
  | 'DIST_INFO'
  | 'DIST_PERI'
  | 'DIST_RNG'
  | 'DIST_STNR'
  | 'EXCL_ATTR'
  | 'EXCL_INFO'
  | 'EXCL_META'
  | 'EXCL_PERI'
  | 'EXCL_RNG'
  | 'EXCL_STNR'
  | 'ONLY_META'
  | 'SLCT_ATTR'
  | 'SLCT_INFO'
  | 'SLCT_PERI'
  | 'SLCT_PROD'
  | 'SLCT_RNG'
  | 'SLCT_STNR';
export interface LocationNGrammFilter {
  attr?: string;
  crd?: Crd;
  endIds?: string;
  fTxt?: string;
  maxDist?: number;
  startIds?: string;
  type: LocationNGrammFilterMode;
}
export interface LocationFilter {
  mode: LocationFilterMode;
  ngramm: LocationNGrammFilter;
  type: LocationFilterType;
  value: string;
}

export interface CommonProductInfo {
  name: string;
  line?: string;
  number?: string;
  type?: string;
  operator?: OpL;
  admin?: string;
}
export interface CommonStopInfo {
  scheduledPlatform?: string;
  platform?: string;
  scheduledTime: Date;
  time: Date;
  /**
   * @isInt
   */
  delay?: number;
  reihung?: boolean;
  messages?: RemL[];
  cancelled?: boolean;
}

export interface RemL {
  type: string;
  code: string;
  icoX: number;
  txtN: string;
  txtS?: string;
  prio?: number;
  sIdx?: number;
}

export interface SDaysL {
  sDaysR: string;
  sDaysI: string;
  sDaysB: string;
  fLocX: number;
  tLocX: number;
}

export interface HafasCoordinates {
  lat: number;
  lng: number;
}

export interface HafasStation {
  products?: ParsedProduct[];
  coordinates: HafasCoordinates;
  title: string;
  id: string;
}

export enum AllowedHafasProfile {
  DB = 'db',
  OEBB = 'oebb',
  BVG = 'bvg',
  HVV = 'hvv',
  RMV = 'rmv',
  SNCB = 'sncb',
  AVV = 'avv',
  'NAH.SH' = 'nahsh',
  INSA = 'insa',
  aNachB = 'anachb',
  VAO = 'vao',
  SBB = 'sbb',
  DBNetz = 'dbnetz',
  PKP = 'pkp',
  DBRegio = 'dbregio',
  DBSmartRBL = 'smartrbl',
  VBN = 'vbn',
  // all = 'all',
}

export type HafasRequest = SingleHafasRequest[];
export type SingleHafasRequest =
  | JourneyCourseRequest
  | JourneyGraphRequest
  | JourneyTreeRequest
  | StationBoardRequest
  | HimSearchRequest
  | JourneyMatchRequest
  | LocGeoPosRequest
  | LocMatchRequest
  | JourneyDetailsRequest
  | SearchOnTripRequest
  | TripSearchRequest
  | JourneyGeoPosRequest;

export type UncommonHafasRequest =
  | SubscrCreateRequest
  | SubscrDeleteRequest
  | SubscrUserDeleteRequest
  | SubscrUserCreateRequest
  | SubscrSearchRequest
  | SubscrDetailsRequest;

interface CInfo {
  code: string;
  url: string;
  msg: string;
}

interface SvcResL<Res> {
  meth: string;
  err: string;
  res: Res;
}

export interface GenericRes {
  common: Common;
}

export interface HafasResponse<Res> {
  ver: string;
  lang: string;
  id: string;
  err: string;
  cInfo: CInfo;
  svcResL: SvcResL<Res>[];
}

export interface ProdCtx {
  name: string;
  num?: string;
  matchId?: string;
  catOut?: string;
  catOutS?: string;
  catOutL?: string;
  catIn?: string;
  catCode?: string;
  admin?: string;
  lineId?: string;
  line?: string;
  cls: number;
  icoX: number;
}

export interface ProdL {
  name: string;
  number?: string;
  icoX: number;
  cls: number;
  oprX?: number;
  prodCtx?: ProdCtx;
  addName?: string;
  nameS?: string;
  matchId?: string;
}

export interface LayerL {
  id: string;
  name: string;
  index: number;
  annoCnt: number;
}

export interface CrdSysL {
  id: string;
  index: number;
  type: string;
}

export interface IcoL {
  res: string;
  txt?: string;
}

export interface Crd {
  x: number;
  y: number;
  z?: number;
  layerX?: number;
  crdSysX?: number;
}

export interface PolyG {
  polyXL: number[];
  layerX: number;
  crdSysX: number;
}

export interface Journey {
  jid: string;
  date: string;
  prodX: number;
  status?: string;
  isRchbl?: boolean;
  stopL: CommonStop[];
  sDaysL: SDaysL[];
  polyG?: PolyG;
  msgL?: MsgL[];
  subscr?: string;
  prodL?: ProdL[];
  dTrnCmpSX?: TrnCmpSX;
}
export interface OptionalLocL {
  lid?: string;
  type?: string;
  name?: string;
  icoX?: number;
  extId?: string;
  state?: string;
  crd?: Crd;
  pCls?: number;
  /**
   * Reference to prodL
   */
  pRefL?: number[];
}

export type LocL = Required<OptionalLocL>;

export interface PpLocRefL {
  ppIdx: number;
  locX: number;
}

export interface PolyL {
  delta: boolean;
  dim: number;
  crdEncYX: string;
  crdEncS: string;
  crdEncF: string;
  ppLocRefL: PpLocRefL[];
}

export interface OpL {
  name: string;
  icoX: number;
}

export interface TcocL {
  c: string;
  r?: number;
}

export interface HimMsgEdgeL {
  icoCrd: {
    x: string;
    y: string;
  };
}

export interface Common {
  locL: LocL[];
  prodL: ProdL[];
  polyL: PolyL[];
  layerL: LayerL[];
  crdSysL: CrdSysL[];
  opL: OpL[];
  remL: RemL[];
  icoL: IcoL[];
  tcocL?: TcocL[];
  himMsgEdgeL?: HimMsgEdgeL[];
}

export interface CommonJny {
  jid: string;
  prodX: number;
  dirTxt: string;
  status: string;
  isRchbl: boolean;
  isCncl?: boolean;
  isPartCncl?: boolean;
  subscr: string;
  stopL?: CommonStop[];
  msgL?: MsgL[];
}

export interface CommonArrival {
  locX: number;
  idx?: number;
  aCncl?: boolean;
  aProdX?: number;
  aOutR: boolean;
  aTimeS: string;
  aTimeR?: string;
  aPlatfS?: string;
  aPlatfR?: string;
  aProgType?: string;
  type?: string;
  aTZOffset?: number;
  aTrnCmpSX?: TrnCmpSX;
  msgL?: MsgL[];
}

export interface CommonDeparture {
  locX: number;
  idx?: number;
  dCncl?: boolean;
  dProdX?: number;
  dInS: boolean;
  dInR: boolean;
  dTimeS: string;
  dTimeR?: string;
  dPlatfS?: string;
  dPlatfR?: string;
  dProgType?: string;
  type?: string;
  dTZOffset?: number;
  dTrnCmpSX?: TrnCmpSX;
  msgL?: MsgL[];
}

export interface CommonStop extends CommonArrival, CommonDeparture {
  isAdd?: boolean;
}

export interface TxtC {
  r: number;
  g: number;
  b: number;
}

export interface MsgL {
  type: string;
  remX: number;
  txtC: TxtC;
  prio: number;
  fIdx: number;
  tIdx: number;
  tagL: string[];
}

export interface TrnCmpSX {
  tcocX?: number[];
  tcM?: number;
}

// ParsedStuff
interface _ParsedCommon {
  locL: HafasStation[];
  prodL: ParsedProduct[];
  polyL?: ParsedPolyline[];
}
export type ParsedCommon = _ParsedCommon &
  Omit<Common, 'locL' | 'prodL' | 'polyL'>;

export type ParsedProduct = CommonProductInfo;

export interface ParsedPolyline {
  points: [number, number][];
  delta: boolean;
  locations: HafasStation[];
}

export type InOutMode = 'B' | 'I' | 'N' | 'O';

export interface GeoRect {
  llCrd: Crd;
  urCrd: Crd;
}

export interface GeoRing {
  cCrd: Crd;
  maxDist: number;
  minDist?: number;
}
