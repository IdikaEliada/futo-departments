<?php

declare(strict_types=1);

namespace Idikaeliada\FutoDepartments;

final class FutoDepartments
{
    // ─── Faculties ──────────────────────────────────────────────────────────

    public const FACULTIES = [
        'School of Engineering & Engineering Technology',
        'School of Physical Sciences',
        'School of Biological Sciences',
        'School of Agriculture & Agricultural Technology',
        'School of Information & Communication Technology',
        'School of Environmental Sciences',
        'School of Logistics & Innovation Technology',
        'School of Health Technology',
        'School of Electrical Systems & Engineering Technology',
        'School of Basic Medical Sciences',
        'College of Medicine',
        'Ce-Sustainable Procurement, Environmental & Social Standards',
    ];

    // ─── Departments ─────────────────────────────────────────────────────────

    public const DEPARTMENTS = [
        'Petroleum Engineering',
        'Materials & Metallurgical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Chemical Engineering',
        'Food Science & Technology',
        'Polymer & Textile Engineering',
        'Biomedical Engineering',
        'Agricultural and Bioresources Engineering',
        'Mathematics',
        'Physics',
        'Chemistry',
        'Statistics',
        'Science Laboratory Technology',
        'Biochemistry',
        'Microbiology',
        'Biotechnology',
        'Biology',
        'Forensic Science',
        'Crop Science and Technology',
        'Agricultural Economics',
        'Agricultural Extension',
        'Animal Science and Technology',
        'Fisheries and Aquaculture Technology',
        'Forestry and Wildlife Technology',
        'Soil Science and Technology',
        'Computer Science',
        'Software Engineering',
        'Cyber Security',
        'Information Technology',
        'Architecture',
        'Building Technology',
        'Environmental Management',
        'Quantity Surveying',
        'Surveying and Geoinformatics',
        'Urban and Regional Planning',
        'Estate Management and Evaluation',
        'Logistics & Transport Technology',
        'Entrepreneurship & Innovation',
        'Maritime Technology and Logistics',
        'Supply Chain Management',
        'Financial Innovation and Technology',
        'Project Management Technology',
        'Prosthetics and Orthotics',
        'Environmental Health Science',
        'Optometry',
        'Public Health Technology',
        'Dental Technology',
        'Radiography',
        'Mechatronics Engineering',
        'Computer Engineering',
        'Electronics Engineering',
        'Telecommunications Engineering',
        'Electrical (Power Systems) Engineering',
        'Human Anatomy',
        'Human Physiology',
        'Medicine and Surgery (MBBS)',
        'Sustainable Social Development',
        'Sustainable Environmental Studies',
        'Procurement Management',
    ];

    // ─── Faculty → Departments map ─────────────────────────────────────────

    public const FACULTY_DEPARTMENTS = [
        'School of Engineering & Engineering Technology' => [
            'Petroleum Engineering',
            'Materials & Metallurgical Engineering',
            'Mechanical Engineering',
            'Civil Engineering',
            'Chemical Engineering',
            'Food Science & Technology',
            'Polymer & Textile Engineering',
            'Biomedical Engineering',
            'Agricultural and Bioresources Engineering',
        ],
        'School of Physical Sciences' => [
            'Mathematics',
            'Physics',
            'Chemistry',
            'Statistics',
            'Science Laboratory Technology',
        ],
        'School of Biological Sciences' => [
            'Biochemistry',
            'Microbiology',
            'Biotechnology',
            'Biology',
            'Forensic Science',
        ],
        'School of Agriculture & Agricultural Technology' => [
            'Crop Science and Technology',
            'Agricultural Economics',
            'Agricultural Extension',
            'Animal Science and Technology',
            'Fisheries and Aquaculture Technology',
            'Forestry and Wildlife Technology',
            'Soil Science and Technology',
        ],
        'School of Information & Communication Technology' => [
            'Computer Science',
            'Software Engineering',
            'Cyber Security',
            'Information Technology',
        ],
        'School of Environmental Sciences' => [
            'Architecture',
            'Building Technology',
            'Environmental Management',
            'Quantity Surveying',
            'Surveying and Geoinformatics',
            'Urban and Regional Planning',
            'Estate Management and Evaluation',
        ],
        'School of Logistics & Innovation Technology' => [
            'Logistics & Transport Technology',
            'Entrepreneurship & Innovation',
            'Maritime Technology and Logistics',
            'Supply Chain Management',
            'Financial Innovation and Technology',
            'Project Management Technology',
        ],
        'School of Health Technology' => [
            'Prosthetics and Orthotics',
            'Environmental Health Science',
            'Optometry',
            'Public Health Technology',
            'Dental Technology',
            'Radiography',
        ],
        'School of Electrical Systems & Engineering Technology' => [
            'Mechatronics Engineering',
            'Computer Engineering',
            'Electronics Engineering',
            'Telecommunications Engineering',
            'Electrical (Power Systems) Engineering',
        ],
        'School of Basic Medical Sciences' => [
            'Human Anatomy',
            'Human Physiology',
        ],
        'College of Medicine' => [
            'Medicine and Surgery (MBBS)',
        ],
        'Ce-Sustainable Procurement, Environmental & Social Standards' => [
            'Sustainable Social Development',
            'Sustainable Environmental Studies',
            'Procurement Management',
        ],
    ];

