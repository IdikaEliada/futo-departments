import pytest
from futo_departments import (
    FACULTIES,
    DEPARTMENTS,
    FACULTY_DEPARTMENTS,
    DEPARTMENT_ABBREVIATIONS,
    FACULTY_ABBREVIATIONS,
    shorten_department,
    shorten_faculty,
    format_name,
    mask_reg_number,
    get_departments_by_faculty,
    get_faculty_by_department,
    is_valid_department,
    is_valid_faculty,
    get_department_abbreviation,
    get_faculty_abbreviation,
    get_department_by_abbreviation,
    get_faculty_by_abbreviation,
    list_departments_with_abbreviations,
    list_faculties_with_abbreviations,
)


# ─── Data integrity ───────────────────────────────────────────────────────────

class TestDataIntegrity:
    def test_has_12_faculties(self):
        assert len(FACULTIES) == 12

    def test_every_faculty_in_map_exists_in_faculties(self):
        for faculty in FACULTY_DEPARTMENTS:
            assert faculty in FACULTIES

    def test_every_dept_in_map_exists_in_departments(self):
        for depts in FACULTY_DEPARTMENTS.values():
            for dept in depts:
                assert dept in DEPARTMENTS

    def test_every_dept_belongs_to_exactly_one_faculty(self):
        seen: dict[str, str] = {}
        for faculty, depts in FACULTY_DEPARTMENTS.items():
            for dept in depts:
                if dept in seen:
                    raise AssertionError(
                        f'"{dept}" appears in both "{seen[dept]}" and "{faculty}"'
                    )
                seen[dept] = faculty
        assert len(seen) == len(DEPARTMENTS)

    def test_department_abbreviations_covers_every_department(self):
        for dept in DEPARTMENTS:
            assert dept in DEPARTMENT_ABBREVIATIONS

    def test_department_abbreviations_no_duplicates(self):
        codes = list(DEPARTMENT_ABBREVIATIONS.values())
        assert len(codes) == len(set(codes))

    def test_faculty_abbreviations_covers_every_faculty(self):
        for faculty in FACULTIES:
            assert faculty in FACULTY_ABBREVIATIONS

    def test_faculty_abbreviations_no_duplicates(self):
        codes = list(FACULTY_ABBREVIATIONS.values())
        assert len(codes) == len(set(codes))


# ─── shorten_department ───────────────────────────────────────────────────────

class TestShortenDepartment:
    def test_known_departments(self):
        assert shorten_department("Computer Science") == "CSC"
        assert shorten_department("Software Engineering") == "SOE"
        assert shorten_department("Medicine and Surgery (MBBS)") == "MBBS"
        assert shorten_department("Electrical (Power Systems) Engineering") == "EPE"
        assert shorten_department("Petroleum Engineering") == "PET"

    def test_empty_or_whitespace(self):
        assert shorten_department("") == ""
        assert shorten_department("   ") == ""

    def test_fallback_for_unknown(self):
        result = shorten_department("Unknown Random Department")
        assert len(result) > 0


# ─── shorten_faculty ──────────────────────────────────────────────────────────

class TestShortenFaculty:
    def test_known_faculties(self):
        assert shorten_faculty("College of Medicine") == "COM"
        assert shorten_faculty("School of Physical Sciences") == "SOPS"
        assert shorten_faculty("Ce-Sustainable Procurement, Environmental & Social Standards") == "CESPESS"
        assert shorten_faculty("School of Information & Communication Technology") == "SICT"
        assert shorten_faculty("School of Electrical Systems & Engineering Technology") == "SESET"

    def test_fallback_for_unknown(self):
        result = shorten_faculty("Faculty of Unknown Studies")
        assert len(result) > 0
        assert result == "FUS"


# ─── format_name ─────────────────────────────────────────────────────────────

