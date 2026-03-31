// ── Types ────────────────────────────────────────────────────────────────────

/// A faculty (school) at FUTO.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Faculty {
    pub name: &'static str,
    pub abbreviation: &'static str,
}

/// A department at FUTO.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Department {
    pub name: &'static str,
    pub abbreviation: &'static str,
    pub faculty: &'static str,
}

// ── Static data ───────────────────────────────────────────────────────────────

/// All faculties at FUTO.
pub const FACULTIES: &[Faculty] = &[
    Faculty { name: "School of Engineering & Engineering Technology", abbreviation: "SEET" },
    Faculty { name: "School of Physical Sciences", abbreviation: "SOPS" },
    Faculty { name: "School of Biological Sciences", abbreviation: "SOBS" },
    Faculty { name: "School of Agriculture & Agricultural Technology", abbreviation: "SAAT" },
    Faculty { name: "School of Information & Communication Technology", abbreviation: "SICT" },
    Faculty { name: "School of Environmental Sciences", abbreviation: "SOES" },
    Faculty { name: "School of Logistics & Innovation Technology", abbreviation: "SLIT" },
    Faculty { name: "School of Health Technology", abbreviation: "SOHT" },
    Faculty { name: "School of Electrical Systems & Engineering Technology", abbreviation: "SESET" },
    Faculty { name: "School of Basic Medical Sciences", abbreviation: "SBMS" },
    Faculty { name: "College of Medicine", abbreviation: "COM" },
    Faculty { name: "Ce-Sustainable Procurement, Environmental & Social Standards", abbreviation: "CESPESS" },
];

