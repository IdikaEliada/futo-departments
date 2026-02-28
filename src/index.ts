// ─── Faculties ───────────────────────────────────────────────────────────────

export const faculties = [
  "School of Engineering & Engineering Technology",
  "School of Physical Sciences",
  "School of Biological Sciences",
  "School of Agriculture & Agricultural Technology",
  "School of Information & Communication Technology",
  "School of Environmental Sciences",
  "School of Logistics & Innovation Technology",
  "School of Health Technology",
  "School of Electrical Systems & Engineering Technology",
  "School of Basic Medical Sciences",
  "College of Medicine",
  "Ce-Sustainable Procurement, Environmental & Social Standards",
] as const;

export type Faculty = (typeof faculties)[number];

// ─── Departments ─────────────────────────────────────────────────────────────

export const departments = [
  "Petroleum Engineering",
  "Materials & Metallurgical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Food Science & Technology",
  "Polymer & Textile Engineering",
  "Biomedical Engineering",
  "Agricultural and Bioresources Engineering",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Statistics",
  "Science Laboratory Technology",
  "Biochemistry",
  "Microbiology",
  "Biotechnology",
  "Biology",
  "Forensic Science",
  "Crop Science and Technology",
  "Agricultural Economics",
  "Agricultural Extension",
  "Animal Science and Technology",
  "Fisheries and Aquaculture Technology",
  "Forestry and Wildlife Technology",
  "Soil Science and Technology",
  "Computer Science",
  "Software Engineering",
  "Cyber Security",
  "Information Technology",
  "Architecture",
  "Building Technology",
  "Environmental Management",
  "Quantity Surveying",
  "Surveying and Geoinformatics",
  "Urban and Regional Planning",
  "Estate Management and Evaluation",
  "Logistics & Transport Technology",
  "Entrepreneurship & Innovation",
  "Maritime Technology and Logistics",
  "Supply Chain Management",
  "Financial Innovation and Technology",
  "Project Management Technology",
  "Prosthetics and Orthotics",
  "Environmental Health Science",
  "Optometry",
  "Public Health Technology",
  "Dental Technology",
  "Radiography",
  "Mechatronics Engineering",
  "Computer Engineering",
  "Electronics Engineering",
  "Telecommunications Engineering",
  "Electrical (Power Systems) Engineering",
  "Human Anatomy",
  "Human Physiology",
  "Medicine and Surgery (MBBS)",
  "Sustainable Social Development",
  "Sustainable Environmental Studies",
  "Procurement Management",
] as const;

export type Department = (typeof departments)[number];

// ─── Faculty → Departments map ────────────────────────────────────────────────

export const facultyDepartments: Record<Faculty, readonly Department[]> = {
  "School of Engineering & Engineering Technology": [
    "Petroleum Engineering",
    "Materials & Metallurgical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Food Science & Technology",
    "Polymer & Textile Engineering",
    "Biomedical Engineering",
    "Agricultural and Bioresources Engineering",
  ],
  "School of Physical Sciences": [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Statistics",
    "Science Laboratory Technology",
  ],
  "School of Biological Sciences": [
    "Biochemistry",
    "Microbiology",
    "Biotechnology",
    "Biology",
    "Forensic Science",
  ],
  "School of Agriculture & Agricultural Technology": [
    "Crop Science and Technology",
    "Agricultural Economics",
    "Agricultural Extension",
    "Animal Science and Technology",
    "Fisheries and Aquaculture Technology",
    "Forestry and Wildlife Technology",
    "Soil Science and Technology",
  ],
  "School of Information & Communication Technology": [
    "Computer Science",
    "Software Engineering",
    "Cyber Security",
    "Information Technology",
  ],
  "School of Environmental Sciences": [
    "Architecture",
    "Building Technology",
    "Environmental Management",
    "Quantity Surveying",
    "Surveying and Geoinformatics",
    "Urban and Regional Planning",
    "Estate Management and Evaluation",
  ],
  "School of Logistics & Innovation Technology": [
    "Logistics & Transport Technology",
    "Entrepreneurship & Innovation",
    "Maritime Technology and Logistics",
    "Supply Chain Management",
    "Financial Innovation and Technology",
    "Project Management Technology",
  ],
  "School of Health Technology": [
    "Prosthetics and Orthotics",
    "Environmental Health Science",
    "Optometry",
    "Public Health Technology",
    "Dental Technology",
    "Radiography",
  ],
  "School of Electrical Systems & Engineering Technology": [
    "Mechatronics Engineering",
    "Computer Engineering",
    "Electronics Engineering",
    "Telecommunications Engineering",
    "Electrical (Power Systems) Engineering",
  ],
  "School of Basic Medical Sciences": ["Human Anatomy", "Human Physiology"],
  "College of Medicine": ["Medicine and Surgery (MBBS)"],
  "Ce-Sustainable Procurement, Environmental & Social Standards": [
    "Sustainable Social Development",
    "Sustainable Environmental Studies",
    "Procurement Management",
  ],
};

