package com.idikaeliada;

import java.util.*;

/**
 * FUTO (Federal University of Technology Owerri) faculties and departments data.
 * All methods are static — no instantiation needed.
 */
public final class FutoDepartments {

    private FutoDepartments() {}

    // ─── Faculties ────────────────────────────────────────────────────────────

    public static final List<String> FACULTIES = Collections.unmodifiableList(Arrays.asList(
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
        "Ce-Sustainable Procurement, Environmental & Social Standards"
    ));

    // ─── Departments ──────────────────────────────────────────────────────────

    public static final List<String> DEPARTMENTS = Collections.unmodifiableList(Arrays.asList(
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
        "Procurement Management"
    ));

    // ─── Faculty → Departments map ────────────────────────────────────────────

    public static final Map<String, List<String>> FACULTY_DEPARTMENTS;
    static {
        Map<String, List<String>> map = new LinkedHashMap<>();
        map.put("School of Engineering & Engineering Technology", Collections.unmodifiableList(Arrays.asList("Petroleum Engineering", "Materials & Metallurgical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Food Science & Technology", "Polymer & Textile Engineering", "Biomedical Engineering", "Agricultural and Bioresources Engineering")));
        map.put("School of Physical Sciences", Collections.unmodifiableList(Arrays.asList("Mathematics", "Physics", "Chemistry", "Statistics", "Science Laboratory Technology")));
        map.put("School of Biological Sciences", Collections.unmodifiableList(Arrays.asList("Biochemistry", "Microbiology", "Biotechnology", "Biology", "Forensic Science")));
        map.put("School of Agriculture & Agricultural Technology", Collections.unmodifiableList(Arrays.asList("Crop Science and Technology", "Agricultural Economics", "Agricultural Extension", "Animal Science and Technology", "Fisheries and Aquaculture Technology", "Forestry and Wildlife Technology", "Soil Science and Technology")));
        map.put("School of Information & Communication Technology", Collections.unmodifiableList(Arrays.asList("Computer Science", "Software Engineering", "Cyber Security", "Information Technology")));
        map.put("School of Environmental Sciences", Collections.unmodifiableList(Arrays.asList("Architecture", "Building Technology", "Environmental Management", "Quantity Surveying", "Surveying and Geoinformatics", "Urban and Regional Planning", "Estate Management and Evaluation")));
        map.put("School of Logistics & Innovation Technology", Collections.unmodifiableList(Arrays.asList("Logistics & Transport Technology", "Entrepreneurship & Innovation", "Maritime Technology and Logistics", "Supply Chain Management", "Financial Innovation and Technology", "Project Management Technology")));
        map.put("School of Health Technology", Collections.unmodifiableList(Arrays.asList("Prosthetics and Orthotics", "Environmental Health Science", "Optometry", "Public Health Technology", "Dental Technology", "Radiography")));
        map.put("School of Electrical Systems & Engineering Technology", Collections.unmodifiableList(Arrays.asList("Mechatronics Engineering", "Computer Engineering", "Electronics Engineering", "Telecommunications Engineering", "Electrical (Power Systems) Engineering")));
        map.put("School of Basic Medical Sciences", Collections.unmodifiableList(Arrays.asList("Human Anatomy", "Human Physiology")));
        map.put("College of Medicine", Collections.unmodifiableList(Arrays.asList("Medicine and Surgery (MBBS)")));
        map.put("Ce-Sustainable Procurement, Environmental & Social Standards", Collections.unmodifiableList(Arrays.asList("Sustainable Social Development", "Sustainable Environmental Studies", "Procurement Management")));
        FACULTY_DEPARTMENTS = Collections.unmodifiableMap(map);
    }

    // ─── Department abbreviations ─────────────────────────────────────────────

