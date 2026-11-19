import { catalogById, pathFor } from "@/lib/catalog";
import { guideIdFor } from "@/lib/paths";

export type CampusName =
  | "Kendall"
  | "Hialeah"
  | "Homestead"
  | "Medical"
  | "Meek"
  | "North"
  | "Padrón"
  | "West"
  | "Wolfson";

export type CampusFit = {
  campus: CampusName;
  where: string;
  why: string;
};

const MEDICAL =
  "The School of Health Sciences and the Benjamín León School of Nursing teach these courses at the Medical Campus. This is not a Kendall program.";
const NORTH_JUSTICE =
  "The School of Justice, the fire tower, and the funeral program are at North Campus. Kendall does not run these classes.";
const WOLFSON_ARTS =
  "This program’s labs are at Wolfson Campus downtown. Kendall does not run them.";
const KENDALL_TECH =
  "The labs for this major are in the School of Engineering and Technology at Kendall. Some introductory computer courses are taught elsewhere. The major courses are here.";
const AIRPORT =
  "Flight and maintenance classes meet at the Eig-Watson School of Aviation at Miami Executive Airport. Advisement is at the Homestead Campus. Kendall does not run this program.";
const EVERY =
  "The Associate in Arts is offered at every MDC campus. Take it at the campus closest to you. There is no Kendall-only version.";
const BUSINESS =
  "Business courses for this award are offered at Wolfson, Kendall, North, and Hialeah. It is not a Kendall-only program. Use the campus where the major courses are open this term.";