// ─── Department abbreviations ─────────────────────────────────────────────────

export const departmentAbbreviations: Record<Department, string> = {
  "Petroleum Engineering": "PET",
  "Materials & Metallurgical Engineering": "MME",
  "Mechanical Engineering": "MEE",
  "Civil Engineering": "CIE",
  "Chemical Engineering": "CHE",
  "Food Science & Technology": "FST",
  "Polymer & Textile Engineering": "PTE",
  "Biomedical Engineering": "BME",
  "Agricultural and Bioresources Engineering": "ABE",
  "Mathematics": "MTH",
  "Physics": "PHY",
  "Chemistry": "CHM",
  "Statistics": "STA",
  "Science Laboratory Technology": "SLT",
  "Biochemistry": "BCH",
  "Microbiology": "MCB",
  "Biotechnology": "BTC",
  "Biology": "BIO",
  "Forensic Science": "FRS",
  "Crop Science and Technology": "CST",
  "Agricultural Economics": "AEC",
  "Agricultural Extension": "AEX",
  "Animal Science and Technology": "AST",
  "Fisheries and Aquaculture Technology": "FAT",
  "Forestry and Wildlife Technology": "FWT",
  "Soil Science and Technology": "SST",
  "Computer Science": "CSC",
  "Software Engineering": "SOE",
  "Cyber Security": "CYB",
  "Information Technology": "IFT",
  "Architecture": "ARC",
  "Building Technology": "BLD",
  "Environmental Management": "EVM",
  "Quantity Surveying": "QST",
  "Surveying and Geoinformatics": "SVG",
  "Urban and Regional Planning": "URP",
  "Estate Management and Evaluation": "ESV",
  "Logistics & Transport Technology": "LTT",
  "Entrepreneurship & Innovation": "ENI",
  "Maritime Technology and Logistics": "MST",
  "Supply Chain Management": "SCM",
  "Financial Innovation and Technology": "FIT",
  "Project Management Technology": "PMT",
  "Prosthetics and Orthotics": "POT",
  "Environmental Health Science": "EHS",
  "Optometry": "OPT",
  "Public Health Technology": "PUH",
  "Dental Technology": "DNT",
  "Radiography": "RAD",
  "Mechatronics Engineering": "MCE",
  "Computer Engineering": "CPE",
  "Electronics Engineering": "ELE",
  "Telecommunications Engineering": "TCE",
  "Electrical (Power Systems) Engineering": "EPE",
  "Human Anatomy": "ANA",
  "Human Physiology": "PHS",
  "Medicine and Surgery (MBBS)": "MBBS",
  "Sustainable Social Development": "SSD",
  "Sustainable Environmental Studies": "SES",
  "Procurement Management": "PRM",
};

// ─── Faculty abbreviations ────────────────────────────────────────────────────

export const facultyAbbreviations: Record<Faculty, string> = {
  "School of Engineering & Engineering Technology": "SEET",
  "School of Physical Sciences": "SPS",
  "School of Biological Sciences": "SBS",
  "School of Agriculture & Agricultural Technology": "SAAT",
  "School of Information & Communication Technology": "SICT",
  "School of Environmental Sciences": "SES",
  "School of Logistics & Innovation Technology": "SLIT",
  "School of Health Technology": "SHT",
  "School of Electrical Systems & Engineering Technology": "SESET",
  "School of Basic Medical Sciences": "SBMS",
  "College of Medicine": "COM",
  "Ce-Sustainable Procurement, Environmental & Social Standards": "CESS",
};

// ─── Abbreviation helpers ─────────────────────────────────────────────────────

/**
 * Returns the abbreviation for a department, or undefined if not found.
 * Use this when you want a strict lookup with no fallback generation.
 * @example getDepartmentAbbreviation("Computer Science") // "CSC"
 * @example getDepartmentAbbreviation("Unknown Dept")     // undefined
 */
export function getDepartmentAbbreviation(department: string): string | undefined {
  return departmentAbbreviations[department as Department];
}

/**
 * Returns the abbreviation for a faculty, or undefined if not found.
 * Use this when you want a strict lookup with no fallback generation.
 * @example getFacultyAbbreviation("College of Medicine") // "COM"
 * @example getFacultyAbbreviation("Unknown Faculty")     // undefined
 */
export function getFacultyAbbreviation(faculty: string): string | undefined {
  return facultyAbbreviations[faculty as Faculty];
}

/**
 * Returns all departments and their abbreviations as an array of { name, abbreviation } objects.
 * Useful for building dropdowns, tables, or select options.
 * @example listDepartmentsWithAbbreviations()
 * // [{ name: "Computer Science", abbreviation: "CSC" }, ...]
 */
export function listDepartmentsWithAbbreviations(): { name: Department; abbreviation: string }[] {
  return departments.map((name) => ({
    name,
    abbreviation: departmentAbbreviations[name],
  }));
}

