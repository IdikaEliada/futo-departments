<?php

declare(strict_types=1);

namespace Idikaeliada\FutoDepartments\Tests;

use Idikaeliada\FutoDepartments\FutoDepartments;
use PHPUnit\Framework\TestCase;

class FutoDepartmentsTest extends TestCase
{
    // ─── Data integrity ───────────────────────────────────────────────────────

    public function testHas12Faculties(): void
    {
        $this->assertCount(12, FutoDepartments::FACULTIES);
    }

    public function testEveryFacultyInMapExistsInFacultiesList(): void
    {
        foreach (array_keys(FutoDepartments::FACULTY_DEPARTMENTS) as $faculty) {
            $this->assertContains($faculty, FutoDepartments::FACULTIES);
        }
    }

    public function testEveryDeptInMapExistsInDepartmentsList(): void
    {
        foreach (FutoDepartments::FACULTY_DEPARTMENTS as $depts) {
            foreach ($depts as $dept) {
                $this->assertContains($dept, FutoDepartments::DEPARTMENTS);
            }
        }
    }

    public function testEveryDeptBelongsToExactlyOneFaculty(): void
    {
        $seen = [];
        foreach (FutoDepartments::FACULTY_DEPARTMENTS as $faculty => $depts) {
            foreach ($depts as $dept) {
                $this->assertArrayNotHasKey($dept, $seen, "\"$dept\" appears in multiple faculties");
                $seen[$dept] = $faculty;
            }
        }
        $this->assertCount(count(FutoDepartments::DEPARTMENTS), $seen);
    }

    public function testDepartmentAbbreviationsCoversEveryDepartment(): void
    {
        foreach (FutoDepartments::DEPARTMENTS as $dept) {
            $this->assertArrayHasKey($dept, FutoDepartments::DEPARTMENT_ABBREVIATIONS);
        }
    }

    public function testDepartmentAbbreviationsNoDuplicates(): void
    {
        $codes = array_values(FutoDepartments::DEPARTMENT_ABBREVIATIONS);
        $this->assertCount(count($codes), array_unique($codes));
    }

    public function testFacultyAbbreviationsCoversEveryFaculty(): void
    {
        foreach (FutoDepartments::FACULTIES as $faculty) {
            $this->assertArrayHasKey($faculty, FutoDepartments::FACULTY_ABBREVIATIONS);
        }
    }

    public function testFacultyAbbreviationsNoDuplicates(): void
    {
        $codes = array_values(FutoDepartments::FACULTY_ABBREVIATIONS);
        $this->assertCount(count($codes), array_unique($codes));
    }

    // ─── shortenDepartment ────────────────────────────────────────────────────

    public function testShortenDepartmentKnown(): void
    {
        $this->assertSame('CSC',  FutoDepartments::shortenDepartment('Computer Science'));
        $this->assertSame('SOE',  FutoDepartments::shortenDepartment('Software Engineering'));
        $this->assertSame('MBBS', FutoDepartments::shortenDepartment('Medicine and Surgery (MBBS)'));
        $this->assertSame('EPE',  FutoDepartments::shortenDepartment('Electrical (Power Systems) Engineering'));
        $this->assertSame('PET',  FutoDepartments::shortenDepartment('Petroleum Engineering'));
    }

    public function testShortenDepartmentEmptyInput(): void
    {
        $this->assertSame('', FutoDepartments::shortenDepartment(''));
        $this->assertSame('', FutoDepartments::shortenDepartment('   '));
    }

    public function testShortenDepartmentFallback(): void
    {
        $result = FutoDepartments::shortenDepartment('Unknown Random Department');
        $this->assertNotEmpty($result);
    }

    // ─── shortenFaculty ───────────────────────────────────────────────────────

    public function testShortenFacultyKnown(): void
    {
        $this->assertSame('COM',     FutoDepartments::shortenFaculty('College of Medicine'));
        $this->assertSame('SOPS',    FutoDepartments::shortenFaculty('School of Physical Sciences'));
        $this->assertSame('CESPESS', FutoDepartments::shortenFaculty('Ce-Sustainable Procurement, Environmental & Social Standards'));
        $this->assertSame('SICT',    FutoDepartments::shortenFaculty('School of Information & Communication Technology'));
        $this->assertSame('SESET',   FutoDepartments::shortenFaculty('School of Electrical Systems & Engineering Technology'));
    }