/// All departments at FUTO.
pub const DEPARTMENTS: &[Department] = &[
    Department { name: "Petroleum Engineering", abbreviation: "PET", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Materials & Metallurgical Engineering", abbreviation: "MME", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Mechanical Engineering", abbreviation: "MEE", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Civil Engineering", abbreviation: "CIE", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Chemical Engineering", abbreviation: "CHE", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Food Science & Technology", abbreviation: "FST", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Polymer & Textile Engineering", abbreviation: "PTE", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Biomedical Engineering", abbreviation: "BME", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Agricultural and Bioresources Engineering", abbreviation: "ABE", faculty: "School of Engineering & Engineering Technology" },
    Department { name: "Mathematics", abbreviation: "MTH", faculty: "School of Physical Sciences" },
    Department { name: "Physics", abbreviation: "PHY", faculty: "School of Physical Sciences" },
    Department { name: "Chemistry", abbreviation: "CHM", faculty: "School of Physical Sciences" },
    Department { name: "Statistics", abbreviation: "STA", faculty: "School of Physical Sciences" },
    Department { name: "Science Laboratory Technology", abbreviation: "SLT", faculty: "School of Physical Sciences" },
    Department { name: "Biochemistry", abbreviation: "BCH", faculty: "School of Biological Sciences" },
    Department { name: "Microbiology", abbreviation: "MCB", faculty: "School of Biological Sciences" },
    Department { name: "Biotechnology", abbreviation: "BTC", faculty: "School of Biological Sciences" },
    Department { name: "Biology", abbreviation: "BIO", faculty: "School of Biological Sciences" },
    Department { name: "Forensic Science", abbreviation: "FRS", faculty: "School of Biological Sciences" },
    Department { name: "Crop Science and Technology", abbreviation: "CST", faculty: "School of Agriculture & Agricultural Technology" },
    Department { name: "Agricultural Economics", abbreviation: "AEC", faculty: "School of Agriculture & Agricultural Technology" },
    Department { name: "Agricultural Extension", abbreviation: "AEX", faculty: "School of Agriculture & Agricultural Technology" },
    Department { name: "Animal Science and Technology", abbreviation: "AST", faculty: "School of Agriculture & Agricultural Technology" },
    Department { name: "Fisheries and Aquaculture Technology", abbreviation: "FAT", faculty: "School of Agriculture & Agricultural Technology" },
    Department { name: "Forestry and Wildlife Technology", abbreviation: "FWT", faculty: "School of Agriculture & Agricultural Technology" },
    Department { name: "Soil Science and Technology", abbreviation: "SST", faculty: "School of Agriculture & Agricultural Technology" },
    Department { name: "Computer Science", abbreviation: "CSC", faculty: "School of Information & Communication Technology" },
    Department { name: "Software Engineering", abbreviation: "SOE", faculty: "School of Information & Communication Technology" },
    Department { name: "Cyber Security", abbreviation: "CYB", faculty: "School of Information & Communication Technology" },
    Department { name: "Information Technology", abbreviation: "IFT", faculty: "School of Information & Communication Technology" },
    Department { name: "Architecture", abbreviation: "ARC", faculty: "School of Environmental Sciences" },
    Department { name: "Building Technology", abbreviation: "BLD", faculty: "School of Environmental Sciences" },
    Department { name: "Environmental Management", abbreviation: "EVM", faculty: "School of Environmental Sciences" },
    Department { name: "Quantity Surveying", abbreviation: "QST", faculty: "School of Environmental Sciences" },
    Department { name: "Surveying and Geoinformatics", abbreviation: "SVG", faculty: "School of Environmental Sciences" },
    Department { name: "Urban and Regional Planning", abbreviation: "URP", faculty: "School of Environmental Sciences" },
    Department { name: "Estate Management and Evaluation", abbreviation: "ESV", faculty: "School of Environmental Sciences" },
    Department { name: "Logistics & Transport Technology", abbreviation: "LTT", faculty: "School of Logistics & Innovation Technology" },
    Department { name: "Entrepreneurship & Innovation", abbreviation: "ENI", faculty: "School of Logistics & Innovation Technology" },
    Department { name: "Maritime Technology and Logistics", abbreviation: "MST", faculty: "School of Logistics & Innovation Technology" },
    Department { name: "Supply Chain Management", abbreviation: "SCM", faculty: "School of Logistics & Innovation Technology" },
    Department { name: "Financial Innovation and Technology", abbreviation: "FIT", faculty: "School of Logistics & Innovation Technology" },
    Department { name: "Project Management Technology", abbreviation: "PMT", faculty: "School of Logistics & Innovation Technology" },
    Department { name: "Prosthetics and Orthotics", abbreviation: "POT", faculty: "School of Health Technology" },
    Department { name: "Environmental Health Science", abbreviation: "EHS", faculty: "School of Health Technology" },
    Department { name: "Optometry", abbreviation: "OPT", faculty: "School of Health Technology" },
    Department { name: "Public Health Technology", abbreviation: "PUH", faculty: "School of Health Technology" },
    Department { name: "Dental Technology", abbreviation: "DNT", faculty: "School of Health Technology" },
    Department { name: "Radiography", abbreviation: "RAD", faculty: "School of Health Technology" },
    Department { name: "Mechatronics Engineering", abbreviation: "MCE", faculty: "School of Electrical Systems & Engineering Technology" },
    Department { name: "Computer Engineering", abbreviation: "CPE", faculty: "School of Electrical Systems & Engineering Technology" },
    Department { name: "Electronics Engineering", abbreviation: "ELE", faculty: "School of Electrical Systems & Engineering Technology" },
    Department { name: "Telecommunications Engineering", abbreviation: "TCE", faculty: "School of Electrical Systems & Engineering Technology" },
    Department { name: "Electrical (Power Systems) Engineering", abbreviation: "EPE", faculty: "School of Electrical Systems & Engineering Technology" },
    Department { name: "Human Anatomy", abbreviation: "ANA", faculty: "School of Basic Medical Sciences" },
    Department { name: "Human Physiology", abbreviation: "PHS", faculty: "School of Basic Medical Sciences" },
    Department { name: "Medicine and Surgery (MBBS)", abbreviation: "MBBS", faculty: "College of Medicine" },
    Department { name: "Sustainable Social Development", abbreviation: "SSD", faculty: "Ce-Sustainable Procurement, Environmental & Social Standards" },
    Department { name: "Sustainable Environmental Studies", abbreviation: "SES", faculty: "Ce-Sustainable Procurement, Environmental & Social Standards" },
    Department { name: "Procurement Management", abbreviation: "PRM", faculty: "Ce-Sustainable Procurement, Environmental & Social Standards" },
];