/**
 * Returns all faculties and their abbreviations as an array of { name, abbreviation } objects.
 * Useful for building dropdowns, tables, or select options.
 * @example listFacultiesWithAbbreviations()
 * // [{ name: "College of Medicine", abbreviation: "COM" }, ...]
 */
export function listFacultiesWithAbbreviations(): { name: Faculty; abbreviation: string }[] {
  return faculties.map((name) => ({
    name,
    abbreviation: facultyAbbreviations[name],
  }));
}

/**
 * Finds a department by its abbreviation code.
 * @example getDepartmentByAbbreviation("CSC") // "Computer Science"
 * @example getDepartmentByAbbreviation("XYZ") // undefined
 */
export function getDepartmentByAbbreviation(abbreviation: string): Department | undefined {
  const upper = abbreviation.toUpperCase();
  return (Object.entries(departmentAbbreviations) as [Department, string][]).find(
    ([, code]) => code === upper
  )?.[0];
}

/**
 * Finds a faculty by its abbreviation code.
 * @example getFacultyByAbbreviation("COM") // "College of Medicine"
 * @example getFacultyByAbbreviation("XYZ") // undefined
 */
export function getFacultyByAbbreviation(abbreviation: string): Faculty | undefined {
  const upper = abbreviation.toUpperCase();
  return (Object.entries(facultyAbbreviations) as [Faculty, string][]).find(
    ([, code]) => code === upper
  )?.[0];
}

// ─── Formatter functions ──────────────────────────────────────────────────────

/**
 * Returns the official abbreviation for a department.
 * Falls back to a generated abbreviation for unknown departments.
 * @example shortenDepartment("Computer Science") // "CSC"
 */
export function shortenDepartment(department: string): string {
  if (department in departmentAbbreviations) {
    return departmentAbbreviations[department as Department];
  }
  if (typeof department !== "string" || department.trim() === "") return "";
  const words = department.trim().split(/\s+/);
  const mainWords = words.filter(
    (w) => w.toLowerCase() !== "of" && w.toLowerCase() !== "&"
  );
  const filtered = mainWords.length < 4
    ? words.filter((w) => w.toLowerCase() !== "&")
    : mainWords;
  if (filtered.length === 1) return filtered[0].charAt(0).toUpperCase();
  if (filtered.length === 2) {
    const [a, b] = filtered;
    return `${a.charAt(0)}${a.length > 1 ? a.charAt(1) : ""}${b.charAt(0)}`.toUpperCase();
  }
  return filtered.map((w) => w.charAt(0).toUpperCase()).join(".");
}

/**
 * Returns the official abbreviation for a faculty.
 * Falls back to a generated abbreviation for unknown faculties.
 * @example shortenFaculty("College of Medicine") // "COM"
 */
export function shortenFaculty(faculty: string): string {
  if (faculty in facultyAbbreviations) {
    return facultyAbbreviations[faculty as Faculty];
  }
  const words = faculty.split(/\s+/).filter(
    (w) => w.toLowerCase() !== "of" && w !== "&"
  );
  return words.map((w) => w.charAt(0).toUpperCase()).join("");
}

/**
 * Formats a full name: first two names in full, third name as initial, rest discarded.
 * @example formatName("John Michael Doe Extra") // "John Michael D."
 */
export function formatName(name: string): string {
  if (typeof name !== "string" || name.trim() === "") return "";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0];
  if (words.length === 2) return `${words[0]} ${words[1]}`;
  return `${words[0]} ${words[1]} ${words[2].charAt(0).toUpperCase()}.`;
}

/**
 * Masks a registration number, keeping the first character and last 3 digits visible.
 * @param regNumber - The registration number to mask
 * @param mask - Character to use for masking (default: '*')
 * @example maskRegNumber("F/HD/22/0012345") // "F***********345"
 */
export function maskRegNumber(regNumber: string, mask = "*"): string {
  if (typeof regNumber !== "string" || regNumber.trim() === "") return "";
  const trimmed = regNumber.trim();
  const maskedLength = Math.max(0, trimmed.length - 4);
  return `${trimmed[0]}${mask.repeat(maskedLength)}${trimmed.slice(-3)}`;
}

// ─── Lookup helpers ───────────────────────────────────────────────────────────

/**
 * Returns the departments for a given faculty.
 * Falls back to all departments if the faculty is not found.
 */
export function getDepartmentsByFaculty(faculty: string): readonly Department[] {
  return facultyDepartments[faculty as Faculty] ?? departments;
}

/**
 * Returns the faculty a department belongs to, or undefined if not found.
 */
export function getFacultyByDepartment(department: string): Faculty | undefined {
  return (
    Object.entries(facultyDepartments) as [Faculty, readonly Department[]][]
  ).find(([, depts]) => depts.includes(department as Department))?.[0];
}

/**
 * Returns true if the given string is a valid department name.
 */
export function isValidDepartment(value: string): value is Department {
  return (departments as readonly string[]).includes(value);
}

/**
 * Returns true if the given string is a valid faculty name.
 */
export function isValidFaculty(value: string): value is Faculty {
  return (faculties as readonly string[]).includes(value);
}