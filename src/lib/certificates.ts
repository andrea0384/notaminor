import { CATALOG, catalogById, pathFor, type CatalogProgram } from "@/lib/catalog";

export type PathNote = { name: string; when: string };

const GENERIC = new Set([
  "and",
  "the",
  "of",
  "for",
  "in",
  "with",
  "from",
  "technology",
  "studies",
  "management",
  "specialist",
  "professional",
  "operations",
  "support",
  "general",
  "program",
  "science",
  "services",
  "business",
  "computer",
  "information",
  "systems",
  "assistant",
  "technician",
  "applications",
  "application",
  "development",
  "analysis",
  "college",
  "credit",
  "certificate",
  "associate",
  "bachelor",
  "human",
  "social",
  "option",
  "concentration",
]);

const SHORT = new Set(["CCC", "CTC", "ATC", "APPR"]);

/** Licenses and exams the job can require. Not the same as a college certificate. */
const FIELD: Record<string, PathNote[]> = {
  rn: [
    {
      name: "NCLEX-RN",
      when: "The exam to become a registered nurse. Finishing the degree does not issue the license. Apply with the Florida Board of Nursing and schedule the exam before you leave the program.",
    },
  ],
  lpn: [
    {
      name: "NCLEX-PN",
      when: "The exam for a licensed practical nurse. The certificate does not issue the license. Apply with the Florida Board of Nursing and schedule it before you finish.",
    },
  ],
  rad: [
    {
      name: "ARRT radiography exam",
      when: "The credential employers ask for to take X-rays. The college does not issue it. Schedule it as you finish, then apply for the Florida license.",
    },
  ],
  sono: [
    {
      name: "ARDMS credential",
      when: "The sonography credential employers ask for. The college does not issue it. Schedule it as you finish the program.",
    },
  ],
  emt: [
    {
      name: "EMT certification",
      when: "National Registry and Florida certification. The college certificate is not the license to work on a truck. Schedule the exam before you finish.",
    },
  ],
  paramedic: [
    {
      name: "Paramedic certification",
      when: "National Registry paramedic exam and Florida certification. Schedule it before you finish. The degree does not replace it.",
    },
  ],
  pilot: [
    {
      name: "FAA pilot certificates",
      when: "The college posts the degree. The FAA certificates are separate checkrides. Schedule each one while that flight course is on your schedule.",
    },
  ],
  cdl: [
    {
      name: "Commercial driver license",
      when: "The state license. The college certificate does not put it in your wallet. Take the test before you finish the program.",
    },
  ],
  vet: [
    {
      name: "VTNE",
      when: "The veterinary technician national exam. The degree does not make you credentialed. Schedule it as you finish, then meet the Florida requirement.",
    },
  ],
  respiratory: [
    {
      name: "NBRC exams",
      when: "The credential to work in respiratory care. The college does not issue it. Schedule the exams before you leave the program.",
    },
  ],
};