    // ─── Department abbreviations ────────────────────────────────────────────

    public const DEPARTMENT_ABBREVIATIONS = [
        'Petroleum Engineering' => 'PET',
        'Materials & Metallurgical Engineering' => 'MME',
        'Mechanical Engineering' => 'MEE',
        'Civil Engineering' => 'CIE',
        'Chemical Engineering' => 'CHE',
        'Food Science & Technology' => 'FST',
        'Polymer & Textile Engineering' => 'PTE',
        'Biomedical Engineering' => 'BME',
        'Agricultural and Bioresources Engineering' => 'ABE',
        'Mathematics' => 'MTH',
        'Physics' => 'PHY',
        'Chemistry' => 'CHM',
        'Statistics' => 'STA',
        'Science Laboratory Technology' => 'SLT',
        'Biochemistry' => 'BCH',
        'Microbiology' => 'MCB',
        'Biotechnology' => 'BTC',
        'Biology' => 'BIO',
        'Forensic Science' => 'FRS',
        'Crop Science and Technology' => 'CST',
        'Agricultural Economics' => 'AEC',
        'Agricultural Extension' => 'AEX',
        'Animal Science and Technology' => 'AST',
        'Fisheries and Aquaculture Technology' => 'FAT',
        'Forestry and Wildlife Technology' => 'FWT',
        'Soil Science and Technology' => 'SST',
        'Computer Science' => 'CSC',
        'Software Engineering' => 'SOE',
        'Cyber Security' => 'CYB',
        'Information Technology' => 'IFT',
        'Architecture' => 'ARC',
        'Building Technology' => 'BLD',
        'Environmental Management' => 'EVM',
        'Quantity Surveying' => 'QST',
        'Surveying and Geoinformatics' => 'SVG',
        'Urban and Regional Planning' => 'URP',
        'Estate Management and Evaluation' => 'ESV',
        'Logistics & Transport Technology' => 'LTT',
        'Entrepreneurship & Innovation' => 'ENI',
        'Maritime Technology and Logistics' => 'MST',
        'Supply Chain Management' => 'SCM',
        'Financial Innovation and Technology' => 'FIT',
        'Project Management Technology' => 'PMT',
        'Prosthetics and Orthotics' => 'POT',
        'Environmental Health Science' => 'EHS',
        'Optometry' => 'OPT',
        'Public Health Technology' => 'PUH',
        'Dental Technology' => 'DNT',
        'Radiography' => 'RAD',
        'Mechatronics Engineering' => 'MCE',
        'Computer Engineering' => 'CPE',
        'Electronics Engineering' => 'ELE',
        'Telecommunications Engineering' => 'TCE',
        'Electrical (Power Systems) Engineering' => 'EPE',
        'Human Anatomy' => 'ANA',
        'Human Physiology' => 'PHS',
        'Medicine and Surgery (MBBS)' => 'MBBS',
        'Sustainable Social Development' => 'SSD',
        'Sustainable Environmental Studies' => 'SES',
        'Procurement Management' => 'PRM',
    ];

    // ─── Faculty abbreviations ───────────────────────────────────────────────

    public const FACULTY_ABBREVIATIONS = [
        'School of Engineering & Engineering Technology' => 'SEET',
        'School of Physical Sciences' => 'SOPS',
        'School of Biological Sciences' => 'SOBS',
        'School of Agriculture & Agricultural Technology' => 'SAAT',
        'School of Information & Communication Technology' => 'SICT',
        'School of Environmental Sciences' => 'SOES',
        'School of Logistics & Innovation Technology' => 'SLIT',
        'School of Health Technology' => 'SOHT',
        'School of Electrical Systems & Engineering Technology' => 'SESET',
        'School of Basic Medical Sciences' => 'SBMS',
        'College of Medicine' => 'COM',
        'Ce-Sustainable Procurement, Environmental & Social Standards' => 'CESPESS',
    ];

    // ─── Abbreviation helpers ────────────────────────────────────────────────

    /** Returns the abbreviation for a department, or null if not found. */
    public static function getDepartmentAbbreviation(string $department): ?string
    {
        return self::DEPARTMENT_ABBREVIATIONS[$department] ?? null;
    }

    /** Returns the abbreviation for a faculty, or null if not found. */
    public static function getFacultyAbbreviation(string $faculty): ?string
    {
        return self::FACULTY_ABBREVIATIONS[$faculty] ?? null;
    }

    /** Returns all departments with their abbreviations. Useful for dropdowns. */
    public static function listDepartmentsWithAbbreviations(): array
    {
        return array_map(
            fn(string $name) => ['name' => $name, 'abbreviation' => self::DEPARTMENT_ABBREVIATIONS[$name]],
            self::DEPARTMENTS
        );
    }