// ── Functions ─────────────────────────────────────────────────────────────────

/// Returns the [`Faculty`] with the given name, or `None`.
pub fn get_faculty(name: &str) -> Option<&'static Faculty> {
    FACULTIES.iter().find(|f| f.name.eq_ignore_ascii_case(name))
}

/// Returns all [`Department`]s that belong to the given faculty name.
pub fn get_departments_by_faculty(faculty: &str) -> Vec<&'static Department> {
    DEPARTMENTS
        .iter()
        .filter(|d| d.faculty.eq_ignore_ascii_case(faculty))
        .collect()
}

/// Returns the faculty name for the given department name, or `None`.
pub fn get_faculty_by_department(department: &str) -> Option<&'static str> {
    DEPARTMENTS
        .iter()
        .find(|d| d.name.eq_ignore_ascii_case(department))
        .map(|d| d.faculty)
}

/// Returns the department abbreviation for the given full name, or `None`.
///
/// # Example
/// ```
/// let abbr = futo_departments::shorten_department("Computer Science");
/// assert_eq!(abbr, Some("CSC"));
/// ```
pub fn shorten_department(name: &str) -> Option<&'static str> {
    DEPARTMENTS
        .iter()
        .find(|d| d.name.eq_ignore_ascii_case(name))
        .map(|d| d.abbreviation)
}

/// Returns the department full name for the given abbreviation, or `None`.
pub fn expand_department(abbreviation: &str) -> Option<&'static str> {
    DEPARTMENTS
        .iter()
        .find(|d| d.abbreviation.eq_ignore_ascii_case(abbreviation))
        .map(|d| d.name)
}

/// Returns the faculty abbreviation for the given faculty name, or `None`.
pub fn shorten_faculty(name: &str) -> Option<&'static str> {
    FACULTIES
        .iter()
        .find(|f| f.name.eq_ignore_ascii_case(name))
        .map(|f| f.abbreviation)
}

/// Returns the faculty full name for the given abbreviation, or `None`.
pub fn expand_faculty(abbreviation: &str) -> Option<&'static str> {
    FACULTIES
        .iter()
        .find(|f| f.abbreviation.eq_ignore_ascii_case(abbreviation))
        .map(|f| f.name)
}

/// Returns `true` if the given string is a valid department name (case-insensitive).
pub fn is_valid_department(name: &str) -> bool {
    DEPARTMENTS.iter().any(|d| d.name.eq_ignore_ascii_case(name))
}

/// Returns `true` if the given string is a valid faculty name (case-insensitive).
pub fn is_valid_faculty(name: &str) -> bool {
    FACULTIES.iter().any(|f| f.name.eq_ignore_ascii_case(name))
}

/// Masks a FUTO registration number.
/// Keeps the first character and last three characters, replaces the middle with `*`.
///
/// # Example
/// ```
/// let masked = futo_departments::mask_reg_number("U2020/1234567CS");
/// assert_eq!(masked, "U***567CS");
/// ```
pub fn mask_reg_number(reg: &str) -> String {
    let chars: Vec<char> = reg.chars().collect();
    let n = chars.len();
    if n <= 4 {
        // Edge case: too short to meaningfully mask
        let first = chars[0];
        let rest: String = chars.iter().collect();
        return format!("{}{}", first, rest);
    }
    let first = chars[0];
    let last_three: String = chars[n - 3..].iter().collect();
    format!("{}***{}", first, last_three)
}