/** Outside cards worth finishing before graduation. The class does not hand them to you. */
const OUTSIDE: Record<string, PathNote[]> = {
  ai: [
    {
      name: "AWS Certified Cloud Practitioner",
      when: "Cloud Essentials prepares you. Buy the exam from AWS and take it before you graduate. The class does not hand you the card.",
    },
  ],
  cyber: [
    {
      name: "CompTIA Security+",
      when: "The exam employers ask for first. Schedule it at Pearson VUE while you are still in the program. The class does not hand you the card.",
    },
    {
      name: "CompTIA Network+",
      when: "Take it in the same stretch as Security+, before you graduate. Buy it from CompTIA and schedule it at Pearson VUE.",
    },
  ],
  itsupport: [
    {
      name: "CompTIA A+",
      when: "The usual first help-desk exam. Schedule it at Pearson VUE before you graduate. The classes do not hand you the card.",
    },
    {
      name: "CompTIA Network+",
      when: "Add this before you graduate if the job touches networks. Buy it from CompTIA and schedule it at Pearson VUE.",
    },
  ],
  networking: [
    {
      name: "Cisco CCNA exam",
      when: "MDC can post a college certificate with this name from courses. The Cisco exam itself is separate. Schedule it before you graduate.",
    },
  ],
  chef: [
    {
      name: "ServSafe Food Handler",
      when: "The class can teach it. Buy the card at servsafe.com unless the advisor says this term includes the exam. Do it in the first term.",
    },
    {
      name: "ServSafe Manager",
      when: "The higher card. Book a proctored exam at servsafe.com and take it before you graduate.",
    },
  ],
  dental: [
    {
      name: "National Board Dental Hygiene Examination",
      when: "The exam to work as a dental hygienist. The degree does not issue the license. Schedule it before you finish, then apply to the Florida Board of Dentistry.",
    },
  ],
  pta: [
    {
      name: "National physical therapist assistant exam",
      when: "The exam employers and the state ask for. The degree does not issue the license. Schedule it as you finish the program.",
    },
  ],
  optician: [
    {
      name: "Florida optician license",
      when: "The state license. The degree does not put it in your wallet. Apply with the Board of Opticianry before you leave the program.",
    },
  ],
  nuclear: [
    {
      name: "NMTCB or ARRT nuclear medicine exam",
      when: "The credential to work in nuclear medicine. The college does not issue it. Schedule it as you finish.",
    },
  ],
  radtx: [
    {
      name: "ARRT radiation therapy exam",
      when: "The credential to give radiation treatment. The college does not issue it. Schedule it as you finish.",
    },
  ],
  ct: [
    {
      name: "ARRT computed tomography exam",
      when: "The post-primary credential. The certificate courses prepare you. Schedule the exam before you finish the certificate.",
    },
  ],
  mri: [
    {
      name: "ARRT magnetic resonance exam",
      when: "The post-primary credential. Schedule it before you finish the certificate. The college does not hand you the card.",
    },
  ],
  pharmacy: [
    {
      name: "Pharmacy technician registration",
      when: "Florida registers pharmacy technicians. The college certificate is not the registration. Apply with the Board of Pharmacy before you start working.",
    },
  ],
  massage: [
    {
      name: "Florida massage therapy license",
      when: "The state license. The college program is not the license. Apply with the Board of Massage Therapy as you finish.",
    },
  ],
  funeral: [
    {
      name: "Florida funeral director license",
      when: "The state license. There is also a college certificate on this path. The license is separate. Start the application before you graduate.",
    },
  ],
  fire: [
    {
      name: "Firefighter Minimum Standards",
      when: "The state certificate fire departments ask for. Ask which MDC courses count, and finish the state exam before you leave.",
    },
  ],
  academy: [
    {
      name: "State officer certification exam",
      when: "The academy certificate is not the last step. Schedule the state exam before you leave the academy.",
    },
  ],
  corrections: [
    {
      name: "State correctional officer exam",
      when: "The certificate prepares you. The state exam is separate. Schedule it before you finish.",
    },
  ],
  paralegal: [
    {
      name: "NALA or NFPA paralegal credential",
      when: "Optional, and useful. The degree does not make you a lawyer, and it does not hand you this card. Take it before you graduate if you want the edge.",
    },
  ],
  accounting: [
    {
      name: "QuickBooks or bookkeeping certificate",
      when: "Employers ask for it long before the CPA. The CPA needs a bachelor’s and work time, so do not wait on it. Finish a bookkeeping certificate while you are in this program.",
    },
  ],
  graphic: [
    {
      name: "Adobe Certified Professional",
      when: "Photoshop, Illustrator, or InDesign. The degree does not include the card. Schedule one exam before you graduate.",
    },
  ],
  photo: [
    {
      name: "A finished portfolio, plus Adobe Certified Professional if you edit digitally",
      when: "Studios ask for pictures, not only the degree. Finish a portfolio before you graduate. The Adobe exam is optional and separate.",
    },
  ],
  games: [
    {
      name: "A shipped game or reel, plus Unity or Unreal certification if you use that engine",
      when: "Studios ask for the work. Finish a small playable piece before you graduate. The engine certificate is separate and worth taking in the same term.",
    },
  ],
  film: [
    {
      name: "A finished reel",
      when: "The degree does not get you hired by itself. Leave with a short reel of work you did in the program.",
    },
  ],
  broadcast: [
    {
      name: "A finished demo reel",
      when: "Stations ask for the reel. Finish it before you graduate, using work from the program.",
    },
  ],
  audio: [
    {
      name: "A finished audio reel",
      when: "The certificate is the start. Leave with samples of work you can play for an employer.",
    },
  ],
  music: [
    {
      name: "A release or a live credit",
      when: "The degree is not the only proof. Finish one public credit, recording, or show before you graduate.",
    },
  ],
  fashion: [
    {
      name: "A finished garment portfolio",
      when: "Employers ask to see the clothes. Finish the portfolio before you graduate. It is part of the path, not a later project.",
    },
  ],
  interior: [
    {
      name: "NCIDQ eligibility, later",
      when: "Interior design licensing comes after education and work hours. Start the portfolio now. Ask an advisor which courses count toward the later exam.",
    },
  ],
  data: [
    {
      name: "A data tool certificate",
      when: "Tableau, Power BI, or Microsoft’s data analyst certificate. The degree does not hand you the card. Finish one before you graduate.",
    },
  ],
  database: [
    {
      name: "Oracle Database Foundations or the associate exam",
      when: "The degree track is Oracle. Schedule the vendor exam before you graduate. The class does not hand you the card.",
    },
  ],
  gis: [
    {
      name: "Esri technical certification",
      when: "The college certificate teaches the tools. The Esri exam is separate. Schedule it before you finish.",
    },
  ],
  banking: [
    {
      name: "A banking or insurance license the job names",
      when: "Some teller and advisor jobs add a state or Series exam. Ask the advisor which one this track expects, and take it before you graduate.",
    },
  ],
  project: [
    {
      name: "CAPM",
      when: "Certified Associate in Project Management, from PMI. You can sit it without years of experience. Schedule it before you graduate.",
    },
  ],
  supply: [
    {
      name: "A supply-chain certificate such as CSCMP or a Lean certificate",
      when: "The degree is the base. One outside certificate makes the résumé specific. Take it before you graduate.",
    },
  ],
  marketing: [
    {
      name: "Google Analytics or Meta’s digital marketing certificate",
      when: "Free or low-cost, and employers look for it. Finish one before you graduate. The classes do not hand you the badge.",
    },
  ],
  hr: [
    {
      name: "aPHR",
      when: "The associate professional in human resources exam. It is built for people who are not yet deep in the field. Schedule it before you graduate.",
    },
  ],
  ece: [
    {
      name: "Florida staff credential or director credential",
      when: "Child-care jobs ask for the Department of Children and Families credential. The degree does not replace it. Apply before you graduate.",
    },
  ],
  ese: [
    {
      name: "Florida teacher certification exam",
      when: "The bachelor’s does not issue the teaching certificate. Schedule the subject and professional exams before you leave the program.",
    },
  ],
  secmath: [
    {
      name: "Florida teacher certification exam",
      when: "The bachelor’s does not issue the teaching certificate. Schedule the math and professional exams before you leave the program.",
    },
  ],
  secsci: [
    {
      name: "Florida teacher certification exam",
      when: "The bachelor’s does not issue the teaching certificate. Schedule the science and professional exams before you leave the program.",
    },
  ],
  asl: [
    {
      name: "EIPA or RID screening",
      when: "Interpreting jobs ask for a performance screen. The degree does not hand you the credential. Start it before you graduate.",
    },
  ],
  translate: [
    {
      name: "A translation exam in your language pair",
      when: "ATA or a court-interpreter orientation, if that is the job. The degree does not hand you the credential. Ask which exam fits, and take the first step before you graduate.",
    },
  ],
  addiction: [
    {
      name: "Certified addiction counselor application",
      when: "The college certificate is not the state credential. Start the Florida application while you are still in the program so the hours count.",
    },
  ],
  records: [
    {
      name: "CCA or CPC coding credential",
      when: "AHIMA or AAPC. Health-information jobs ask for a coding credential. Schedule it before you graduate.",
    },
  ],
  surgical: [
    {
      name: "Certified Surgical Technologist exam",
      when: "The NBSTSA exam. The degree does not hand you the credential. Schedule it as you finish.",
    },
  ],
  clinlab: [
    {
      name: "ASCP board of certification",
      when: "The lab credential employers ask for. The degree does not issue it. Schedule it as you finish the program.",
    },
  ],
  biomed: [
    {
      name: "CBET eligibility",
      when: "Certified Biomedical Equipment Technician, from AAMI. You may need work time before the full exam. Ask what you can start before graduation.",
    },
  ],
  electronics: [
    {
      name: "ISCET or ETA electronics certification",
      when: "A technician card employers recognize. The degree does not include it. Schedule one before you graduate.",
    },
  ],
  auto: [
    {
      name: "ASE certification",
      when: "Automotive Service Excellence. The college certificate and a Tesla track do not replace ASE. Start the first exam before you finish.",
    },
  ],
  compeng: [
    {
      name: "CompTIA A+ or a Cisco first exam",
      when: "Hardware jobs ask for one of these. The degree does not hand you the card. Schedule one before you graduate.",
    },
  ],
  justice: [
    {
      name: "Academy or state exam, if you want to be sworn",
      when: "The criminal justice degree is not the police academy. If the job is sworn, add the academy. If the job is not sworn, ask which certificate the office wants and finish it before you graduate.",
    },
  ],
  crimescene: [
    {
      name: "A crime-scene technician credential",
      when: "The degree is not the only proof. Ask which certificate the local agencies want, and start it before you graduate.",
    },
  ],
  compcrime: [
    {
      name: "A digital-forensics certificate",
      when: "AccessData, Cellebrite, or a similar first exam. The degree does not hand you the card. Schedule one before you graduate.",
    },
  ],
  bsn: [
    {
      name: "ACLS",
      when: "Advanced Cardiovascular Life Support. You already hold the RN license on this path. Units still ask for ACLS. Finish it before you graduate instead of waiting for a job to tell you.",
    },
  ],
  sterile: [
    {
      name: "CRCST",
      when: "Certified Registered Central Service Technician, from HSPA. The college certificate prepares you. Schedule the exam before you finish.",
    },
  ],
  medassist: [
    {
      name: "CMA or RMA",
      when: "Certified Medical Assistant or Registered Medical Assistant. The college certificate is not that card. Schedule one exam before you graduate.",
    },
  ],
  phlebotomy: [
    {
      name: "A national phlebotomy certificate",
      when: "ASCP, NHA, or AMT. The college certificate is not the same card. Schedule one exam before you finish.",
    },
  ],
  solar: [
    {
      name: "NABCEP associate exam",
      when: "The entry solar credential. The college certificate does not replace it. Schedule it before you finish.",
    },
  ],
  civil: [
    {
      name: "OSHA 30",
      when: "Construction and civil jobs ask for it. The degree does not include the card. Finish it before you graduate.",
    },
  ],
  construction: [
    {
      name: "OSHA 30",
      when: "Jobsites ask for it. The college award does not include the card. Finish it before you graduate.",
    },
  ],
  hotel: [
    {
      name: "ServSafe Food Handler or a front-office certificate",
      when: "Hotels ask for a food card or a front-office skill. Finish one before you graduate. The class does not hand you the card.",
    },
  ],
  humansvc: [
    {
      name: "A state human-services credential the job names",
      when: "Casework jobs add their own card. Ask which one this track expects, and start it before the last term so you graduate with it.",
    },
  ],
};