class TestFormatName:
    def test_single_name_unchanged(self):
        assert format_name("John") == "John"

    def test_two_names_unchanged(self):
        assert format_name("John Doe") == "John Doe"

    def test_abbreviates_third_discards_rest(self):
        assert format_name("John Michael Doe") == "John Michael D."
        assert format_name("John Michael Doe Extra") == "John Michael D."

    def test_empty_or_whitespace(self):
        assert format_name("") == ""
        assert format_name("   ") == ""

    def test_handles_extra_whitespace(self):
        assert format_name("  Jane   Mary   Smith  ") == "Jane Mary S."


# ─── mask_reg_number ─────────────────────────────────────────────────────────

class TestMaskRegNumber:
    def test_masks_middle_keeping_first_and_last_3(self):
        assert mask_reg_number("F/HD/22/0012345") == "F***********345"

    def test_custom_mask_character(self):
        assert mask_reg_number("F/HD/22/0012345", "#") == "F###########345"

    def test_short_string(self):
        assert mask_reg_number("ABCD") == "ABCD"

    def test_empty_or_whitespace(self):
        assert mask_reg_number("") == ""
        assert mask_reg_number("   ") == ""


# ─── get_departments_by_faculty ──────────────────────────────────────────────

class TestGetDepartmentsByFaculty:
    def test_correct_departments_for_valid_faculty(self):
        result = get_departments_by_faculty("School of Information & Communication Technology")
        assert "Computer Science" in result
        assert "Software Engineering" in result
        assert "Cyber Security" in result
        assert "Information Technology" in result
        assert len(result) == 4

    def test_fallback_to_all_for_unknown(self):
        result = get_departments_by_faculty("School of Unknown")
        assert result == DEPARTMENTS

    def test_college_of_medicine_single_dept(self):
        result = get_departments_by_faculty("College of Medicine")
        assert result == ("Medicine and Surgery (MBBS)",)


# ─── get_faculty_by_department ────────────────────────────────────────────────

class TestGetFacultyByDepartment:
    def test_correct_faculty_for_known_department(self):
        assert get_faculty_by_department("Computer Science") == \
            "School of Information & Communication Technology"
        assert get_faculty_by_department("Medicine and Surgery (MBBS)") == \
            "College of Medicine"
        assert get_faculty_by_department("Human Anatomy") == \
            "School of Basic Medical Sciences"

    def test_none_for_unknown(self):
        assert get_faculty_by_department("Witchcraft & Wizardry") is None


# ─── is_valid_department / is_valid_faculty ───────────────────────────────────

class TestIsValidDepartment:
    def test_valid(self):
        assert is_valid_department("Computer Science") is True
        assert is_valid_department("Radiography") is True

    def test_invalid(self):
        assert is_valid_department("Data Science") is False
        assert is_valid_department("") is False


class TestIsValidFaculty:
    def test_valid(self):
        assert is_valid_faculty("College of Medicine") is True

    def test_invalid(self):
        assert is_valid_faculty("School of Medicine") is False
        assert is_valid_faculty("") is False


# ─── get_department_abbreviation ─────────────────────────────────────────────

class TestGetDepartmentAbbreviation:
    def test_known(self):
        assert get_department_abbreviation("Computer Science") == "CSC"
        assert get_department_abbreviation("Medicine and Surgery (MBBS)") == "MBBS"

    def test_unknown_returns_none(self):
        assert get_department_abbreviation("Data Science") is None
        assert get_department_abbreviation("") is None


# ─── get_faculty_abbreviation ─────────────────────────────────────────────────

class TestGetFacultyAbbreviation:
    def test_known(self):
        assert get_faculty_abbreviation("College of Medicine") == "COM"
        assert get_faculty_abbreviation("School of Physical Sciences") == "SOPS"

    def test_unknown_returns_none(self):
        assert get_faculty_abbreviation("School of Unknown") is None


# ─── get_department_by_abbreviation ──────────────────────────────────────────