    public static final Map<String, String> DEPARTMENT_ABBREVIATIONS;
    static {
        Map<String, String> map = new LinkedHashMap<>();
        map.put("Petroleum Engineering", "PET");
        map.put("Materials & Metallurgical Engineering", "MME");
        map.put("Mechanical Engineering", "MEE");
        map.put("Civil Engineering", "CIE");
        map.put("Chemical Engineering", "CHE");
        map.put("Food Science & Technology", "FST");
        map.put("Polymer & Textile Engineering", "PTE");
        map.put("Biomedical Engineering", "BME");
        map.put("Agricultural and Bioresources Engineering", "ABE");
        map.put("Mathematics", "MTH");
        map.put("Physics", "PHY");
        map.put("Chemistry", "CHM");
        map.put("Statistics", "STA");
        map.put("Science Laboratory Technology", "SLT");
        map.put("Biochemistry", "BCH");
        map.put("Microbiology", "MCB");
        map.put("Biotechnology", "BTC");
        map.put("Biology", "BIO");
        map.put("Forensic Science", "FRS");
        map.put("Crop Science and Technology", "CST");
        map.put("Agricultural Economics", "AEC");
        map.put("Agricultural Extension", "AEX");
        map.put("Animal Science and Technology", "AST");
        map.put("Fisheries and Aquaculture Technology", "FAT");
        map.put("Forestry and Wildlife Technology", "FWT");
        map.put("Soil Science and Technology", "SST");
        map.put("Computer Science", "CSC");
        map.put("Software Engineering", "SOE");
        map.put("Cyber Security", "CYB");
        map.put("Information Technology", "IFT");
        map.put("Architecture", "ARC");
        map.put("Building Technology", "BLD");
        map.put("Environmental Management", "EVM");
        map.put("Quantity Surveying", "QST");
        map.put("Surveying and Geoinformatics", "SVG");
        map.put("Urban and Regional Planning", "URP");
        map.put("Estate Management and Evaluation", "ESV");
        map.put("Logistics & Transport Technology", "LTT");
        map.put("Entrepreneurship & Innovation", "ENI");
        map.put("Maritime Technology and Logistics", "MST");
        map.put("Supply Chain Management", "SCM");
        map.put("Financial Innovation and Technology", "FIT");
        map.put("Project Management Technology", "PMT");
        map.put("Prosthetics and Orthotics", "POT");
        map.put("Environmental Health Science", "EHS");
        map.put("Optometry", "OPT");
        map.put("Public Health Technology", "PUH");
        map.put("Dental Technology", "DNT");
        map.put("Radiography", "RAD");
        map.put("Mechatronics Engineering", "MCE");
        map.put("Computer Engineering", "CPE");
        map.put("Electronics Engineering", "ELE");
        map.put("Telecommunications Engineering", "TCE");
        map.put("Electrical (Power Systems) Engineering", "EPE");
        map.put("Human Anatomy", "ANA");
        map.put("Human Physiology", "PHS");
        map.put("Medicine and Surgery (MBBS)", "MBBS");
        map.put("Sustainable Social Development", "SSD");
        map.put("Sustainable Environmental Studies", "SES");
        map.put("Procurement Management", "PRM");
        DEPARTMENT_ABBREVIATIONS = Collections.unmodifiableMap(map);
    }

    // ─── Faculty abbreviations ────────────────────────────────────────────────

    public static final Map<String, String> FACULTY_ABBREVIATIONS;
    static {
        Map<String, String> map = new LinkedHashMap<>();
        map.put("School of Engineering & Engineering Technology", "SEET");
        map.put("School of Physical Sciences", "SOPS");
        map.put("School of Biological Sciences", "SOBS");
        map.put("School of Agriculture & Agricultural Technology", "SAAT");
        map.put("School of Information & Communication Technology", "SICT");
        map.put("School of Environmental Sciences", "SOES");
        map.put("School of Logistics & Innovation Technology", "SLIT");
        map.put("School of Health Technology", "SOHT");
        map.put("School of Electrical Systems & Engineering Technology", "SESET");
        map.put("School of Basic Medical Sciences", "SBMS");
        map.put("College of Medicine", "COM");
        map.put("Ce-Sustainable Procurement, Environmental & Social Standards", "CESPESS");
        FACULTY_ABBREVIATIONS = Collections.unmodifiableMap(map);
    }

    // ─── Abbreviation helpers ─────────────────────────────────────────────────

    /** Returns the abbreviation for a department, or null if not found. */
    public static String getDepartmentAbbreviation(String department) {
        return DEPARTMENT_ABBREVIATIONS.get(department);
    }

    /** Returns the abbreviation for a faculty, or null if not found. */
    public static String getFacultyAbbreviation(String faculty) {
        return FACULTY_ABBREVIATIONS.get(faculty);
    }

    /** Returns all departments with their abbreviations. Useful for dropdowns. */
    public static List<Map<String, String>> listDepartmentsWithAbbreviations() {
        List<Map<String, String>> result = new ArrayList<>();
        for (String name : DEPARTMENTS) {
            Map<String, String> entry = new LinkedHashMap<>();
            entry.put("name", name);
            entry.put("abbreviation", DEPARTMENT_ABBREVIATIONS.get(name));
            result.add(Collections.unmodifiableMap(entry));
        }
        return Collections.unmodifiableList(result);
    }

    /** Returns all faculties with their abbreviations. Useful for dropdowns. */
    public static List<Map<String, String>> listFacultiesWithAbbreviations() {
        List<Map<String, String>> result = new ArrayList<>();
        for (String name : FACULTIES) {
            Map<String, String> entry = new LinkedHashMap<>();
            entry.put("name", name);
            entry.put("abbreviation", FACULTY_ABBREVIATIONS.get(name));
            result.add(Collections.unmodifiableMap(entry));
        }
        return Collections.unmodifiableList(result);
    }

    /** Finds a department by its abbreviation code (case-insensitive). */
    public static String getDepartmentByAbbreviation(String abbreviation) {
        if (abbreviation == null) return null;
        String upper = abbreviation.toUpperCase();
        for (Map.Entry<String, String> entry : DEPARTMENT_ABBREVIATIONS.entrySet()) {
            if (entry.getValue().equals(upper)) return entry.getKey();
        }
        return null;
    }

