/** Miami Dade College Academic Program Inventory, revised September 16, 2025. Public list of awards, not every course. */
export type CatalogField = "care" | "build" | "business" | "tech" | "media" | "science" | "justice" | "other";
export type CatalogLength = "short" | "associate" | "bachelor";
export type CatalogProgram = {
  id: string;
  code: string;
  award: string;
  awardLabel: string;
  name: string;
  field: CatalogField;
  length: CatalogLength;
};

export const CATALOG: CatalogProgram[] = [
  { id: "AA", code: "AA", award: "AA", awardLabel: "Associate in Arts", name: "Associate in Arts", field: "other", length: "associate" },
  { id: "59005", code: "59005", award: "APPR", awardLabel: "Apprenticeship", name: "Aircraft Structural Assembly and Fabrication Apprenticeship", field: "build", length: "short" },
  { id: "25022", code: "25022", award: "AS", awardLabel: "Associate in Science", name: "Accounting Technology", field: "business", length: "associate" },
  { id: "25074", code: "25074", award: "AS", awardLabel: "Associate in Science", name: "Animation & Game Art", field: "media", length: "associate" },
  { id: "25080", code: "25080", award: "AS", awardLabel: "Associate in Science", name: "Applied Artificial Intelligence", field: "tech", length: "associate" },
  { id: "26034", code: "26034", award: "AS", awardLabel: "Associate in Science", name: "Architectural Design & Construction Technology", field: "build", length: "associate" },
  { id: "26028", code: "26028", award: "AS", awardLabel: "Associate in Science", name: "Aviation Administration", field: "build", length: "associate" },
  { id: "26027", code: "26027", award: "AS", awardLabel: "Associate in Science", name: "Aviation Maintenance Management", field: "build", length: "associate" },
  { id: "26053", code: "26053", award: "AS", awardLabel: "Associate in Science", name: "Biomedical Engineering Technology", field: "care", length: "associate" },
  { id: "22027", code: "22027", award: "AS", awardLabel: "Associate in Science", name: "Biotechnology", field: "science", length: "associate" },
  { id: "22028", code: "22028", award: "AS", awardLabel: "Associate in Science", name: "Biotechnology - Bioinformatics", field: "science", length: "associate" },
  { id: "22029", code: "22029", award: "AS", awardLabel: "Associate in Science", name: "Biotechnology - Chemical Technology", field: "science", length: "associate" },
  { id: "26033", code: "26033", award: "AS", awardLabel: "Associate in Science", name: "Building Construction Technology", field: "build", length: "associate" },
  { id: "25051", code: "25051", award: "AS", awardLabel: "Associate in Science", name: "Business Administration", field: "business", length: "associate" },
  { id: "25073", code: "25073", award: "AS", awardLabel: "Associate in Science", name: "Business Intelligence Specialist", field: "business", length: "associate" },
  { id: "26035", code: "26035", award: "AS", awardLabel: "Associate in Science", name: "Civil Engineering Technology", field: "build", length: "associate" },
  { id: "23024", code: "23024", award: "AS", awardLabel: "Associate in Science", name: "Clinical Laboratory Sciences", field: "care", length: "associate" },
  { id: "27028", code: "27028", award: "AS", awardLabel: "Associate in Science", name: "Computer Crime Investigation", field: "tech", length: "associate" },
  { id: "26052", code: "26052", award: "AS", awardLabel: "Associate in Science", name: "Computer Engineering Technology", field: "tech", length: "associate" },
  { id: "25055", code: "25055", award: "AS", awardLabel: "Associate in Science", name: "Computer Information Technology", field: "tech", length: "associate" },
  { id: "25065", code: "25065", award: "AS", awardLabel: "Associate in Science", name: "Computer Programming and Analysis - Business App. Programming", field: "tech", length: "associate" },
  { id: "25076", code: "25076", award: "AS", awardLabel: "Associate in Science", name: "Computer Programming and Analysis - Internet of Things (IoT) Applications", field: "tech", length: "associate" },
  { id: "25070", code: "25070", award: "AS", awardLabel: "Associate in Science", name: "Computer Programming and Analysis - Mobile Applications Development", field: "tech", length: "associate" },
  { id: "27026", code: "27026", award: "AS", awardLabel: "Associate in Science", name: "Crime Scene Technology - Crime Scene Investigation", field: "justice", length: "associate" },
  { id: "27027", code: "27027", award: "AS", awardLabel: "Associate in Science", name: "Crime Scene Technology - Forensic Science", field: "justice", length: "associate" },
  { id: "27012", code: "27012", award: "AS", awardLabel: "Associate in Science", name: "Criminal Justice Technology", field: "justice", length: "associate" },
  { id: "22031", code: "22031", award: "AS", awardLabel: "Associate in Science", name: "Culinary Arts Management", field: "build", length: "associate" },
  { id: "25079", code: "25079", award: "AS", awardLabel: "Associate in Science", name: "Cybersecurity", field: "tech", length: "associate" },
  { id: "25058", code: "25058", award: "AS", awardLabel: "Associate in Science", name: "Database Technology - Oracle Database Administration", field: "tech", length: "associate" },
  { id: "23021", code: "23021", award: "AS", awardLabel: "Associate in Science", name: "Dental Hygiene", field: "care", length: "associate" },
  { id: "23038", code: "23038", award: "AS", awardLabel: "Associate in Science", name: "Diagnostic Medical Sonography Specialist", field: "care", length: "associate" },
  { id: "27014", code: "27014", award: "AS", awardLabel: "Associate in Science", name: "Early Childhood Education", field: "care", length: "associate" },
  { id: "27033", code: "27033", award: "AS", awardLabel: "Associate in Science", name: "Early Childhood Education - Administrators", field: "care", length: "associate" },
  { id: "27032", code: "27032", award: "AS", awardLabel: "Associate in Science", name: "Early Childhood Education - Infant Toddler", field: "care", length: "associate" },
  { id: "27031", code: "27031", award: "AS", awardLabel: "Associate in Science", name: "Early Childhood Education - Preschool", field: "care", length: "associate" },
  { id: "26039", code: "26039", award: "AS", awardLabel: "Associate in Science", name: "Electronics Engineering Technology", field: "build", length: "associate" },
  { id: "23047", code: "23047", award: "AS", awardLabel: "Associate in Science", name: "Emergency Medical Services", field: "care", length: "associate" },
  { id: "20002", code: "20002", award: "AS", awardLabel: "Associate in Science", name: "Entrepreneurship", field: "business", length: "associate" },
  { id: "22005", code: "22005", award: "AS", awardLabel: "Associate in Science", name: "Fashion Design", field: "media", length: "associate" },
  { id: "22020", code: "22020", award: "AS", awardLabel: "Associate in Science", name: "Fashion Merchandising", field: "business", length: "associate" },
  { id: "26044", code: "26044", award: "AS", awardLabel: "Associate in Science", name: "Film Production Technology", field: "media", length: "associate" },
  { id: "22026", code: "22026", award: "AS", awardLabel: "Associate in Science", name: "Financial Services - Banking", field: "business", length: "associate" },
  { id: "22024", code: "22024", award: "AS", awardLabel: "Associate in Science", name: "Financial Services - Wealth Management", field: "business", length: "associate" },
  { id: "27018", code: "27018", award: "AS", awardLabel: "Associate in Science", name: "Fire Science Technology", field: "justice", length: "associate" },
  { id: "23049", code: "23049", award: "AS", awardLabel: "Associate in Science", name: "Funeral Services", field: "care", length: "associate" },
  { id: "25075", code: "25075", award: "AS", awardLabel: "Associate in Science", name: "Game Development & Design", field: "media", length: "associate" },
  { id: "26031", code: "26031", award: "AS", awardLabel: "Associate in Science", name: "Graphic Design Technology", field: "media", length: "associate" },
  { id: "26050", code: "26050", award: "AS", awardLabel: "Associate in Science", name: "Graphic Internet Technology", field: "media", length: "associate" },
  { id: "23052", code: "23052", award: "AS", awardLabel: "Associate in Science", name: "Health Information Technology", field: "tech", length: "associate" },
  { id: "23081", code: "23081", award: "AS", awardLabel: "Associate in Science", name: "Health Sciences", field: "care", length: "associate" },
  { id: "23082", code: "23082", award: "AS", awardLabel: "Associate in Science", name: "Health Sciences - Health Services Management", field: "care", length: "associate" },
  { id: "23064", code: "23064", award: "AS", awardLabel: "Associate in Science", name: "Histologic Technology", field: "care", length: "associate" },
  { id: "22016", code: "22016", award: "AS", awardLabel: "Associate in Science", name: "Hospitality & Tourism Management", field: "business", length: "associate" },
  { id: "26030", code: "26030", award: "AS", awardLabel: "Associate in Science", name: "Interior Design Technology", field: "build", length: "associate" },
  { id: "21005", code: "21005", award: "AS", awardLabel: "Associate in Science", name: "Landscape & Horticulture Technology", field: "build", length: "associate" },
  { id: "25047", code: "25047", award: "AS", awardLabel: "Associate in Science", name: "Marketing", field: "business", length: "associate" },
  { id: "25019", code: "25019", award: "AS", awardLabel: "Associate in Science", name: "Music Business - Business Management", field: "media", length: "associate" },
  { id: "25044", code: "25044", award: "AS", awardLabel: "Associate in Science", name: "Music Business - Performance and Production", field: "media", length: "associate" },
  { id: "25077", code: "25077", award: "AS", awardLabel: "Associate in Science", name: "Networking Services Technology - Enterprise Cloud Computing", field: "tech", length: "associate" },
  { id: "25062", code: "25062", award: "AS", awardLabel: "Associate in Science", name: "Networking Services Technology - Network Infrastructure", field: "tech", length: "associate" },
  { id: "23068", code: "23068", award: "AS", awardLabel: "Associate in Science", name: "Nuclear Medicine Technology", field: "care", length: "associate" },
  { id: "23031", code: "23031", award: "AS", awardLabel: "Associate in Science", name: "Nursing - R.N. (Accelerated)", field: "care", length: "associate" },
  { id: "23028", code: "23028", award: "AS", awardLabel: "Associate in Science", name: "Nursing - R.N. (Generic Full-Time)", field: "care", length: "associate" },
  { id: "23027", code: "23027", award: "AS", awardLabel: "Associate in Science", name: "Nursing - R.N. (Generic Part-Time)", field: "care", length: "associate" },
  { id: "23025", code: "23025", award: "AS", awardLabel: "Associate in Science", name: "Nursing - R.N. (Transitional Full-Time)", field: "care", length: "associate" },
  { id: "23026", code: "23026", award: "AS", awardLabel: "Associate in Science", name: "Nursing - R.N. (Transitional Part-Time)", field: "care", length: "associate" },
  { id: "23041", code: "23041", award: "AS", awardLabel: "Associate in Science", name: "Opticianry", field: "care", length: "associate" },
  { id: "27013", code: "27013", award: "AS", awardLabel: "Associate in Science", name: "Paralegal Studies - ABA Approved", field: "justice", length: "associate" },
  { id: "26032", code: "26032", award: "AS", awardLabel: "Associate in Science", name: "Photographic Technology", field: "media", length: "associate" },
  { id: "23034", code: "23034", award: "AS", awardLabel: "Associate in Science", name: "Physical Therapist Assistant", field: "care", length: "associate" },
  { id: "26029", code: "26029", award: "AS", awardLabel: "Associate in Science", name: "Professional Pilot Technology", field: "build", length: "associate" },
  { id: "23058", code: "23058", award: "AS", awardLabel: "Associate in Science", name: "Radiation Therapy", field: "other", length: "associate" },
  { id: "26043", code: "26043", award: "AS", awardLabel: "Associate in Science", name: "Radio & Television Broadcast Programming", field: "tech", length: "associate" },
  { id: "23037", code: "23037", award: "AS", awardLabel: "Associate in Science", name: "Radiography", field: "care", length: "associate" },
  { id: "23046", code: "23046", award: "AS", awardLabel: "Associate in Science", name: "Respiratory Care", field: "care", length: "associate" },
  { id: "23067", code: "23067", award: "AS", awardLabel: "Associate in Science", name: "Respiratory Care (Accelerated)", field: "care", length: "associate" },
  { id: "23033", code: "23033", award: "AS", awardLabel: "Associate in Science", name: "Sign Language Interpretation", field: "care", length: "associate" },
  { id: "25067", code: "25067", award: "AS", awardLabel: "Associate in Science", name: "Social and Human Services - Addictions Studies", field: "care", length: "associate" },
  { id: "25026", code: "25026", award: "AS", awardLabel: "Associate in Science", name: "Social and Human Services - Generalist", field: "care", length: "associate" },
  { id: "23077", code: "23077", award: "AS", awardLabel: "Associate in Science", name: "Surgical Technology", field: "other", length: "associate" },
  { id: "24050", code: "24050", award: "AS", awardLabel: "Associate in Science", name: "Translation/Interpretation Studies", field: "other", length: "associate" },
  { id: "28010", code: "28010", award: "AS", awardLabel: "Associate in Science", name: "Sport Management", field: "business", length: "associate" },
  { id: "28000", code: "28000", award: "AS", awardLabel: "Associate in Science", name: "Transportation and Logistics", field: "business", length: "associate" },
  { id: "23065", code: "23065", award: "AS", awardLabel: "Associate in Science", name: "Veterinary Technology", field: "other", length: "associate" },
  { id: "C6050", code: "C6050", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Museum Studies", field: "other", length: "short" },
  { id: "C6027", code: "C6027", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Certified Flight Instructor", field: "other", length: "short" },
  { id: "C6002", code: "C6002", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Compensation and Benefits", field: "other", length: "short" },
  { id: "C6000", code: "C6000", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Hospitality Management", field: "business", length: "short" },
  { id: "C6001", code: "C6001", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Human Resources Management", field: "business", length: "short" },
  { id: "C6003", code: "C6003", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Procurement Management", field: "business", length: "short" },
  { id: "C6004", code: "C6004", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Project Management", field: "business", length: "short" },
  { id: "C6005", code: "C6005", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Supply Chain Analytics", field: "other", length: "short" },
  { id: "C6037", code: "C6037", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Computed Tomography", field: "other", length: "short" },
  { id: "C6036", code: "C6036", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Magnetic Resonance Imaging", field: "other", length: "short" },
  { id: "C6028", code: "C6028", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Biotechnology", field: "science", length: "short" },
  { id: "C6029", code: "C6029", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Biotechnology - Bioinformatics", field: "science", length: "short" },
  { id: "C6030", code: "C6030", award: "ATC", awardLabel: "Advanced Technical Certificate", name: "Biotechnology - Chemical Technology", field: "science", length: "short" },
  { id: "P9200", code: "P9200", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Leadership and Management Innovation", field: "business", length: "bachelor" },
  { id: "P9203", code: "P9203", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Leadership and Management Innovation - Accounting", field: "business", length: "bachelor" },
  { id: "P9204", code: "P9204", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Leadership and Management Innovation - Digital Marketing Concentration", field: "business", length: "bachelor" },
  { id: "P9201", code: "P9201", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Leadership and Management Innovation - Hospitality Management", field: "business", length: "bachelor" },
  { id: "P9202", code: "P9202", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Leadership and Management Innovation - Human Resource Management", field: "business", length: "bachelor" },
  { id: "P9300", code: "P9300", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Supply Chain Management", field: "business", length: "bachelor" },
  { id: "P9301", code: "P9301", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Supply Chain Management - Procurement Management", field: "business", length: "bachelor" },
  { id: "P9302", code: "P9302", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Supply Chain Management - Project Management", field: "business", length: "bachelor" },
  { id: "P9303", code: "P9303", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Supply Chain Management - Supply Chain Analytics", field: "business", length: "bachelor" },
  { id: "P9220", code: "P9220", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Film, Television & Digital Production", field: "media", length: "bachelor" },
  { id: "P9211", code: "P9211", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Clinical Laboratory Science", field: "care", length: "bachelor" },
  { id: "P9212", code: "P9212", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Health Science - Histotechnology Concentration", field: "care", length: "bachelor" },
  { id: "P9210", code: "P9210", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Health Science - Physician Assistant Studies Concentration", field: "care", length: "bachelor" },
  { id: "P9106", code: "P9106", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Public Safety Management - Crime Scene Investigation Option", field: "justice", length: "bachelor" },
  { id: "P9110", code: "P9110", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Public Safety Management - Criminal Justice Option", field: "justice", length: "bachelor" },
  { id: "P9105", code: "P9105", award: "BAS", awardLabel: "Bachelor of Applied Science", name: "Public Safety Management - Emergency Management Option", field: "justice", length: "bachelor" },
  { id: "N9100", code: "N9100", award: "BS", awardLabel: "Bachelor of Science", name: "Bachelor of Science in Nursing (RN to BSN)", field: "care", length: "bachelor" },
  { id: "S9270", code: "S9270", award: "BS", awardLabel: "Bachelor of Science", name: "Early Childhood Education", field: "care", length: "bachelor" },
  { id: "S9260", code: "S9260", award: "BS", awardLabel: "Bachelor of Science", name: "Exceptional Student Education (K-12)", field: "care", length: "bachelor" },
  { id: "S9250", code: "S9250", award: "BS", awardLabel: "Bachelor of Science", name: "Secondary Mathematics Education", field: "care", length: "bachelor" },
  { id: "S9210", code: "S9210", award: "BS", awardLabel: "Bachelor of Science", name: "Secondary Science Education - Biology", field: "care", length: "bachelor" },
  { id: "S9520", code: "S9520", award: "BS", awardLabel: "Bachelor of Science", name: "Applied Artificial Intelligence", field: "tech", length: "bachelor" },
  { id: "S9515", code: "S9515", award: "BS", awardLabel: "Bachelor of Science", name: "Cybersecurity", field: "tech", length: "bachelor" },
  { id: "S9510", code: "S9510", award: "BS", awardLabel: "Bachelor of Science", name: "Data Analytics", field: "tech", length: "bachelor" },
  { id: "S9100", code: "S9100", award: "BS", awardLabel: "Bachelor of Science", name: "Electrical and Computer Engineering Technology", field: "tech", length: "bachelor" },
  { id: "S9500", code: "S9500", award: "BS", awardLabel: "Bachelor of Science", name: "Information Systems Technology - Networking Concentration", field: "tech", length: "bachelor" },
  { id: "S9501", code: "S9501", award: "BS", awardLabel: "Bachelor of Science", name: "Information Systems Technology - Software Engineering Concentration", field: "tech", length: "bachelor" },
  { id: "S9121", code: "S9121", award: "BS", awardLabel: "Bachelor of Science", name: "Biological Sciences - Biopharmaceutical Sciences Concentration", field: "care", length: "bachelor" },
  { id: "S9120", code: "S9120", award: "BS", awardLabel: "Bachelor of Science", name: "Biological Sciences - Biotechnology Concentration", field: "science", length: "bachelor" },
  { id: "S9122", code: "S9122", award: "BS", awardLabel: "Bachelor of Science", name: "Biological Sciences - Science Education", field: "care", length: "bachelor" },
  { id: "65075", code: "65075", award: "CCC", awardLabel: "College Credit Certificate", name: "Accounting and Budgeting", field: "business", length: "short" },
  { id: "65077", code: "65077", award: "CCC", awardLabel: "College Credit Certificate", name: "Accounting Technology Management", field: "business", length: "short" },
  { id: "65078", code: "65078", award: "CCC", awardLabel: "College Credit Certificate", name: "Addiction Studies", field: "care", length: "short" },
  { id: "66030", code: "66030", award: "CCC", awardLabel: "College Credit Certificate", name: "Air Cargo Management", field: "business", length: "short" },
  { id: "63018", code: "63018", award: "CCC", awardLabel: "College Credit Certificate", name: "Airline Maintenance Procedures and Records Management", field: "business", length: "short" },
  { id: "63012", code: "63012", award: "CCC", awardLabel: "College Credit Certificate", name: "Airline/Aviation Management", field: "build", length: "short" },
  { id: "63017", code: "63017", award: "CCC", awardLabel: "College Credit Certificate", name: "Airport Management", field: "business", length: "short" },
  { id: "64053", code: "64053", award: "CCC", awardLabel: "College Credit Certificate", name: "American Sign Language", field: "care", length: "short" },
  { id: "66040", code: "66040", award: "CCC", awardLabel: "College Credit Certificate", name: "Artificial Intelligence Awareness", field: "tech", length: "short" },
  { id: "66041", code: "66041", award: "CCC", awardLabel: "College Credit Certificate", name: "Artificial Intelligence Practitioner", field: "tech", length: "short" },
  { id: "61000", code: "61000", award: "CCC", awardLabel: "College Credit Certificate", name: "Audio Technology", field: "media", length: "short" },
  { id: "68000", code: "68000", award: "CCC", awardLabel: "College Credit Certificate", name: "Automation", field: "other", length: "short" },
  { id: "60002", code: "60002", award: "CCC", awardLabel: "College Credit Certificate", name: "Biotechnology", field: "science", length: "short" },
  { id: "66025", code: "66025", award: "CCC", awardLabel: "College Credit Certificate", name: "Building Construction Specialist", field: "build", length: "short" },
  { id: "65109", code: "65109", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Entrepreneurship Operations - Family-Owned Business", field: "business", length: "short" },
  { id: "65111", code: "65111", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Entrepreneurship Operations - Social Venture", field: "care", length: "short" },
  { id: "65110", code: "65110", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Entrepreneurship Operations – Start-Up Venture", field: "business", length: "short" },
  { id: "65098", code: "65098", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Entrepreneurship Specialist - Family-Owned Business", field: "business", length: "short" },
  { id: "65097", code: "65097", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Entrepreneurship Specialist - Social Venture", field: "care", length: "short" },
  { id: "65101", code: "65101", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Entrepreneurship Specialist - Start-Up Venture", field: "business", length: "short" },
  { id: "65061", code: "65061", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Industry Operations", field: "business", length: "short" },
  { id: "66038", code: "66038", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Intelligence Professional", field: "business", length: "short" },
  { id: "65022", code: "65022", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Operations - Business Management", field: "business", length: "short" },
  { id: "65025", code: "65025", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Operations - Human Resources", field: "business", length: "short" },
  { id: "65027", code: "65027", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Operations - Marketing", field: "business", length: "short" },
  { id: "65031", code: "65031", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Operations - Small Business", field: "business", length: "short" },
  { id: "65011", code: "65011", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Specialist - Business Management", field: "business", length: "short" },
  { id: "65100", code: "65100", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Specialist - General Business", field: "business", length: "short" },
  { id: "65014", code: "65014", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Specialist - Human Resources", field: "business", length: "short" },
  { id: "65015", code: "65015", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Specialist - International Business", field: "business", length: "short" },
  { id: "65016", code: "65016", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Specialist - Marketing", field: "business", length: "short" },
  { id: "65020", code: "65020", award: "CCC", awardLabel: "College Credit Certificate", name: "Business Specialist - Small Business", field: "business", length: "short" },
  { id: "65059", code: "65059", award: "CCC", awardLabel: "College Credit Certificate", name: "Chef Apprentice", field: "build", length: "short" },
  { id: "66050", code: "66050", award: "CCC", awardLabel: "College Credit Certificate", name: "Cisco Certified Network Associate (CCNA)", field: "tech", length: "short" },
  { id: "68012", code: "68012", award: "CCC", awardLabel: "College Credit Certificate", name: "Commercial Transport Pilot", field: "build", length: "short" },
  { id: "66070", code: "66070", award: "CCC", awardLabel: "College Credit Certificate", name: "Computer Aided Design Assistant", field: "tech", length: "short" },
  { id: "66071", code: "66071", award: "CCC", awardLabel: "College Credit Certificate", name: "Computer Aided Design Operator", field: "tech", length: "short" },
  { id: "66045", code: "66045", award: "CCC", awardLabel: "College Credit Certificate", name: "Computer Programmer - Business Applications", field: "tech", length: "short" },
  { id: "66036", code: "66036", award: "CCC", awardLabel: "College Credit Certificate", name: "Computer Programmer - Mobile Applications Development", field: "tech", length: "short" },
  { id: "66072", code: "66072", award: "CCC", awardLabel: "College Credit Certificate", name: "Crime Scene Technician", field: "justice", length: "short" },
  { id: "65053", code: "65053", award: "CCC", awardLabel: "College Credit Certificate", name: "Cruise Line Operations", field: "other", length: "short" },
  { id: "65060", code: "65060", award: "CCC", awardLabel: "College Credit Certificate", name: "Culinary Arts Management Operations", field: "build", length: "short" },
  { id: "66061", code: "66061", award: "CCC", awardLabel: "College Credit Certificate", name: "Cybersecurity Analyst", field: "tech", length: "short" },
  { id: "65096", code: "65096", award: "CCC", awardLabel: "College Credit Certificate", name: "Digital Marketing Specialist", field: "business", length: "short" },
  { id: "65102", code: "65102", award: "CCC", awardLabel: "College Credit Certificate", name: "Digital Marketing Strategy", field: "business", length: "short" },
  { id: "60004", code: "60004", award: "CCC", awardLabel: "College Credit Certificate", name: "Early Childhood Education - Administrator", field: "care", length: "short" },
  { id: "60007", code: "60007", award: "CCC", awardLabel: "College Credit Certificate", name: "Early Childhood Education - Child Development Early Intervention Specialization", field: "care", length: "short" },
  { id: "60006", code: "60006", award: "CCC", awardLabel: "College Credit Certificate", name: "Early Childhood Education - Early Childhood Education Inclusion Specialization", field: "care", length: "short" },
  { id: "60003", code: "60003", award: "CCC", awardLabel: "College Credit Certificate", name: "Early Childhood Education - Preschool", field: "care", length: "short" },
  { id: "63013", code: "63013", award: "CCC", awardLabel: "College Credit Certificate", name: "Emergency Medical Technician", field: "care", length: "short" },
  { id: "63030", code: "63030", award: "CCC", awardLabel: "College Credit Certificate", name: "Endoscopic Technician", field: "other", length: "short" },
  { id: "66052", code: "66052", award: "CCC", awardLabel: "College Credit Certificate", name: "Engineering Technology Support Specialist", field: "build", length: "short" },
  { id: "66058", code: "66058", award: "CCC", awardLabel: "College Credit Certificate", name: "Enterprise Cloud Computing", field: "tech", length: "short" },
  { id: "61001", code: "61001", award: "CCC", awardLabel: "College Credit Certificate", name: "Film Production Fundamentals", field: "media", length: "short" },
  { id: "63024", code: "63024", award: "CCC", awardLabel: "College Credit Certificate", name: "Florida Funeral Director", field: "care", length: "short" },
  { id: "65051", code: "65051", award: "CCC", awardLabel: "College Credit Certificate", name: "Food and Beverage Management", field: "business", length: "short" },
  { id: "65058", code: "65058", award: "CCC", awardLabel: "College Credit Certificate", name: "Food and Beverage Operations", field: "other", length: "short" },
  { id: "65057", code: "65057", award: "CCC", awardLabel: "College Credit Certificate", name: "Food and Beverage Specialist", field: "other", length: "short" },
  { id: "66080", code: "66080", award: "CCC", awardLabel: "College Credit Certificate", name: "Geographic Information Systems (GIS) Technology", field: "tech", length: "short" },
  { id: "61002", code: "61002", award: "CCC", awardLabel: "College Credit Certificate", name: "Graphic Design Support", field: "media", length: "short" },
  { id: "63021", code: "63021", award: "CCC", awardLabel: "College Credit Certificate", name: "Health Care Services Specialist", field: "care", length: "short" },
  { id: "63014", code: "63014", award: "CCC", awardLabel: "College Credit Certificate", name: "Healthcare Informatics Specialist", field: "care", length: "short" },
  { id: "66037", code: "66037", award: "CCC", awardLabel: "College Credit Certificate", name: "Help Desk Support Technician", field: "other", length: "short" },
  { id: "66074", code: "66074", award: "CCC", awardLabel: "College Credit Certificate", name: "Homeland Security", field: "justice", length: "short" },
  { id: "63025", code: "63025", award: "CCC", awardLabel: "College Credit Certificate", name: "Horticulture Professional", field: "build", length: "short" },
  { id: "63026", code: "63026", award: "CCC", awardLabel: "College Credit Certificate", name: "Horticulture Specialist", field: "build", length: "short" },
  { id: "67014", code: "67014", award: "CCC", awardLabel: "College Credit Certificate", name: "Infant/Toddler Specialization", field: "other", length: "short" },
  { id: "66044", code: "66044", award: "CCC", awardLabel: "College Credit Certificate", name: "Information Technology Support", field: "tech", length: "short" },
  { id: "66075", code: "66075", award: "CCC", awardLabel: "College Credit Certificate", name: "Intelligence Studies", field: "other", length: "short" },
  { id: "68011", code: "68011", award: "CCC", awardLabel: "College Credit Certificate", name: "Intermodal Freight Transportation", field: "other", length: "short" },
  { id: "68010", code: "68010", award: "CCC", awardLabel: "College Credit Certificate", name: "International Freight Transportation", field: "other", length: "short" },
  { id: "66057", code: "66057", award: "CCC", awardLabel: "College Credit Certificate", name: "Internet of Things (IoT) Applications", field: "tech", length: "short" },
  { id: "68001", code: "68001", award: "CCC", awardLabel: "College Credit Certificate", name: "Lean Manufacturing", field: "other", length: "short" },
  { id: "65080", code: "65080", award: "CCC", awardLabel: "College Credit Certificate", name: "Lending", field: "other", length: "short" },
  { id: "63019", code: "63019", award: "CCC", awardLabel: "College Credit Certificate", name: "Logistics and Transportation Specialist", field: "business", length: "short" },
  { id: "66053", code: "66053", award: "CCC", awardLabel: "College Credit Certificate", name: "Mechatronics", field: "other", length: "short" },
  { id: "63020", code: "63020", award: "CCC", awardLabel: "College Credit Certificate", name: "Medical Coder/Biller", field: "care", length: "short" },
  { id: "65079", code: "65079", award: "CCC", awardLabel: "College Credit Certificate", name: "Mental Health - Neuroscience and Aging", field: "care", length: "short" },
  { id: "66032", code: "66032", award: "CCC", awardLabel: "College Credit Certificate", name: "Microcomputer Repairer/Installer", field: "tech", length: "short" },
  { id: "66035", code: "66035", award: "CCC", awardLabel: "College Credit Certificate", name: "Network Server Administration", field: "tech", length: "short" },
  { id: "66034", code: "66034", award: "CCC", awardLabel: "College Credit Certificate", name: "Network Systems Developer", field: "tech", length: "short" },
  { id: "66048", code: "66048", award: "CCC", awardLabel: "College Credit Certificate", name: "Oracle Certified Database Administrator", field: "tech", length: "short" },
  { id: "63008", code: "63008", award: "CCC", awardLabel: "College Credit Certificate", name: "Paramedic", field: "other", length: "short" },
  { id: "66028", code: "66028", award: "CCC", awardLabel: "College Credit Certificate", name: "Passenger Service Agent", field: "other", length: "short" },
  { id: "64002", code: "64002", award: "CCC", awardLabel: "College Credit Certificate", name: "Patternmaking and Construction", field: "build", length: "short" },
  { id: "66054", code: "66054", award: "CCC", awardLabel: "College Credit Certificate", name: "Rapid Prototyping Specialist", field: "other", length: "short" },
  { id: "67015", code: "67015", award: "CCC", awardLabel: "College Credit Certificate", name: "Real Estate Legal Specialization Certificate", field: "business", length: "short" },
  { id: "65048", code: "65048", award: "CCC", awardLabel: "College Credit Certificate", name: "Rooms Division Management", field: "business", length: "short" },
  { id: "65056", code: "65056", award: "CCC", awardLabel: "College Credit Certificate", name: "Rooms Division Operations", field: "other", length: "short" },
  { id: "65055", code: "65055", award: "CCC", awardLabel: "College Credit Certificate", name: "Rooms Division Specialist", field: "other", length: "short" },
  { id: "65107", code: "65107", award: "CCC", awardLabel: "College Credit Certificate", name: "Sales and Customer Management", field: "business", length: "short" },
  { id: "66056", code: "66056", award: "CCC", awardLabel: "College Credit Certificate", name: "Solar Energy Systems Specialist", field: "other", length: "short" },
  { id: "65120", code: "65120", award: "CCC", awardLabel: "College Credit Certificate", name: "Sport Management Operations", field: "business", length: "short" },
  { id: "65076", code: "65076", award: "CCC", awardLabel: "College Credit Certificate", name: "Tax Specialist", field: "other", length: "short" },
  { id: "61003", code: "61003", award: "CCC", awardLabel: "College Credit Certificate", name: "Television Studio Production", field: "media", length: "short" },
  { id: "64052", code: "64052", award: "CCC", awardLabel: "College Credit Certificate", name: "Translation and Interpretation", field: "other", length: "short" },
  { id: "66060", code: "66060", award: "CCC", awardLabel: "College Credit Certificate", name: "Virtual and Augmented Reality Technologies", field: "other", length: "short" },
  { id: "51000", code: "51000", award: "CTC", awardLabel: "Career Technical Certificate", name: "Advanced Automotive Service Technology - Tesla Technician", field: "build", length: "short" },
  { id: "53014", code: "53014", award: "CTC", awardLabel: "Career Technical Certificate", name: "Central Sterile Processing Technician", field: "other", length: "short" },
  { id: "56016", code: "56016", award: "CTC", awardLabel: "Career Technical Certificate", name: "Commercial Class \"B\" Driving", field: "other", length: "short" },
  { id: "56015", code: "56015", award: "CTC", awardLabel: "Career Technical Certificate", name: "Commercial Vehicle Driving", field: "other", length: "short" },
  { id: "57021", code: "57021", award: "CTC", awardLabel: "Career Technical Certificate", name: "Correctional Officer - State", field: "business", length: "short" },
  { id: "53015", code: "53015", award: "CTC", awardLabel: "Career Technical Certificate", name: "Dental Assisting Technology and Management", field: "care", length: "short" },
  { id: "57004", code: "57004", award: "CTC", awardLabel: "Career Technical Certificate", name: "Fire Fighter Minimum Standards", field: "other", length: "short" },
  { id: "58000", code: "58000", award: "CTC", awardLabel: "Career Technical Certificate", name: "Fire Fighter/Emergency Medical Technician - Combined", field: "care", length: "short" },
  { id: "57022", code: "57022", award: "CTC", awardLabel: "Career Technical Certificate", name: "Florida Law Enforcement Academy", field: "other", length: "short" },
  { id: "53020", code: "53020", award: "CTC", awardLabel: "Career Technical Certificate", name: "Licensed Practical Nursing", field: "care", length: "short" },
  { id: "56010", code: "56010", award: "CTC", awardLabel: "Career Technical Certificate", name: "Low Voltage", field: "other", length: "short" },
  { id: "53022", code: "53022", award: "CTC", awardLabel: "Career Technical Certificate", name: "Massage Therapy - Accelerated Option", field: "care", length: "short" },
  { id: "53021", code: "53021", award: "CTC", awardLabel: "Career Technical Certificate", name: "Massage Therapy - Generic Option", field: "care", length: "short" },
  { id: "53023", code: "53023", award: "CTC", awardLabel: "Career Technical Certificate", name: "Massage Therapy - Transitional Option", field: "care", length: "short" },
  { id: "53007", code: "53007", award: "CTC", awardLabel: "Career Technical Certificate", name: "Medical Assisting", field: "care", length: "short" },
  { id: "53004", code: "53004", award: "CTC", awardLabel: "Career Technical Certificate", name: "Pharmacy Technician", field: "care", length: "short" },
  { id: "53003", code: "53003", award: "CTC", awardLabel: "Career Technical Certificate", name: "Phlebotomy Technician", field: "care", length: "short" },
  { id: "57023", code: "57023", award: "CTC", awardLabel: "Career Technical Certificate", name: "Private Investigator Intern", field: "justice", length: "short" },
  { id: "57006", code: "57006", award: "CTC", awardLabel: "Career Technical Certificate", name: "Private Security Officer", field: "justice", length: "short" },
  { id: "53018", code: "53018", award: "CTC", awardLabel: "Career Technical Certificate", name: "Professional Nursing (LPN-RN)", field: "care", length: "short" },
  { id: "mechanical", code: "10911", award: "AA", awardLabel: "Associate in Arts pathway", name: "Mechanical engineering", field: "build", length: "associate" },
];

export function catalogById(id: string): CatalogProgram | undefined {
  return CATALOG.find((program) => program.id === id);
}

export function searchCatalog(query: string, list: CatalogProgram[] = CATALOG): CatalogProgram[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return list.filter((program) =>
    `${program.name} ${program.awardLabel} ${program.award} ${program.code}`.toLowerCase().includes(q),
  );
}

export type AreaId = "care" | "make" | "business" | "tech" | "create" | "safety" | "science" | "open";
export type ClusterId =
  | "nursing"
  | "imaging"
  | "emergency"
  | "clinical"
  | "teaching"
  | "helping"
  | "animals"
  | "language"
  | "design"
  | "engineering"
  | "aviation"
  | "food"
  | "trades"
  | "money"
  | "offices"
  | "hospitality"
  | "logistics"
  | "code"
  | "networks"
  | "art"
  | "production"
  | "culture"
  | "public-safety"
  | "law"
  | "lab"
  | "transfer";

export const AREAS: { id: AreaId; label: string }[] = [
  { id: "care", label: "Caring for people" },
  { id: "make", label: "Making, building, or fixing" },
  { id: "business", label: "Business and money" },
  { id: "tech", label: "Computers and information" },
  { id: "create", label: "Art, media, or languages" },
  { id: "safety", label: "Safety, law, or the community" },
  { id: "science", label: "Science and the lab" },
  { id: "open", label: "I’m still open" },
];

export const CLUSTERS: { id: ClusterId; area: Exclude<AreaId, "open">; label: string }[] = [
  { id: "nursing", area: "care", label: "Nursing" },
  { id: "imaging", area: "care", label: "Imaging and treatment" },
  { id: "emergency", area: "care", label: "Emergency care" },
  { id: "clinical", area: "care", label: "Patient support roles" },
  { id: "teaching", area: "care", label: "Teaching and early childhood" },
  { id: "helping", area: "care", label: "Counseling and community help" },
  { id: "animals", area: "care", label: "Animals" },
  { id: "design", area: "make", label: "Buildings, design, and plants" },
  { id: "engineering", area: "make", label: "Machines, electronics, and repair" },
  { id: "aviation", area: "make", label: "Planes and airports" },
  { id: "food", area: "make", label: "Food and the kitchen" },
  { id: "trades", area: "make", label: "Driving" },
  { id: "money", area: "business", label: "Accounting and money" },
  { id: "offices", area: "business", label: "Running a business" },
  { id: "hospitality", area: "business", label: "Hotels, tourism, and sports" },
  { id: "logistics", area: "business", label: "Moving goods" },
  { id: "code", area: "tech", label: "Programming, data, and AI" },
  { id: "networks", area: "tech", label: "Networks, cybersecurity, and IT support" },
  { id: "art", area: "create", label: "Design, games, and photos" },
  { id: "production", area: "create", label: "Film, TV, and music" },
  { id: "culture", area: "create", label: "Museums" },
  { id: "language", area: "create", label: "Languages and interpreting" },
  { id: "public-safety", area: "safety", label: "Safety and justice" },
  { id: "law", area: "safety", label: "Law and legal work" },
  { id: "lab", area: "science", label: "Lab science and biotechnology" },
  { id: "transfer", area: "science", label: "Associate in Arts, major not chosen" },
];

const CLUSTER_RULES: [ClusterId, RegExp][] = [
  ["nursing", /nursing/i],
  ["teaching", /education|early childhood|infant\/toddler/i],
  ["language", /sign language|translation|interpretation/i],
  ["animals", /veterinar/i],
  ["law", /paralegal|legal/i],
  ["public-safety", /criminal|crime|fire fight|fire science|law enforcement|homeland|security officer|investigator|correctional|intelligence studies|public safety/i],
  ["lab", /biotech|biological science|clinical laboratory|histolog|histotech/i],
  ["imaging", /sonograph|radiograph|nuclear medicine|computed tomography|magnetic resonance|radiation therapy/i],
  ["emergency", /emergency medical|paramedic/i],
  ["clinical", /dental|respiratory|optician|physical therapist|surgical|endoscopic|sterile|phlebot|medical assist|pharmacy|massage|funeral|health information|healthcare informatics|medical coder|health science|health care|biomedical/i],
  ["helping", /social and human|addiction|mental health/i],
  ["aviation", /aircraft|aviation|pilot|flight instructor|airline|airport|air cargo|passenger service/i],
  ["food", /culinary|chef|food and beverage/i],
  ["art", /graphic design|graphic internet|fashion design|photographic|animation|game art|game development/i],
  ["production", /film|television|audio technology|radio|music business|broadcast/i],
  ["culture", /museum/i],
  ["design", /architect|interior design|building construction|civil engineering|landscape|horticult|patternmaking/i],
  ["engineering", /electronic|engineering technology support|mechatronic|automotive|tesla|solar|automation|lean manufacturing|rapid prototyp|mechanical engineering|computer aided design|low voltage/i],
  ["code", /programming|artificial intelligence|data analytics|database|oracle|internet of things|software engineering|geographic information|virtual and augmented|computer programmer|business intelligence/i],
  ["networks", /cyber|network|computer information|computer engineering|electrical and computer|help desk|microcomputer|information technology|cloud computing|information systems/i],
  ["money", /account|tax specialist|lending|banking|wealth|financial service|compensation/i],
  ["logistics", /transport|supply chain|logistic|freight|procurement/i],
  ["hospitality", /hospitality|rooms division|cruise|sport management/i],
  ["offices", /business|entrepreneur|human resource|project management|marketing|sales|leadership|real estate|management/i],
  ["trades", /commercial vehicle|driving/i],
  ["transfer", /^associate in arts$/i],
];

export function clusterIdFor(program: CatalogProgram): ClusterId {
  const found = CLUSTER_RULES.find(([, rule]) => rule.test(program.name));
  return found ? found[0] : "offices";
}

export function clusterById(id: ClusterId) {
  const found = CLUSTERS.find((cluster) => cluster.id === id);
  if (!found) throw new Error("Unknown cluster");
  return found;
}

export function clustersForArea(area: AreaId) {
  if (area === "open") return CLUSTERS;
  if (area === "science") return CLUSTERS.filter((cluster) => cluster.id === "lab");
  return CLUSTERS.filter((cluster) => cluster.area === area);
}

export function programsForAnswers(cluster: ClusterId, length: CatalogLength | "any"): CatalogProgram[] {
  return CATALOG.filter((program) => {
    if (clusterIdFor(program) !== cluster) return false;
    if (length !== "any" && program.length !== length) return false;
    return true;
  });
}

export type CareerPath = {
  id: string;
  cluster: ClusterId;
  name: string;
  line: string;
  test: RegExp;
};

/** First matching path inside the program's cluster wins. */
export const CAREER_PATHS: CareerPath[] = [
  { id: "lpn", cluster: "nursing", name: "Licensed practical nurse", line: "A shorter nursing certificate. It can come before the registered nurse degree.", test: /practical nursing/i },
  { id: "bsn", cluster: "nursing", name: "Bachelor’s degree for registered nurses", line: "For someone who already has the RN. This is not the first nursing program.", test: /bachelor of science in nursing/i },
  { id: "rn", cluster: "nursing", name: "Registered nurse", line: "Associate paths into RN, including full-time, part-time, and LPN-to-RN.", test: /nursing/i },
  { id: "sono", cluster: "imaging", name: "Sonographer", line: "Uses sound waves to make images.", test: /sonograph/i },
  { id: "nuclear", cluster: "imaging", name: "Nuclear medicine", line: "Images the body with small amounts of radioactive material.", test: /nuclear/i },
  { id: "radtx", cluster: "imaging", name: "Radiation therapy", line: "Uses radiation as treatment, not only as a picture.", test: /radiation therapy/i },
  { id: "ct", cluster: "imaging", name: "Computed tomography", line: "A certificate often taken after a radiography start.", test: /computed tomography/i },
  { id: "mri", cluster: "imaging", name: "Magnetic resonance imaging", line: "A certificate often taken after a radiography start.", test: /magnetic resonance/i },
  { id: "rad", cluster: "imaging", name: "Radiographer", line: "The associate degree that starts most imaging work.", test: /radiograph/i },
  { id: "emt", cluster: "emergency", name: "Emergency medical technician", line: "The shorter first step in emergency care.", test: /technician/i },
  { id: "paramedic", cluster: "emergency", name: "Paramedic", line: "The longer emergency-care path after EMT.", test: /paramedic|emergency medical services/i },
  { id: "dental", cluster: "clinical", name: "Dental care", line: "Dental assisting or dental hygiene.", test: /dental/i },
  { id: "respiratory", cluster: "clinical", name: "Respiratory care", line: "Helps patients breathe.", test: /respiratory/i },
  { id: "pta", cluster: "clinical", name: "Physical therapist assistant", line: "Works with patients who are rebuilding movement.", test: /physical therapist/i },
  { id: "optician", cluster: "clinical", name: "Optician", line: "Fits glasses and contact lenses. This is not medical school.", test: /optician/i },
  { id: "pharmacy", cluster: "clinical", name: "Pharmacy technician", line: "Supports a pharmacy. It does not make you a pharmacist.", test: /pharmacy/i },
  { id: "medassist", cluster: "clinical", name: "Medical assistant", line: "Front-office and clinical tasks in a doctor’s office.", test: /medical assist/i },
  { id: "phlebotomy", cluster: "clinical", name: "Phlebotomy", line: "Draws blood for tests.", test: /phlebot/i },
  { id: "massage", cluster: "clinical", name: "Massage therapy", line: "A license path with more than one start option.", test: /massage/i },
  { id: "surgical", cluster: "clinical", name: "Surgical technology", line: "Works in the operating room, not as the surgeon.", test: /surgical/i },
  { id: "sterile", cluster: "clinical", name: "Sterile processing", line: "Cleans and prepares instruments.", test: /sterile/i },
  { id: "endo", cluster: "clinical", name: "Endoscopy technician", line: "Helps with camera procedures.", test: /endoscopic/i },
  { id: "funeral", cluster: "clinical", name: "Funeral service", line: "Prepares you for funeral directing work.", test: /funeral/i },
  { id: "records", cluster: "clinical", name: "Health information and coding", line: "Records, coding, and informatics rather than hands-on care.", test: /health information|healthcare informatics|medical coder/i },
  { id: "biomed", cluster: "clinical", name: "Biomedical equipment", line: "Repairs and supports medical machines.", test: /biomedical/i },
  { id: "healthsci", cluster: "clinical", name: "Health sciences", line: "A broader health degree, including later bachelor’s options.", test: /health science|health care/i },
  { id: "ese", cluster: "teaching", name: "Exceptional student education", line: "Teaching students who need extra support.", test: /exceptional/i },
  { id: "secmath", cluster: "teaching", name: "Secondary mathematics teacher", line: "A bachelor’s path for middle and high school math.", test: /secondary mathematics/i },
  { id: "secsci", cluster: "teaching", name: "Secondary science teacher", line: "A bachelor’s path for science teaching.", test: /secondary science|science education/i },
  { id: "ece", cluster: "teaching", name: "Early childhood education", line: "Preschool, infants, toddlers, and child-care leadership.", test: /early childhood|infant\/toddler|education/i },
  { id: "addiction", cluster: "helping", name: "Addiction studies", line: "Work with people in recovery.", test: /addiction/i },
  { id: "mental", cluster: "helping", name: "Mental health support", line: "A certificate, not a counseling license by itself.", test: /mental health/i },
  { id: "humansvc", cluster: "helping", name: "Social and human services", line: "Community help, including a generalist path.", test: /social and human/i },
  { id: "vet", cluster: "animals", name: "Veterinary technology", line: "Works with veterinarians. It does not make you a veterinarian.", test: /veterinar/i },
  { id: "architect", cluster: "design", name: "Architecture", line: "Starts as a drafter. A licensed architect still needs a later professional degree.", test: /architect/i },
  { id: "interior", cluster: "design", name: "Interior design", line: "Plans indoor spaces.", test: /interior/i },
  { id: "construction", cluster: "design", name: "Building construction", line: "The construction side of buildings, not the drawing studio.", test: /building construction/i },
  { id: "civil", cluster: "design", name: "Civil engineering technology", line: "Roads, structures, and site work at the technician level.", test: /civil/i },
  { id: "landscape", cluster: "design", name: "Landscape and horticulture", line: "Plants, landscapes, and grounds.", test: /landscape|horticult/i },
  { id: "pattern", cluster: "design", name: "Patternmaking", line: "Building garments, not designing a whole fashion line.", test: /patternmaking/i },
  { id: "mechanical", cluster: "engineering", name: "Mechanical engineering", line: "An associate transfer path. The bachelor’s is at a university after MDC.", test: /mechanical/i },
  { id: "electronics", cluster: "engineering", name: "Electronics", line: "Electronics engineering technology.", test: /electronic/i },
  { id: "auto", cluster: "engineering", name: "Automotive service", line: "Includes the Tesla technician certificate.", test: /automotive|tesla/i },
  { id: "mechatronics", cluster: "engineering", name: "Mechatronics and automation", line: "Machines that combine electronics and control.", test: /mechatronic|automation/i },
  { id: "solar", cluster: "engineering", name: "Solar energy", line: "A short certificate in solar systems.", test: /solar/i },
  { id: "cad", cluster: "engineering", name: "Computer-aided drafting", line: "Drawing with software. Not the architecture degree.", test: /computer aided/i },
  { id: "lean", cluster: "engineering", name: "Manufacturing support", line: "Lean manufacturing and rapid prototyping.", test: /lean manufacturing|rapid prototyp/i },
  { id: "lowvolt", cluster: "engineering", name: "Low voltage", line: "A short technical certificate.", test: /low voltage/i },
  { id: "engsupport", cluster: "engineering", name: "Engineering technology support", line: "A support certificate beside the longer engineering technology degrees.", test: /engineering technology support/i },
  { id: "pilot", cluster: "aviation", name: "Pilot", line: "Flying, including instructor and commercial certificates.", test: /pilot|flight instructor/i },
  { id: "avmaint", cluster: "aviation", name: "Aircraft maintenance", line: "Repair and structural work on aircraft.", test: /maintenance|aircraft|structural/i },
  { id: "avmanage", cluster: "aviation", name: "Airport and airline operations", line: "The desk side of aviation: airports, cargo, and passengers.", test: /aviation|airline|airport|air cargo|passenger/i },
  { id: "chef", cluster: "food", name: "Chef", line: "Culinary arts, including the apprenticeship certificate.", test: /culinary|chef/i },
  { id: "fab", cluster: "food", name: "Food and beverage service", line: "Restaurants and service, not the culinary degree.", test: /food and beverage/i },
  { id: "cdl", cluster: "trades", name: "Commercial driving", line: "A short certificate to drive commercial vehicles.", test: /commercial vehicle|driving/i },
  { id: "accounting", cluster: "money", name: "Accounting", line: "Bookkeeping through accounting technology.", test: /account|tax specialist/i },
  { id: "banking", cluster: "money", name: "Banking and financial services", line: "Banking, lending, and wealth management.", test: /banking|wealth|financial|lending/i },
  { id: "benefits", cluster: "money", name: "Compensation and benefits", line: "A short certificate inside human-resources work.", test: /compensation/i },
  { id: "hr", cluster: "offices", name: "Human resources", line: "Hiring and employee relations.", test: /human resource/i },
  { id: "project", cluster: "offices", name: "Project management", line: "Running projects. Not the same as a full business degree.", test: /project management/i },
  { id: "marketing", cluster: "offices", name: "Marketing", line: "Marketing and digital marketing.", test: /marketing/i },
  { id: "leadership", cluster: "offices", name: "Leadership", line: "Bachelor’s paths in leadership and management.", test: /leadership/i },
  { id: "merch", cluster: "offices", name: "Fashion merchandising", line: "Selling fashion, not designing it.", test: /fashion merchandis/i },
  { id: "sales", cluster: "offices", name: "Sales", line: "Sales and customer management.", test: /sales/i },
  { id: "business", cluster: "offices", name: "Owning or running a business", line: "Business administration, entrepreneurship, and small-business certificates.", test: /business|entrepreneur/i },
  { id: "sport", cluster: "hospitality", name: "Sport management", line: "The business side of sports.", test: /sport/i },
  { id: "cruise", cluster: "hospitality", name: "Cruise line operations", line: "A short certificate in cruise operations.", test: /cruise/i },
  { id: "rooms", cluster: "hospitality", name: "Hotel rooms division", line: "Front office and rooms operations.", test: /rooms division/i },
  { id: "hotel", cluster: "hospitality", name: "Hospitality and tourism", line: "Hotels and tourism management.", test: /hospitality/i },
  { id: "procure", cluster: "logistics", name: "Procurement", line: "Buying for an organization.", test: /procurement/i },
  { id: "supply", cluster: "logistics", name: "Supply chain", line: "Moving and planning goods, including later bachelor’s options.", test: /supply chain/i },
  { id: "freight", cluster: "logistics", name: "Transportation and freight", line: "Trucks, freight, and transportation logistics.", test: /freight|transport|logistic/i },
  { id: "ai", cluster: "code", name: "Artificial intelligence", line: "Associate, bachelor’s, and short AI certificates.", test: /artificial intelligence/i },
  { id: "data", cluster: "code", name: "Data and business intelligence", line: "Data analytics and business intelligence.", test: /data analytics|business intelligence/i },
  { id: "database", cluster: "code", name: "Databases", line: "Oracle and database administration.", test: /database|oracle/i },
  { id: "gis", cluster: "code", name: "Geographic information systems", line: "Maps and location data.", test: /geographic/i },
  { id: "vr", cluster: "code", name: "Virtual and augmented reality", line: "A short certificate.", test: /virtual and augmented/i },
  { id: "software", cluster: "code", name: "Software and programming", line: "Programming, mobile apps, and the Internet of Things.", test: /programming|programmer|internet of things|software/i },
  { id: "cyber", cluster: "networks", name: "Cybersecurity", line: "Protecting systems. MDC has both an associate and a bachelor’s.", test: /cyber/i },
  { id: "itsupport", cluster: "networks", name: "IT support", line: "Help desk, repair, and computer information technology.", test: /help desk|microcomputer|information technology support|computer information/i },
  { id: "networking", cluster: "networks", name: "Networking and cloud", line: "Networks, Cisco, and cloud certificates.", test: /network|cloud|cisco/i },
  { id: "infosys", cluster: "networks", name: "Information systems", line: "Bachelor’s concentrations after an IT start.", test: /information systems/i },
  { id: "compeng", cluster: "networks", name: "Computer and electrical engineering technology", line: "Hardware and engineering technology, not a software-only path.", test: /computer engineering|electrical and computer/i },
  { id: "graphic", cluster: "art", name: "Graphic design", line: "Design for print and screens.", test: /graphic design|graphic internet/i },
  { id: "games", cluster: "art", name: "Animation and games", line: "Game art, animation, and game development.", test: /game|animation/i },
  { id: "fashion", cluster: "art", name: "Fashion design", line: "Designing clothes, not merchandising them.", test: /fashion design/i },
  { id: "photo", cluster: "art", name: "Photography", line: "Photographic technology.", test: /photographic/i },
  { id: "film", cluster: "production", name: "Film and television", line: "Production, including the bachelor’s.", test: /film|television studio/i },
  { id: "audio", cluster: "production", name: "Audio", line: "A short audio-technology certificate.", test: /audio/i },
  { id: "music", cluster: "production", name: "Music business", line: "The business or the performance side of music.", test: /music/i },
  { id: "broadcast", cluster: "production", name: "Radio and broadcast", line: "Radio and broadcast programming.", test: /radio|broadcast/i },
  { id: "museum", cluster: "culture", name: "Museum studies", line: "A short certificate.", test: /museum/i },
  { id: "asl", cluster: "language", name: "Sign language interpreting", line: "American Sign Language and interpretation.", test: /sign language/i },
  { id: "translate", cluster: "language", name: "Translation", line: "Spoken and written translation studies.", test: /translation|interpretation/i },
  { id: "crimescene", cluster: "public-safety", name: "Crime scene work", line: "Collecting and documenting evidence.", test: /crime scene|forensic/i },
  { id: "justice", cluster: "public-safety", name: "Criminal justice", line: "The associate degree and the bachelor’s option.", test: /criminal justice/i },
  { id: "fire", cluster: "public-safety", name: "Fire service", line: "Fire science and firefighter standards.", test: /fire/i },
  { id: "academy", cluster: "public-safety", name: "Law enforcement academy", line: "The academy certificate, not the criminal justice degree.", test: /law enforcement/i },
  { id: "intel", cluster: "public-safety", name: "Homeland security and intelligence", line: "Security studies beyond street patrol.", test: /homeland|intelligence/i },
  { id: "guard", cluster: "public-safety", name: "Private security and investigation", line: "Security officer and investigator certificates.", test: /security officer|investigator/i },
  { id: "corrections", cluster: "public-safety", name: "Corrections", line: "State correctional officer.", test: /correctional/i },
  { id: "compcrime", cluster: "public-safety", name: "Computer crime investigation", line: "Investigating digital crime. Not the cybersecurity degree.", test: /computer crime/i },
  { id: "publicsafety", cluster: "public-safety", name: "Public safety management", line: "Bachelor’s options after a public-safety start.", test: /public safety/i },
  { id: "paralegal", cluster: "law", name: "Paralegal", line: "Legal work under a lawyer. It does not make you a lawyer.", test: /paralegal/i },
  { id: "relegal", cluster: "law", name: "Real estate legal work", line: "A legal certificate for real estate, not the sales license by itself.", test: /legal/i },
  { id: "biotech", cluster: "lab", name: "Biotechnology", line: "Lab work with living systems, including bachelor’s options.", test: /biotech/i },
  { id: "clinlab", cluster: "lab", name: "Clinical laboratory", line: "Testing patient samples, including histology.", test: /clinical laboratory|histolog|histotech/i },
  { id: "biosci", cluster: "lab", name: "Biological sciences", line: "A bachelor’s in biology.", test: /biological/i },
  { id: "aa", cluster: "transfer", name: "Associate in Arts", line: "The transfer degree used when the major is not a separate MDC award yet.", test: /associate in arts/i },
];

export type PathGroup = {
  id: string;
  name: string;
  line: string;
  programs: CatalogProgram[];
};

export function pathFor(program: CatalogProgram): CareerPath {
  const cluster = clusterIdFor(program);
  const found = CAREER_PATHS.find((path) => path.cluster === cluster && path.test.test(program.name));
  if (found) return found;
  return {
    id: `${cluster}-more`,
    cluster,
    name: "Other awards in this group",
    line: "These public awards did not fit a narrower path.",
    test: /$^/,
  };
}

export function careerPathsFor(programs: CatalogProgram[]): PathGroup[] {
  const groups = new Map<string, PathGroup>();
  for (const program of programs) {
    const path = pathFor(program);
    const existing = groups.get(path.id);
    if (existing) existing.programs.push(program);
    else groups.set(path.id, { id: path.id, name: path.name, line: path.line, programs: [program] });
  }
  return [...groups.values()];
}

export type PathQuestion = {
  prompt: string;
  options: { id: string; label: string; pathId?: string; next?: PathQuestion }[];
};

const PATH_QUESTIONS: Partial<Record<ClusterId, PathQuestion>> = {
  nursing: {
    prompt: "Which nursing step are you on?",
    options: [
      { id: "lpn", label: "I want the shorter nursing certificate", pathId: "lpn" },
      { id: "rn", label: "I want to become a registered nurse", pathId: "rn" },
      { id: "bsn", label: "I am already an RN and want the bachelor’s", pathId: "bsn" },
    ],
  },
  imaging: {
    prompt: "What kind of image or treatment?",
    options: [
      { id: "rad", label: "X-ray images, the usual starting degree", pathId: "rad" },
      { id: "sono", label: "Sound-wave images", pathId: "sono" },
      { id: "nuclear", label: "Nuclear medicine images", pathId: "nuclear" },
      { id: "radtx", label: "Radiation as treatment", pathId: "radtx" },
      { id: "ct", label: "CT scans, after a radiography start", pathId: "ct" },
      { id: "mri", label: "MRI scans, after a radiography start", pathId: "mri" },
    ],
  },
  emergency: {
    prompt: "How far into emergency care do you want to go?",
    options: [
      { id: "emt", label: "The shorter first certificate", pathId: "emt" },
      { id: "paramedic", label: "Paramedic, the longer path", pathId: "paramedic" },
    ],
  },
  clinical: {
    prompt: "Where do you picture the work?",
    options: [
      {
        id: "body",
        label: "Hands-on care with a patient",
        next: {
          prompt: "Which kind of patient care?",
          options: [
            { id: "dental", label: "Teeth", pathId: "dental" },
            { id: "respiratory", label: "Helping people breathe", pathId: "respiratory" },
            { id: "pta", label: "Rebuilding movement", pathId: "pta" },
            { id: "optician", label: "Glasses and contact lenses", pathId: "optician" },
            { id: "massage", label: "Massage", pathId: "massage" },
            { id: "surgical", label: "The operating room", pathId: "surgical" },
            { id: "endo", label: "Camera procedures", pathId: "endo" },
            { id: "sterile", label: "Cleaning instruments", pathId: "sterile" },
          ],
        },
      },
      {
        id: "desk",
        label: "Records, coding, or machines",
        next: {
          prompt: "Records, machines, or a broader health degree?",
          options: [
            { id: "records", label: "Health records and coding", pathId: "records" },
            { id: "biomed", label: "Medical machines", pathId: "biomed" },
            { id: "healthsci", label: "A broader health degree", pathId: "healthsci" },
          ],
        },
      },
      {
        id: "clinic",
        label: "A clinic task with a short certificate",
        next: {
          prompt: "Pharmacy, blood draw, or the medical office?",
          options: [
            { id: "pharmacy", label: "Pharmacy", pathId: "pharmacy" },
            { id: "phlebotomy", label: "Drawing blood", pathId: "phlebotomy" },
            { id: "medassist", label: "Medical office assisting", pathId: "medassist" },
          ],
        },
      },
      { id: "funeral", label: "Funeral service", pathId: "funeral" },
    ],
  },
  teaching: {
    prompt: "Who do you want to teach?",
    options: [
      { id: "ece", label: "Young children", pathId: "ece" },
      { id: "ese", label: "Students who need extra support", pathId: "ese" },
      { id: "secmath", label: "Middle or high school math", pathId: "secmath" },
      { id: "secsci", label: "Middle or high school science", pathId: "secsci" },
    ],
  },
  helping: {
    prompt: "What kind of help?",
    options: [
      { id: "addiction", label: "People in recovery", pathId: "addiction" },
      { id: "mental", label: "Mental health support", pathId: "mental" },
      { id: "humansvc", label: "General community and human services", pathId: "humansvc" },
    ],
  },
  design: {
    prompt: "What do you want to shape?",
    options: [
      { id: "architect", label: "Buildings, as a drafter first", pathId: "architect" },
      { id: "interior", label: "Indoor rooms", pathId: "interior" },
      { id: "construction", label: "The construction of buildings", pathId: "construction" },
      { id: "civil", label: "Roads, sites, and structures", pathId: "civil" },
      { id: "landscape", label: "Plants and landscapes", pathId: "landscape" },
      { id: "pattern", label: "Garment patterns", pathId: "pattern" },
    ],
  },
  engineering: {
    prompt: "What do you want to work on?",
    options: [
      {
        id: "machines",
        label: "Machines and engines",
        next: {
          prompt: "Which machines do you want to work on?",
          options: [
            { id: "mechanical", label: "Mechanical engineering, then a university", pathId: "mechanical" },
            { id: "auto", label: "Cars, including Tesla service", pathId: "auto" },
            { id: "mechatronics", label: "Automated machines", pathId: "mechatronics" },
            { id: "lean", label: "Factory and prototyping support", pathId: "lean" },
          ],
        },
      },
      {
        id: "power",
        label: "Electricity and electronics",
        next: {
          prompt: "Electronics, solar, or low voltage?",
          options: [
            { id: "electronics", label: "Electronics technology", pathId: "electronics" },
            { id: "solar", label: "Solar energy", pathId: "solar" },
            { id: "lowvolt", label: "Low-voltage systems", pathId: "lowvolt" },
          ],
        },
      },
      { id: "cad", label: "Drawings on a computer", pathId: "cad" },
      { id: "engsupport", label: "A short support certificate beside engineering", pathId: "engsupport" },
    ],
  },
  aviation: {
    prompt: "What part of aviation?",
    options: [
      { id: "pilot", label: "Flying the plane", pathId: "pilot" },
      { id: "avmaint", label: "Repairing the plane", pathId: "avmaint" },
      { id: "avmanage", label: "Airports, airlines, or cargo", pathId: "avmanage" },
    ],
  },
  food: {
    prompt: "Where in food service?",
    options: [
      { id: "chef", label: "The kitchen, as a cook or chef", pathId: "chef" },
      { id: "fab", label: "The dining room and beverage service", pathId: "fab" },
    ],
  },
  money: {
    prompt: "What kind of money work?",
    options: [
      { id: "accounting", label: "Accounting and tax", pathId: "accounting" },
      { id: "banking", label: "Banking or financial services", pathId: "banking" },
      { id: "benefits", label: "Pay and benefits", pathId: "benefits" },
    ],
  },
  offices: {
    prompt: "What part of a business?",
    options: [
      { id: "business", label: "Running or starting the business", pathId: "business" },
      { id: "merch", label: "Selling fashion", pathId: "merch" },
      {
        id: "market",
        label: "Reaching customers",
        next: {
          prompt: "Marketing or sales?",
          options: [
            { id: "marketing", label: "Marketing", pathId: "marketing" },
            { id: "sales", label: "Sales", pathId: "sales" },
          ],
        },
      },
      {
        id: "people",
        label: "People, projects, or leadership",
        next: {
          prompt: "Hiring, projects, or leadership?",
          options: [
            { id: "hr", label: "Hiring and employees", pathId: "hr" },
            { id: "project", label: "Running projects", pathId: "project" },
            { id: "leadership", label: "A leadership degree", pathId: "leadership" },
          ],
        },
      },
    ],
  },
  hospitality: {
    prompt: "Hotels, the front office, a cruise ship, or sports?",
    options: [
      { id: "hotel", label: "Hotels and tourism", pathId: "hotel" },
      { id: "rooms", label: "The hotel front office", pathId: "rooms" },
      { id: "cruise", label: "A cruise ship", pathId: "cruise" },
      { id: "sport", label: "Sports business", pathId: "sport" },
    ],
  },
  logistics: {
    prompt: "What part of moving goods?",
    options: [
      { id: "supply", label: "Planning the whole supply chain", pathId: "supply" },
      { id: "freight", label: "Transportation and freight", pathId: "freight" },
      { id: "procure", label: "Buying for an organization", pathId: "procure" },
    ],
  },
  code: {
    prompt: "What do you want to build?",
    options: [
      { id: "software", label: "Software and apps", pathId: "software" },
      { id: "ai", label: "Artificial intelligence", pathId: "ai" },
      { id: "data", label: "Data and business intelligence", pathId: "data" },
      { id: "database", label: "Databases", pathId: "database" },
      { id: "gis", label: "Maps and location data", pathId: "gis" },
      { id: "vr", label: "Virtual or augmented reality", pathId: "vr" },
    ],
  },
  networks: {
    prompt: "What kind of technology work?",
    options: [
      { id: "itsupport", label: "Helping people when technology breaks", pathId: "itsupport" },
      { id: "cyber", label: "Protecting systems", pathId: "cyber" },
      { id: "networking", label: "Networks and the cloud", pathId: "networking" },
      { id: "compeng", label: "Computer or electrical hardware", pathId: "compeng" },
    ],
  },
  art: {
    prompt: "What do you want to make?",
    options: [
      { id: "graphic", label: "Graphics and layouts", pathId: "graphic" },
      { id: "games", label: "Animation or games", pathId: "games" },
      { id: "fashion", label: "Clothes", pathId: "fashion" },
      { id: "photo", label: "Photographs", pathId: "photo" },
    ],
  },
  production: {
    prompt: "What do you want to produce?",
    options: [
      { id: "film", label: "Film or television", pathId: "film" },
      { id: "music", label: "Music business", pathId: "music" },
      { id: "audio", label: "Sound and audio", pathId: "audio" },
      { id: "broadcast", label: "Radio or broadcast", pathId: "broadcast" },
    ],
  },
  language: {
    prompt: "Sign language or spoken translation?",
    options: [
      { id: "asl", label: "American Sign Language", pathId: "asl" },
      { id: "translate", label: "Translation between spoken languages", pathId: "translate" },
    ],
  },
  "public-safety": {
    prompt: "What kind of safety work?",
    options: [
      {
        id: "evidence",
        label: "Crime and evidence",
        next: {
          prompt: "Crime scenes, computer crime, or the criminal justice degree?",
          options: [
            { id: "crimescene", label: "Crime scenes", pathId: "crimescene" },
            { id: "compcrime", label: "Computer crime", pathId: "compcrime" },
            { id: "justice", label: "Criminal justice as a degree", pathId: "justice" },
          ],
        },
      },
      {
        id: "uniform",
        label: "Fire or the police academy",
        next: {
          prompt: "Fire service or the police academy?",
          options: [
            { id: "fire", label: "Fire service", pathId: "fire" },
            { id: "academy", label: "The law enforcement academy", pathId: "academy" },
          ],
        },
      },
      { id: "publicsafety", label: "Managing public safety, a bachelor’s", pathId: "publicsafety" },
      { id: "intel", label: "Homeland security or intelligence", pathId: "intel" },
      {
        id: "local",
        label: "Private security or corrections",
        next: {
          prompt: "Private security or corrections?",
          options: [
            { id: "guard", label: "Private security or investigation", pathId: "guard" },
            { id: "corrections", label: "Corrections", pathId: "corrections" },
          ],
        },
      },
    ],
  },
  law: {
    prompt: "What kind of legal work?",
    options: [
      { id: "paralegal", label: "Paralegal work for a lawyer", pathId: "paralegal" },
      { id: "relegal", label: "Real estate legal work", pathId: "relegal" },
    ],
  },
  lab: {
    prompt: "What kind of lab?",
    options: [
      { id: "biotech", label: "Biotechnology", pathId: "biotech" },
      { id: "clinlab", label: "Testing patient samples", pathId: "clinlab" },
      { id: "biosci", label: "Biology as a bachelor’s degree", pathId: "biosci" },
    ],
  },
};

export function questionForCluster(cluster: ClusterId): PathQuestion | null {
  return PATH_QUESTIONS[cluster] ?? null;
}

export function onlyPath(cluster: ClusterId): string | null {
  const ids = new Set(CATALOG.filter((program) => clusterIdFor(program) === cluster).map((program) => pathFor(program).id));
  if (ids.size !== 1) return null;
  return [...ids][0];
}