    public function testShortenFacultyFallback(): void
    {
        $this->assertSame('FUS', FutoDepartments::shortenFaculty('Faculty of Unknown Studies'));
    }

    // ─── formatName ──────────────────────────────────────────────────────────

    public function testFormatNameSingleName(): void
    {
        $this->assertSame('John', FutoDepartments::formatName('John'));
    }

    public function testFormatNameTwoNames(): void
    {
        $this->assertSame('John Doe', FutoDepartments::formatName('John Doe'));
    }

    public function testFormatNameAbbreviatesThird(): void
    {
        $this->assertSame('John Michael D.', FutoDepartments::formatName('John Michael Doe'));
        $this->assertSame('John Michael D.', FutoDepartments::formatName('John Michael Doe Extra'));
    }

    public function testFormatNameEmptyInput(): void
    {
        $this->assertSame('', FutoDepartments::formatName(''));
        $this->assertSame('', FutoDepartments::formatName('   '));
    }

    // ─── maskRegNumber ────────────────────────────────────────────────────────

    public function testMaskRegNumberDefault(): void
    {
        $this->assertSame('F***********345', FutoDepartments::maskRegNumber('F/HD/22/0012345'));
    }

    public function testMaskRegNumberCustomChar(): void
    {
        $this->assertSame('F###########345', FutoDepartments::maskRegNumber('F/HD/22/0012345', '#'));
    }

    public function testMaskRegNumberShortString(): void
    {
        $this->assertSame('ABCD', FutoDepartments::maskRegNumber('ABCD'));
    }

    public function testMaskRegNumberEmptyInput(): void
    {
        $this->assertSame('', FutoDepartments::maskRegNumber(''));
        $this->assertSame('', FutoDepartments::maskRegNumber('   '));
    }

    // ─── getDepartmentsByFaculty ──────────────────────────────────────────────

    public function testGetDepartmentsByFacultyValid(): void
    {
        $result = FutoDepartments::getDepartmentsByFaculty('School of Information & Communication Technology');
        $this->assertContains('Computer Science', $result);
        $this->assertContains('Software Engineering', $result);
        $this->assertContains('Cyber Security', $result);
        $this->assertContains('Information Technology', $result);
        $this->assertCount(4, $result);
    }

    public function testGetDepartmentsByFacultyFallback(): void
    {
        $result = FutoDepartments::getDepartmentsByFaculty('School of Unknown');
        $this->assertSame(FutoDepartments::DEPARTMENTS, $result);
    }

    public function testCollegeOfMedicineOneDept(): void
    {
        $result = FutoDepartments::getDepartmentsByFaculty('College of Medicine');
        $this->assertSame(['Medicine and Surgery (MBBS)'], $result);
    }

    // ─── getFacultyByDepartment ───────────────────────────────────────────────

    public function testGetFacultyByDepartmentKnown(): void
    {
        $this->assertSame(
            'School of Information & Communication Technology',
            FutoDepartments::getFacultyByDepartment('Computer Science')
        );
        $this->assertSame('College of Medicine', FutoDepartments::getFacultyByDepartment('Medicine and Surgery (MBBS)'));
        $this->assertSame('School of Basic Medical Sciences', FutoDepartments::getFacultyByDepartment('Human Anatomy'));
    }

    public function testGetFacultyByDepartmentUnknown(): void
    {
        $this->assertNull(FutoDepartments::getFacultyByDepartment('Witchcraft & Wizardry'));
    }

    // ─── isValidDepartment / isValidFaculty ───────────────────────────────────

    public function testIsValidDepartment(): void
    {
        $this->assertTrue(FutoDepartments::isValidDepartment('Computer Science'));
        $this->assertTrue(FutoDepartments::isValidDepartment('Radiography'));
        $this->assertFalse(FutoDepartments::isValidDepartment('Data Science'));
        $this->assertFalse(FutoDepartments::isValidDepartment(''));
    }

    public function testIsValidFaculty(): void
    {
        $this->assertTrue(FutoDepartments::isValidFaculty('College of Medicine'));
        $this->assertFalse(FutoDepartments::isValidFaculty('School of Medicine'));
        $this->assertFalse(FutoDepartments::isValidFaculty(''));
    }

    // ─── getDepartmentAbbreviation ────────────────────────────────────────────