class TestGetDepartmentByAbbreviation:
    def test_finds_by_code(self):
        assert get_department_by_abbreviation("CSC") == "Computer Science"
        assert get_department_by_abbreviation("MBBS") == "Medicine and Surgery (MBBS)"

    def test_case_insensitive(self):
        assert get_department_by_abbreviation("csc") == "Computer Science"
        assert get_department_by_abbreviation("Csc") == "Computer Science"

    def test_unknown_returns_none(self):
        assert get_department_by_abbreviation("XYZ") is None
        assert get_department_by_abbreviation("") is None


# ─── get_faculty_by_abbreviation ─────────────────────────────────────────────

class TestGetFacultyByAbbreviation:
    def test_finds_by_code(self):
        assert get_faculty_by_abbreviation("COM") == "College of Medicine"
        assert get_faculty_by_abbreviation("SICT") == \
            "School of Information & Communication Technology"

    def test_case_insensitive(self):
        assert get_faculty_by_abbreviation("com") == "College of Medicine"

    def test_unknown_returns_none(self):
        assert get_faculty_by_abbreviation("XYZ") is None


# ─── list_departments_with_abbreviations ─────────────────────────────────────

class TestListDepartmentsWithAbbreviations:
    def test_same_length_as_departments(self):
        assert len(list_departments_with_abbreviations()) == len(DEPARTMENTS)

    def test_each_item_has_name_and_abbreviation(self):
        for item in list_departments_with_abbreviations():
            assert "name" in item
            assert "abbreviation" in item
            assert isinstance(item["name"], str)
            assert isinstance(item["abbreviation"], str)

    def test_includes_known_dept_with_correct_abbrev(self):
        result = list_departments_with_abbreviations()
        cs = next((d for d in result if d["name"] == "Computer Science"), None)
        assert cs is not None
        assert cs["abbreviation"] == "CSC"


# ─── list_faculties_with_abbreviations ───────────────────────────────────────

class TestListFacultiesWithAbbreviations:
    def test_same_length_as_faculties(self):
        assert len(list_faculties_with_abbreviations()) == len(FACULTIES)

    def test_each_item_has_name_and_abbreviation(self):
        for item in list_faculties_with_abbreviations():
            assert "name" in item
            assert "abbreviation" in item

    def test_includes_known_faculty_with_correct_abbrev(self):
        result = list_faculties_with_abbreviations()
        med = next((f for f in result if f["name"] == "College of Medicine"), None)
        assert med is not None
        assert med["abbreviation"] == "COM"


# ─── Additional tests ─────────────────────────────────────────────────────────

class TestAdditionalDataIntegrity:
    def test_every_dept_has_exactly_one_faculty(self):
        seen: dict[str, str] = {}
        for faculty, depts in FACULTY_DEPARTMENTS.items():
            for dept in depts:
                assert dept not in seen, f'"{dept}" in both "{seen[dept]}" and "{faculty}"'
                seen[dept] = faculty
        assert len(seen) == len(DEPARTMENTS)

    def test_all_abbreviations_are_uppercase(self):
        for dept, abbrev in DEPARTMENT_ABBREVIATIONS.items():
            assert abbrev == abbrev.upper(), f"{dept}: {abbrev} not uppercase"

    def test_all_faculty_abbreviations_are_uppercase(self):
        for faculty, abbrev in FACULTY_ABBREVIATIONS.items():
            assert abbrev == abbrev.upper(), f"{faculty}: {abbrev} not uppercase"

    def test_no_department_name_is_empty(self):
        for dept in DEPARTMENTS:
            assert dept.strip() != ""

    def test_no_faculty_name_is_empty(self):
        for faculty in FACULTIES:
            assert faculty.strip() != ""

    def test_all_departments_covered_by_faculties(self):
        all_in_map = {d for depts in FACULTY_DEPARTMENTS.values() for d in depts}
        assert set(DEPARTMENTS) == all_in_map