const MAP: Record<string, CampusFit> = {
  aa: { campus: "Wolfson", where: "every MDC campus", why: EVERY },
  rn: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  bsn: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  lpn: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  clinlab: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  dental: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  sono: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  healthsci: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  records: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  nuclear: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  optician: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  pta: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  radtx: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  rad: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  respiratory: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  surgical: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  vet: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  sterile: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  ct: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  mri: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  emt: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  paramedic: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  endo: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  massage: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  medassist: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  pharmacy: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  phlebotomy: { campus: "Medical", where: "the Medical Campus", why: MEDICAL },
  academy: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  corrections: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  crimescene: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  justice: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  fire: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  funeral: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  compcrime: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  guard: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  intel: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  publicsafety: { campus: "North", where: "North Campus", why: NORTH_JUSTICE },
  asl: {
    campus: "North",
    where: "North Campus",
    why: "Sign Language Interpretation is a North Campus department. Kendall does not run this degree.",
  },
  film: {
    campus: "North",
    where: "North Campus",
    why: "Film, television, and digital production courses are centered at the School of Entertainment and Design Technology on North Campus.",
  },
  broadcast: {
    campus: "North",
    where: "North Campus",
    why: "Radio and television courses are centered at the School of Entertainment and Design Technology on North Campus.",
  },
  photo: {
    campus: "North",
    where: "North Campus",
    why: "Photographic technology sits with the entertainment and design programs at North Campus.",
  },
  audio: {
    campus: "North",
    where: "North Campus",
    why: "Audio technology sits with the entertainment and design programs at North Campus.",
  },
  ece: {
    campus: "North",
    where: "North Campus",
    why: "The School of Education and the preschool lab are at North Campus. Hialeah also offers some early-childhood courses. The degree’s lab home is North.",
  },
  ese: {
    campus: "North",
    where: "North Campus",
    why: "The School of Education is based at North Campus.",
  },
  secmath: {
    campus: "North",
    where: "North Campus",
    why: "The School of Education is based at North Campus.",
  },
  secsci: {
    campus: "North",
    where: "North Campus",
    why: "The School of Education is based at North Campus.",
  },
  landscape: {
    campus: "North",
    where: "North Campus",
    why: "Landscape and environmental horticulture uses the North Campus environmental science program, not Kendall.",
  },
  cdl: {
    campus: "North",
    where: "North Campus",
    why: "Commercial driving uses the North Campus driving range.",
  },
  auto: {
    campus: "North",
    where: "North Campus",
    why: "The automotive and Tesla technician courses run at North Campus.",
  },
  cyber: {
    campus: "North",
    where: "North Campus",
    why: "You can start the associate degree at North Campus. Later bachelor’s courses were added at Kendall. For this associate, North is the home campus.",
  },
  chef: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "The culinary labs are at the Miami Culinary Institute on the Wolfson Campus, downtown. That is the campus that runs this degree.",
  },
  fab: { campus: "Wolfson", where: "Wolfson Campus", why: WOLFSON_ARTS },
  fashion: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Fashion design is taught at the Miami Fashion Institute on the Wolfson Campus.",
  },
  merch: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Fashion merchandising is taught at the Miami Fashion Institute on the Wolfson Campus.",
  },
  pattern: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Patternmaking is part of the Miami Fashion Institute on the Wolfson Campus.",
  },
  games: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Animation and game art are taught at MAGIC, the Miami Animation and Gaming International Complex, on the Wolfson Campus.",
  },
  vr: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Virtual and augmented reality is taught at MAGIC on the Wolfson Campus.",
  },
  hotel: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Hospitality and tourism management is a Wolfson Campus program.",
  },
  cruise: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Cruise line operations sits with hospitality at the Wolfson Campus.",
  },
  rooms: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Rooms division sits with hospitality at the Wolfson Campus.",
  },
  banking: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Banking and financial services are centered at the Wolfson Campus, downtown.",
  },
  paralegal: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "The ABA-approved paralegal program is at the Law Center on the Wolfson Campus.",
  },
  relegal: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Real estate legal courses sit with the Law Center on the Wolfson Campus.",
  },
  music: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Music business is taught with the arts programs at the Wolfson Campus.",
  },
  museum: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Museum studies sits with the cultural programs at the Wolfson Campus.",
  },
  translate: {
    campus: "Wolfson",
    where: "Wolfson Campus",
    why: "Translation and interpretation is based in World Languages at the Wolfson Campus.",
  },
  pilot: { campus: "Homestead", where: "Miami Executive Airport", why: AIRPORT },
  avmaint: { campus: "Homestead", where: "Miami Executive Airport", why: AIRPORT },
  avmanage: { campus: "Homestead", where: "Miami Executive Airport", why: AIRPORT },
  freight: { campus: "Homestead", where: "Miami Executive Airport", why: AIRPORT },
  architect: {
    campus: "Kendall",
    where: "Kendall Campus",
    why: "The School of Architecture and Interior Design, and the drawing labs, are at Kendall.",
  },
  interior: {
    campus: "Kendall",
    where: "Kendall Campus",
    why: "Interior design studios are in the School of Architecture and Interior Design at Kendall.",
  },
  civil: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  construction: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  electronics: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  compeng: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  biomed: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  mechanical: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  software: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  mobile: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  itsupport: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  networking: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  database: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  data: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  ai: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  gis: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  cad: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  solar: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  lowvolt: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  engsupport: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  mechatronics: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  lean: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  biotech: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  biosci: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  graphic: { campus: "Kendall", where: "Kendall Campus", why: KENDALL_TECH },
  business: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  accounting: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  marketing: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  hr: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  leadership: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  project: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  supply: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  procure: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  benefits: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  sales: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  sport: { campus: "Wolfson", where: "Wolfson, Kendall, North, and Hialeah", why: BUSINESS },
  addiction: {
    campus: "Hialeah",
    where: "the Hialeah Campus",
    why: "Hialeah publishes the addictions-studies certificate. Confirm the term’s section before you register. It is not a Kendall default.",
  },
  humansvc: {
    campus: "North",
    where: "North Campus",
    why: "Human-services courses are offered at North and Hialeah. They are not a Kendall lab program. Check which campus has your section this term.",
  },
  mental: { campus: "North", where: "North Campus", why: "Human-services courses are not housed in one Kendall lab. North and Hialeah both offer sections. Check the current schedule." },
};

const FALLBACK: CampusFit = {
  campus: "Wolfson",
  where: "more than one campus",
  why: "MDC does not tie this award to Kendall alone. Check the current schedule for the campus that is offering the major courses this term.",
};

export function campusFit(id: string): CampusFit {
  const guide = guideIdFor(id);
  if (guide && MAP[guide]) return MAP[guide];
  const program = catalogById(id);
  const key = program ? pathFor(program).id : id;
  return MAP[key] ?? FALLBACK;
}