    public function testGetDepartmentAbbreviationKnown(): void
    {
        $this->assertSame('CSC',  FutoDepartments::getDepartmentAbbreviation('Computer Science'));
        $this->assertSame('MBBS', FutoDepartments::getDepartmentAbbreviation('Medicine and Surgery (MBBS)'));
    }

    public function testGetDepartmentAbbreviationUnknown(): void
    {
        $this->assertNull(FutoDepartments::getDepartmentAbbreviation('Data Science'));
        $this->assertNull(FutoDepartments::getDepartmentAbbreviation(''));
    }

    // ─── getFacultyAbbreviation ───────────────────────────────────────────────

    public function testGetFacultyAbbreviationKnown(): void
    {
        $this->assertSame('COM',  FutoDepartments::getFacultyAbbreviation('College of Medicine'));
        $this->assertSame('SOPS', FutoDepartments::getFacultyAbbreviation('School of Physical Sciences'));
    }

    public function testGetFacultyAbbreviationUnknown(): void
    {
        $this->assertNull(FutoDepartments::getFacultyAbbreviation('School of Unknown'));
    }

    // ─── getDepartmentByAbbreviation ──────────────────────────────────────────

    public function testGetDepartmentByAbbreviationKnown(): void
    {
        $this->assertSame('Computer Science', FutoDepartments::getDepartmentByAbbreviation('CSC'));
        $this->assertSame('Medicine and Surgery (MBBS)', FutoDepartments::getDepartmentByAbbreviation('MBBS'));
    }

    public function testGetDepartmentByAbbreviationCaseInsensitive(): void
    {
        $this->assertSame('Computer Science', FutoDepartments::getDepartmentByAbbreviation('csc'));
        $this->assertSame('Computer Science', FutoDepartments::getDepartmentByAbbreviation('Csc'));
    }

    public function testGetDepartmentByAbbreviationUnknown(): void
    {
        $this->assertNull(FutoDepartments::getDepartmentByAbbreviation('XYZ'));
        $this->assertNull(FutoDepartments::getDepartmentByAbbreviation(''));
    }

    // ─── getFacultyByAbbreviation ─────────────────────────────────────────────

    public function testGetFacultyByAbbreviationKnown(): void
    {
        $this->assertSame('College of Medicine', FutoDepartments::getFacultyByAbbreviation('COM'));
        $this->assertSame(
            'School of Information & Communication Technology',
            FutoDepartments::getFacultyByAbbreviation('SICT')
        );
    }

    public function testGetFacultyByAbbreviationCaseInsensitive(): void
    {
        $this->assertSame('College of Medicine', FutoDepartments::getFacultyByAbbreviation('com'));
    }

    public function testGetFacultyByAbbreviationUnknown(): void
    {
        $this->assertNull(FutoDepartments::getFacultyByAbbreviation('XYZ'));
    }

    // ─── listDepartmentsWithAbbreviations ─────────────────────────────────────

    public function testListDepartmentsWithAbbreviationsSameLength(): void
    {
        $this->assertCount(count(FutoDepartments::DEPARTMENTS), FutoDepartments::listDepartmentsWithAbbreviations());
    }

    public function testListDepartmentsWithAbbreviationsStructure(): void
    {
        foreach (FutoDepartments::listDepartmentsWithAbbreviations() as $item) {
            $this->assertArrayHasKey('name', $item);
            $this->assertArrayHasKey('abbreviation', $item);
            $this->assertIsString($item['name']);
            $this->assertIsString($item['abbreviation']);
        }
    }

    public function testListDepartmentsWithAbbreviationsKnownEntry(): void
    {
        $list = FutoDepartments::listDepartmentsWithAbbreviations();
        $cs = array_values(array_filter($list, fn($d) => $d['name'] === 'Computer Science'))[0] ?? null;
        $this->assertNotNull($cs);
        $this->assertSame('CSC', $cs['abbreviation']);
    }

    // ─── listFacultiesWithAbbreviations ──────────────────────────────────────

    public function testListFacultiesWithAbbreviationsSameLength(): void
    {
        $this->assertCount(count(FutoDepartments::FACULTIES), FutoDepartments::listFacultiesWithAbbreviations());
    }

    public function testListFacultiesWithAbbreviationsKnownEntry(): void
    {
        $list = FutoDepartments::listFacultiesWithAbbreviations();
        $med = array_values(array_filter($list, fn($f) => $f['name'] === 'College of Medicine'))[0] ?? null;
        $this->assertNotNull($med);
        $this->assertSame('COM', $med['abbreviation']);
    }
}