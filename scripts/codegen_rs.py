#!/usr/bin/env python3
"""
Generates packages/rust/src/lib.rs from data/faculties.json and data/departments.json.
Run from the repo root: python3 scripts/codegen_rust.py
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
DATA_DIR = ROOT / "data"
OUT_PATH = ROOT / "packages" / "rust" / "src" / "lib.rs"


def load_data():
    faculties = json.loads((DATA_DIR / "faculties.json").read_text(encoding="utf-8"))
    departments = json.loads((DATA_DIR / "departments.json").read_text(encoding="utf-8"))
    return faculties, departments


def validate(faculties, departments):
    faculty_names = {f["name"] for f in faculties}
    abbrevs = [f["abbreviation"] for f in faculties]
    dept_abbrevs = [d["abbreviation"] for d in departments]

    # No duplicate faculty abbreviations
    if len(abbrevs) != len(set(abbrevs)):
        dupes = [a for a in abbrevs if abbrevs.count(a) > 1]
        sys.exit(f"✗ Duplicate faculty abbreviations: {set(dupes)}")

    # No duplicate department abbreviations
    if len(dept_abbrevs) != len(set(dept_abbrevs)):
        dupes = [a for a in dept_abbrevs if dept_abbrevs.count(a) > 1]
        sys.exit(f"✗ Duplicate department abbreviations: {set(dupes)}")

    # Every department faculty must exist
    orphans = [d["name"] for d in departments if d["faculty"] not in faculty_names]
    if orphans:
        sys.exit(f"✗ Departments with unknown faculty: {orphans}")

    print(f"✓ Data valid: {len(faculties)} faculties, {len(departments)} departments")


def rust_str(s: str) -> str:
    """Escape a string for a Rust &str literal."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def generate(faculties, departments) -> str:
    lines = []

    lines += [
        "// ─────────────────────────────────────────────────────────────────────────────",
        "// AUTO-GENERATED — do not edit by hand.",
        "// Run `python3 scripts/codegen_rust.py` to regenerate from data/.",
        "// ─────────────────────────────────────────────────────────────────────────────",
        "",
        "#![doc = include_str!(\"../README.md\")]",
        "",
        "// ── Types ────────────────────────────────────────────────────────────────────",
        "",
        "/// A faculty (school) at FUTO.",
        "#[derive(Debug, Clone, PartialEq, Eq)]",
        "pub struct Faculty {",
        "    pub name: &'static str,",
        "    pub abbreviation: &'static str,",
        "}",
        "",
        "/// A department at FUTO.",
        "#[derive(Debug, Clone, PartialEq, Eq)]",
        "pub struct Department {",
        "    pub name: &'static str,",
        "    pub abbreviation: &'static str,",
        "    pub faculty: &'static str,",
        "}",
        "",
        "// ── Static data ───────────────────────────────────────────────────────────────",
        "",
        "/// All faculties at FUTO.",
        "pub const FACULTIES: &[Faculty] = &[",
    ]

    for f in faculties:
        lines.append(
            f'    Faculty {{ name: "{rust_str(f["name"])}", abbreviation: "{rust_str(f["abbreviation"])}" }},'
        )
    lines += ["];", ""]

    lines += [
        "/// All departments at FUTO.",
        "pub const DEPARTMENTS: &[Department] = &[",
    ]
    for d in departments:
        lines.append(
            f'    Department {{ name: "{rust_str(d["name"])}", abbreviation: "{rust_str(d["abbreviation"])}", faculty: "{rust_str(d["faculty"])}" }},'
        )
    lines += ["];", ""]

    # ── Functions ────────────────────────────────────────────────────────────────
    lines += [
        "// ── Functions ─────────────────────────────────────────────────────────────────",
        "",
        "/// Returns the [`Faculty`] with the given name, or `None`.",
        "pub fn get_faculty(name: &str) -> Option<&'static Faculty> {",
        "    FACULTIES.iter().find(|f| f.name.eq_ignore_ascii_case(name))",
        "}",
        "",
        "/// Returns all [`Department`]s that belong to the given faculty name.",
        "pub fn get_departments_by_faculty(faculty: &str) -> Vec<&'static Department> {",
        "    DEPARTMENTS",
        "        .iter()",
        "        .filter(|d| d.faculty.eq_ignore_ascii_case(faculty))",
        "        .collect()",
        "}",
        "",
        "/// Returns the faculty name for the given department name, or `None`.",
        "pub fn get_faculty_by_department(department: &str) -> Option<&'static str> {",
        "    DEPARTMENTS",
        "        .iter()",
        "        .find(|d| d.name.eq_ignore_ascii_case(department))",
        "        .map(|d| d.faculty)",
        "}",
        "",
        "/// Returns the department abbreviation for the given full name, or `None`.",
        "///",
        "/// # Example",
        '/// ```',
        '/// let abbr = futo_departments::shorten_department("Computer Science");',
        '/// assert_eq!(abbr, Some("CSC"));',
        '/// ```',
        "pub fn shorten_department(name: &str) -> Option<&'static str> {",
        "    DEPARTMENTS",
        "        .iter()",
        "        .find(|d| d.name.eq_ignore_ascii_case(name))",
        "        .map(|d| d.abbreviation)",
        "}",
        "",
        "/// Returns the department full name for the given abbreviation, or `None`.",
        "pub fn expand_department(abbreviation: &str) -> Option<&'static str> {",
        "    DEPARTMENTS",
        "        .iter()",
        "        .find(|d| d.abbreviation.eq_ignore_ascii_case(abbreviation))",
        "        .map(|d| d.name)",
        "}",
        "",
        "/// Returns the faculty abbreviation for the given faculty name, or `None`.",
        "pub fn shorten_faculty(name: &str) -> Option<&'static str> {",
        "    FACULTIES",
        "        .iter()",
        "        .find(|f| f.name.eq_ignore_ascii_case(name))",
        "        .map(|f| f.abbreviation)",
        "}",
        "",
        "/// Returns the faculty full name for the given abbreviation, or `None`.",
        "pub fn expand_faculty(abbreviation: &str) -> Option<&'static str> {",
        "    FACULTIES",
        "        .iter()",
        "        .find(|f| f.abbreviation.eq_ignore_ascii_case(abbreviation))",
        "        .map(|f| f.name)",
        "}",
        "",
        "/// Returns `true` if the given string is a valid department name (case-insensitive).",
        "pub fn is_valid_department(name: &str) -> bool {",
        "    DEPARTMENTS.iter().any(|d| d.name.eq_ignore_ascii_case(name))",
        "}",
        "",
        "/// Returns `true` if the given string is a valid faculty name (case-insensitive).",
        "pub fn is_valid_faculty(name: &str) -> bool {",
        "    FACULTIES.iter().any(|f| f.name.eq_ignore_ascii_case(name))",
        "}",
        "",
        "/// Masks a FUTO registration number.",
        "/// Keeps the first character and last three characters, replaces the middle with `*`.",
        "///",
        "/// # Example",
        '/// ```',
        '/// let masked = futo_departments::mask_reg_number("U2020/1234567CS");',
        '/// assert_eq!(masked, "U***567CS");',
        '/// ```',
        "pub fn mask_reg_number(reg: &str) -> String {",
        "    let chars: Vec<char> = reg.chars().collect();",
        "    let n = chars.len();",
        "    if n <= 4 {",
        "        // Edge case: too short to meaningfully mask",
        "        let first = chars[0];",
        "        let rest: String = chars.iter().collect();",
        "        return format!(\"{}{}\", first, rest);",
        "    }",
        "    let first = chars[0];",
        "    let last_three: String = chars[n - 3..].iter().collect();",
        "    format!(\"{}***{}\", first, last_three)",
        "}",
        "",
    ]

    return "\n".join(lines)


def main():
    faculties, departments = load_data()
    validate(faculties, departments)
    code = generate(faculties, departments)
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(code, encoding="utf-8")
    print(f"✓ Generated {OUT_PATH.relative_to(ROOT)}")
    print(f"  {len(faculties)} faculties · {len(departments)} departments")


if __name__ == "__main__":
    main()