function tokens(name: string): Set<string> {
  const words = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((word) => word.length >= 4 && !GENERIC.has(word));
  return new Set(words);
}

function score(left: Set<string>, right: Set<string>): number {
  let shared = 0;
  for (const word of left) if (right.has(word)) shared += 1;
  return shared;
}

function collegeCertificates(program: CatalogProgram): PathNote[] {
  const path = pathFor(program);
  const mine = tokens(program.name);
  const shorts = CATALOG.filter(
    (other) => other.code !== program.code && SHORT.has(other.award) && pathFor(other).id === path.id,
  );
  const ranked = shorts
    .map((other) => ({ other, shared: score(mine, tokens(other.name)) }))
    .filter((item) => item.shared > 0)
    .sort((a, b) => b.shared - a.shared);
  let chosen = ranked;
  if (chosen.length === 0 && /business administration/i.test(program.name)) {
    chosen = shorts
      .filter((other) => /business (operations|specialist)/i.test(other.name) && /management|general/i.test(other.name))
      .map((other) => ({ other, shared: 1 }));
  }
  const picked = (chosen.length > 0 ? chosen : shorts.length <= 3 ? shorts.map((other) => ({ other, shared: 0 })) : []).slice(
    0,
    4,
  );
  return picked.map(({ other }) => ({
    name: `${other.awardLabel}: ${other.name}`,
    when: `Code ${other.code}. Courses in this path can post it. Ask an advisor to post it when those courses are done. It is not an extra semester, and it is not saved for years later.`,
  }));
}

export function pathExtras(programId: string): { field: PathNote[]; certificates: PathNote[] } {
  const program = catalogById(programId);
  if (!program) return { field: [], certificates: [] };
  const pathId = pathFor(program).id;
  const certificates = [...collegeCertificates(program), ...(OUTSIDE[pathId] ?? []), ...(FIELD[pathId] ?? [])];
  const seen = new Set<string>();
  const unique = certificates.filter((item) => {
    const key = item.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (unique.length === 0) {
    unique.push({
      name: `One outside certificate in ${pathFor(program).name.toLowerCase()}`,
      when: "This award does not list a shorter college certificate inside it. Before the last term, pick the card employers in this field ask for and schedule it. Graduate with it, not years later.",
    });
  }
  return { field: [], certificates: unique };
}