class TestShortenDepartmentExhaustive:
    def test_all_known_departments_return_nonempty(self):
        for dept in DEPARTMENTS:
            result = shorten_department(dept)
            assert result != "", f"Empty for: {dept}"

    def test_all_known_departments_return_uppercase(self):
        for dept in DEPARTMENTS:
            result = shorten_department(dept)
            assert result == result.upper(), f"Not uppercase for {dept}: {result}"

    def test_round_trip_via_get_department_by_abbreviation(self):
        for dept in DEPARTMENTS:
            abbrev = shorten_department(dept)
            found = get_department_by_abbreviation(abbrev)
            assert found == dept, f"Round-trip failed: {dept} → {abbrev} → {found}"


class TestShortenFacultyExhaustive:
    def test_all_known_faculties_return_nonempty(self):
        for faculty in FACULTIES:
            result = shorten_faculty(faculty)
            assert result != "", f"Empty for: {faculty}"

    def test_round_trip_via_get_faculty_by_abbreviation(self):
        for faculty in FACULTIES:
            abbrev = shorten_faculty(faculty)
            found = get_faculty_by_abbreviation(abbrev)
            assert found == faculty, f"Round-trip failed: {faculty} → {abbrev} → {found}"


class TestGetFacultyByDepartmentExhaustive:
    def test_every_department_resolves_to_a_faculty(self):
        for dept in DEPARTMENTS:
            faculty = get_faculty_by_department(dept)
            assert faculty is not None, f"No faculty found for: {dept}"
            assert faculty in FACULTIES

    def test_every_resolved_faculty_contains_the_department(self):
        for dept in DEPARTMENTS:
            faculty = get_faculty_by_department(dept)
            assert dept in FACULTY_DEPARTMENTS[faculty]


class TestMaskRegNumberEdgeCases:
    def test_mask_length_is_preserved(self):
        inp = "F/HD/22/0012345"
        result = mask_reg_number(inp)
        assert len(result) == len(inp)

    def test_first_char_preserved(self):
        assert mask_reg_number("ABC123")[0] == "A"

    def test_last_three_preserved(self):
        assert mask_reg_number("F/HD/22/0012345")[-3:] == "345"

    def test_whitespace_only_returns_empty(self):
        assert mask_reg_number("     ") == ""

    def test_exactly_four_chars_no_masking(self):
        # 4 chars: first + 0 masks + last 3 overlap
        assert mask_reg_number("ABCD") == "ABCD"

    def test_three_chars_no_masking(self):
        # "ABC" has 3 chars: first="A" + 0 masks + last3="ABC" = "AABC"
        assert mask_reg_number("ABC") == "AABC"


class TestFormatNameEdgeCases:
    def test_whitespace_between_names(self):
        assert format_name("  Jane   Mary   Smith  ") == "Jane Mary S."

    def test_four_or_more_names_discarded(self):
        assert format_name("A B C D E F") == "A B C."

    def test_single_letter_name(self):
        assert format_name("X") == "X"

    def test_two_single_letters(self):
        assert format_name("A B") == "A B"


class TestListFunctionsExhaustive:
    def test_list_departments_all_have_valid_abbreviations(self):
        for item in list_departments_with_abbreviations():
            assert item["abbreviation"] == DEPARTMENT_ABBREVIATIONS[item["name"]]

    def test_list_faculties_all_have_valid_abbreviations(self):
        for item in list_faculties_with_abbreviations():
            assert item["abbreviation"] == FACULTY_ABBREVIATIONS[item["name"]]

    def test_list_departments_order_matches_departments_tuple(self):
        names = [d["name"] for d in list_departments_with_abbreviations()]
        assert names == list(DEPARTMENTS)

    def test_list_faculties_order_matches_faculties_tuple(self):
        names = [f["name"] for f in list_faculties_with_abbreviations()]
        assert names == list(FACULTIES)