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

// ─── Helper functions ─────────────────────────────────────────────────────────

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
  return (Object.entries(facultyDepartments) as [Faculty, readonly Department[]][]).find(
    ([, depts]) => depts.includes(department as Department)
  )?.[0];
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