    /** Returns all faculties with their abbreviations. Useful for dropdowns. */
    public static function listFacultiesWithAbbreviations(): array
    {
        return array_map(
            fn(string $name) => ['name' => $name, 'abbreviation' => self::FACULTY_ABBREVIATIONS[$name]],
            self::FACULTIES
        );
    }

    /** Finds a department by its abbreviation code (case-insensitive). */
    public static function getDepartmentByAbbreviation(string $abbreviation): ?string
    {
        $upper = strtoupper($abbreviation);
        $key = array_search($upper, self::DEPARTMENT_ABBREVIATIONS, true);
        return $key !== false ? $key : null;
    }

    /** Finds a faculty by its abbreviation code (case-insensitive). */
    public static function getFacultyByAbbreviation(string $abbreviation): ?string
    {
        $upper = strtoupper($abbreviation);
        $key = array_search($upper, self::FACULTY_ABBREVIATIONS, true);
        return $key !== false ? $key : null;
    }

    // ─── Formatter functions ─────────────────────────────────────────────────

    /**
     * Returns the official abbreviation for a department.
     * Falls back to a generated abbreviation for unknown departments.
     */
    public static function shortenDepartment(string $department): string
    {
        if (isset(self::DEPARTMENT_ABBREVIATIONS[$department])) {
            return self::DEPARTMENT_ABBREVIATIONS[$department];
        }
        $trimmed = trim($department);
        if ($trimmed === '') return '';
        $words = preg_split('/\s+/', $trimmed);
        $mainWords = array_values(array_filter($words, fn($w) => strtolower($w) !== 'of' && $w !== '&'));
        $filtered = count($mainWords) >= 4
            ? $mainWords
            : array_values(array_filter($words, fn($w) => $w !== '&'));
        if (count($filtered) === 1) return strtoupper(substr($filtered[0], 0, 1));
        if (count($filtered) === 2) {
            [$a, $b] = $filtered;
            return strtoupper($a[0] . (strlen($a) > 1 ? $a[1] : '') . $b[0]);
        }
        return implode('', array_map(fn($w) => strtoupper($w[0]), $filtered));
    }

    /**
     * Returns the official abbreviation for a faculty.
     * Falls back to a generated abbreviation for unknown faculties.
     */
    public static function shortenFaculty(string $faculty): string
    {
        if (isset(self::FACULTY_ABBREVIATIONS[$faculty])) {
            return self::FACULTY_ABBREVIATIONS[$faculty];
        }
        $words = preg_split('/\s+/', $faculty);
        $filtered = array_values(array_filter($words, fn($w) => strtolower($w) !== 'of' && $w !== '&'));
        return implode('', array_map(fn($w) => strtoupper($w[0]), $filtered));
    }

    /**
     * Formats a full name: first two names in full, third as initial, rest discarded.
     * @example FutoDepartments::formatName('John Michael Doe Extra') // 'John Michael D.'
     */
    public static function formatName(string $name): string
    {
        $trimmed = trim($name);
        if ($trimmed === '') return '';
        $words = preg_split('/\s+/', $trimmed);
        if (count($words) === 1) return $words[0];
        if (count($words) === 2) return "{$words[0]} {$words[1]}";
        return "{$words[0]} {$words[1]} " . strtoupper($words[2][0]) . '.';
    }

    /**
     * Masks a registration number, keeping the first character and last 3 visible.
     * @example FutoDepartments::maskRegNumber('F/HD/22/0012345') // 'F***********345'
     */
    public static function maskRegNumber(string $regNumber, string $mask = '*'): string
    {
        $trimmed = trim($regNumber);
        if ($trimmed === '') return '';
        $maskedLength = max(0, strlen($trimmed) - 4);
        return $trimmed[0] . str_repeat($mask, $maskedLength) . substr($trimmed, -3);
    }

    // ─── Lookup helpers ──────────────────────────────────────────────────────

    /** Returns the departments for a given faculty. Falls back to all departments if not found. */
    public static function getDepartmentsByFaculty(string $faculty): array
    {
        return self::FACULTY_DEPARTMENTS[$faculty] ?? self::DEPARTMENTS;
    }

    /** Returns the faculty a department belongs to, or null if not found. */
    public static function getFacultyByDepartment(string $department): ?string
    {
        foreach (self::FACULTY_DEPARTMENTS as $faculty => $depts) {
            if (in_array($department, $depts, true)) return $faculty;
        }
        return null;
    }

    /** Returns true if the given string is a valid department name. */
    public static function isValidDepartment(string $value): bool
    {
        return in_array($value, self::DEPARTMENTS, true);
    }

    /** Returns true if the given string is a valid faculty name. */
    public static function isValidFaculty(string $value): bool
    {
        return in_array($value, self::FACULTIES, true);
    }
}