    /** Finds a faculty by its abbreviation code (case-insensitive). */
    public static String getFacultyByAbbreviation(String abbreviation) {
        if (abbreviation == null) return null;
        String upper = abbreviation.toUpperCase();
        for (Map.Entry<String, String> entry : FACULTY_ABBREVIATIONS.entrySet()) {
            if (entry.getValue().equals(upper)) return entry.getKey();
        }
        return null;
    }

    // ─── Formatter functions ──────────────────────────────────────────────────

    /**
     * Returns the official abbreviation for a department.
     * Falls back to a generated abbreviation for unknown departments.
     */
    public static String shortenDepartment(String department) {
        if (department == null) return "";
        if (DEPARTMENT_ABBREVIATIONS.containsKey(department)) {
            return DEPARTMENT_ABBREVIATIONS.get(department);
        }
        String trimmed = department.trim();
        if (trimmed.isEmpty()) return "";
        String[] words = trimmed.split("\\s+");
        List<String> mainWords = new ArrayList<>();
        for (String w : words) {
            if (!w.equalsIgnoreCase("of") && !w.equals("&")) mainWords.add(w);
        }
        List<String> filtered;
        if (mainWords.size() >= 4) {
            filtered = mainWords;
        } else {
            filtered = new ArrayList<>();
            for (String w : words) { if (!w.equals("&")) filtered.add(w); }
        }
        if (filtered.isEmpty()) return "";
        if (filtered.size() == 1) return filtered.get(0).substring(0, 1).toUpperCase();
        if (filtered.size() == 2) {
            String a = filtered.get(0), b = filtered.get(1);
            return (a.charAt(0) + (a.length() > 1 ? String.valueOf(a.charAt(1)) : "") + b.charAt(0)).toUpperCase();
        }
        StringBuilder sb = new StringBuilder();
        for (String w : filtered) sb.append(Character.toUpperCase(w.charAt(0)));
        return sb.toString();
    }

    /**
     * Returns the official abbreviation for a faculty.
     * Falls back to a generated abbreviation for unknown faculties.
     */
    public static String shortenFaculty(String faculty) {
        if (faculty == null) return "";
        if (FACULTY_ABBREVIATIONS.containsKey(faculty)) {
            return FACULTY_ABBREVIATIONS.get(faculty);
        }
        String[] words = faculty.split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (String w : words) {
            if (!w.equalsIgnoreCase("of") && !w.equals("&")) {
                sb.append(Character.toUpperCase(w.charAt(0)));
            }
        }
        return sb.toString();
    }

    /**
     * Formats a full name: first two names in full, third as initial, rest discarded.
     * Example: formatName("John Michael Doe Extra") returns "John Michael D."
     */
    public static String formatName(String name) {
        if (name == null) return "";
        String trimmed = name.trim();
        if (trimmed.isEmpty()) return "";
        String[] words = trimmed.split("\\s+");
        if (words.length == 1) return words[0];
        if (words.length == 2) return words[0] + " " + words[1];
        return words[0] + " " + words[1] + " " + Character.toUpperCase(words[2].charAt(0)) + ".";
    }

    /**
     * Masks a registration number, keeping the first character and last 3 visible.
     * Example: maskRegNumber("F/HD/22/0012345") returns "F***********345"
     */
    public static String maskRegNumber(String regNumber) {
        return maskRegNumber(regNumber, '*');
    }

    public static String maskRegNumber(String regNumber, char mask) {
        if (regNumber == null) return "";
        String trimmed = regNumber.trim();
        if (trimmed.isEmpty()) return "";
        int maskedLength = Math.max(0, trimmed.length() - 4);
        return trimmed.charAt(0)
            + String.valueOf(mask).repeat(maskedLength)
            + trimmed.substring(trimmed.length() - 3);
    }

    // ─── Lookup helpers ───────────────────────────────────────────────────────

    /** Returns the departments for a given faculty. Falls back to all departments if not found. */
    public static List<String> getDepartmentsByFaculty(String faculty) {
        return FACULTY_DEPARTMENTS.getOrDefault(faculty, DEPARTMENTS);
    }

    /** Returns the faculty a department belongs to, or null if not found. */
    public static String getFacultyByDepartment(String department) {
        for (Map.Entry<String, List<String>> entry : FACULTY_DEPARTMENTS.entrySet()) {
            if (entry.getValue().contains(department)) return entry.getKey();
        }
        return null;
    }

    /** Returns true if the given string is a valid department name. */
    public static boolean isValidDepartment(String value) {
        return DEPARTMENTS.contains(value);
    }

    /** Returns true if the given string is a valid faculty name. */
    public static boolean isValidFaculty(String value) {
        return FACULTIES.contains(value);
    }
}