# futo-departments (PHP)

PHP package for FUTO (Federal University of Technology Owerri) faculties and departments — with helper utilities, abbreviation maps, and full type safety via PHP 8 static methods.

## Installation

```bash
composer require idikaeliada/futo-departments
```

## Usage

```php
use Idikaeliada\FutoDepartments\FutoDepartments;

// Raw data
FutoDepartments::FACULTIES;     // array of 12 faculty names
FutoDepartments::DEPARTMENTS;   // array of 60 department names

// Lookups
FutoDepartments::getDepartmentsByFaculty('School of Information & Communication Technology');
// ['Computer Science', 'Software Engineering', 'Cyber Security', 'Information Technology']

FutoDepartments::getFacultyByDepartment('Computer Science');
// 'School of Information & Communication Technology'

// Abbreviations
FutoDepartments::getDepartmentAbbreviation('Computer Science');  // 'CSC'
FutoDepartments::shortenDepartment('Software Engineering');      // 'SOE'
FutoDepartments::shortenFaculty('College of Medicine');          // 'COM'

// Reverse lookup (case-insensitive)
FutoDepartments::getDepartmentByAbbreviation('CSC');   // 'Computer Science'
FutoDepartments::getDepartmentByAbbreviation('csc');   // 'Computer Science'
FutoDepartments::getFacultyByAbbreviation('COM');      // 'College of Medicine'

// Formatters
FutoDepartments::formatName('John Michael Doe Extra'); // 'John Michael D.'
FutoDepartments::maskRegNumber('F/HD/22/0012345');     // 'F***********345'

// Validation
FutoDepartments::isValidDepartment('Computer Science'); // true
FutoDepartments::isValidFaculty('School of Medicine');  // false

// Dropdown lists
FutoDepartments::listDepartmentsWithAbbreviations();
// [['name' => 'Computer Science', 'abbreviation' => 'CSC'], ...]
```

## API

All method names use `camelCase` matching the JS package 1:1.

| PHP | JavaScript |
|---|---|
| `getDepartmentsByFaculty()` | `getDepartmentsByFaculty()` |
| `getFacultyByDepartment()` | `getFacultyByDepartment()` |
| `getDepartmentAbbreviation()` | `getDepartmentAbbreviation()` |
| `getFacultyAbbreviation()` | `getFacultyAbbreviation()` |
| `getDepartmentByAbbreviation()` | `getDepartmentByAbbreviation()` |
| `getFacultyByAbbreviation()` | `getFacultyByAbbreviation()` |
| `listDepartmentsWithAbbreviations()` | `listDepartmentsWithAbbreviations()` |
| `listFacultiesWithAbbreviations()` | `listFacultiesWithAbbreviations()` |
| `shortenDepartment()` | `shortenDepartment()` |
| `shortenFaculty()` | `shortenFaculty()` |
| `formatName()` | `formatName()` |
| `maskRegNumber()` | `maskRegNumber()` |
| `isValidDepartment()` | `isValidDepartment()` |
| `isValidFaculty()` | `isValidFaculty()` |
| `FACULTIES` | `faculties` |
| `DEPARTMENTS` | `departments` |
| `FACULTY_DEPARTMENTS` | `facultyDepartments` |
| `DEPARTMENT_ABBREVIATIONS` | `departmentAbbreviations` |
| `FACULTY_ABBREVIATIONS` | `facultyAbbreviations` |

## Requirements

- PHP >= 8.0

## Running tests

```bash
composer install
./vendor/bin/phpunit tests/
```

## License

MIT 