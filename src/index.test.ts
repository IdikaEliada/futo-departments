import { describe, it, expect } from "vitest";
import {
  faculties,
  departments,
  facultyDepartments,
  departmentAbbreviations,
  facultyAbbreviations,
  shortenDepartment,
  shortenFaculty,
  formatName,
  maskRegNumber,
  getDepartmentsByFaculty,
  getFacultyByDepartment,
  isValidDepartment,
  isValidFaculty,
} from "./index";

// ─── Data integrity ───────────────────────────────────────────────────────────

describe("Data integrity", () => {
  it("should have 12 faculties", () => {
    expect(faculties).toHaveLength(12);
  });

  it("every faculty in facultyDepartments should exist in faculties list", () => {
    for (const faculty of Object.keys(facultyDepartments)) {
      expect(faculties).toContain(faculty);
    }
  });

  it("every department in facultyDepartments should exist in departments list", () => {
    for (const depts of Object.values(facultyDepartments)) {
      for (const dept of depts) {
        expect(departments).toContain(dept);
      }
    }
  });

  it("every department should belong to exactly one faculty", () => {
    const seen = new Map<string, string>();
    for (const [faculty, depts] of Object.entries(facultyDepartments)) {
      for (const dept of depts) {
        if (seen.has(dept)) {
          throw new Error(
            `"${dept}" appears in both "${seen.get(dept)}" and "${faculty}"`
          );
        }
        seen.set(dept, faculty);
      }
    }
    expect(seen.size).toBe(departments.length);
  });

  it("departmentAbbreviations should cover every department", () => {
    for (const dept of departments) {
      expect(departmentAbbreviations).toHaveProperty(dept);
    }
  });

  it("departmentAbbreviations should have no duplicate codes", () => {
    const codes = Object.values(departmentAbbreviations);
    const unique = new Set(codes);
    expect(codes.length).toBe(unique.size);
  });

  it("facultyAbbreviations should cover every faculty", () => {
    for (const faculty of faculties) {
      expect(facultyAbbreviations).toHaveProperty(faculty);
    }
  });

  it("facultyAbbreviations should have no duplicate codes", () => {
    const codes = Object.values(facultyAbbreviations);
    const unique = new Set(codes);
    expect(codes.length).toBe(unique.size);
  });
});

// ─── shortenDepartment ────────────────────────────────────────────────────────

describe("shortenDepartment()", () => {
  it("returns the correct abbreviation for known departments", () => {
    expect(shortenDepartment("Computer Science")).toBe("CSC");
    expect(shortenDepartment("Software Engineering")).toBe("SOE");
    expect(shortenDepartment("Medicine and Surgery (MBBS)")).toBe("MBBS");
    expect(shortenDepartment("Electrical (Power Systems) Engineering")).toBe("EPE");
    expect(shortenDepartment("Petroleum Engineering")).toBe("PET");
  });

  it("returns empty string for empty or invalid input", () => {
    expect(shortenDepartment("")).toBe("");
    expect(shortenDepartment("   ")).toBe("");
  });

  it("falls back gracefully for unknown departments", () => {
    const result = shortenDepartment("Unknown Random Department");
    expect(result.length).toBeGreaterThan(0);
  });
});

// ─── shortenFaculty ───────────────────────────────────────────────────────────

describe("shortenFaculty()", () => {
  it("returns the correct abbreviation for known faculties", () => {
    expect(shortenFaculty("College of Medicine")).toBe("COM");
    expect(shortenFaculty("School of Physical Sciences")).toBe("SPS");
    expect(shortenFaculty("School of Information & Communication Technology")).toBe("SICT");
    expect(shortenFaculty("School of Electrical Systems & Engineering Technology")).toBe("SESET");
  });

  it("falls back gracefully for unknown faculties", () => {
    const result = shortenFaculty("Faculty of Unknown Studies");
    expect(result.length).toBeGreaterThan(0);
    expect(result).toBe("FUS"); // Faculty Unknown Studies (drops "of")
  });
});

// ─── formatName ──────────────────────────────────────────────────────────────

describe("formatName()", () => {
  it("returns a single name unchanged", () => {
    expect(formatName("John")).toBe("John");
  });

  it("returns two names unchanged", () => {
    expect(formatName("John Doe")).toBe("John Doe");
  });

  it("abbreviates the third name and discards the rest", () => {
    expect(formatName("John Michael Doe")).toBe("John Michael D.");
    expect(formatName("John Michael Doe Extra")).toBe("John Michael D.");
  });

  it("returns empty string for empty or whitespace input", () => {
    expect(formatName("")).toBe("");
    expect(formatName("   ")).toBe("");
  });

  it("handles extra whitespace between names", () => {
    expect(formatName("  Jane   Mary   Smith  ")).toBe("Jane Mary S.");
  });
});

// ─── maskRegNumber ────────────────────────────────────────────────────────────

describe("maskRegNumber()", () => {
  it("masks middle characters, keeping first and last 3", () => {
    expect(maskRegNumber("F/HD/22/0012345")).toBe("F***********345");
  });

  it("supports a custom mask character", () => {
    expect(maskRegNumber("F/HD/22/0012345", "#")).toBe("F###########345");
  });

  it("handles short strings without error", () => {
    expect(maskRegNumber("ABCD")).toBe("ABCD"); // 4 chars: first + 0 masks + last 3 overlap
  });

  it("returns empty string for empty or whitespace input", () => {
    expect(maskRegNumber("")).toBe("");
    expect(maskRegNumber("   ")).toBe("");
  });
});

// ─── getDepartmentsByFaculty ──────────────────────────────────────────────────

describe("getDepartmentsByFaculty()", () => {
  it("returns the correct departments for a valid faculty", () => {
    const result = getDepartmentsByFaculty("School of Information & Communication Technology");
    expect(result).toContain("Computer Science");
    expect(result).toContain("Software Engineering");
    expect(result).toContain("Cyber Security");
    expect(result).toContain("Information Technology");
    expect(result).toHaveLength(4);
  });

  it("falls back to all departments for an unknown faculty", () => {
    const result = getDepartmentsByFaculty("School of Unknown");
    expect(result).toBe(departments);
  });

  it("College of Medicine only returns one department", () => {
    const result = getDepartmentsByFaculty("College of Medicine");
    expect(result).toEqual(["Medicine and Surgery (MBBS)"]);
  });
});

// ─── getFacultyByDepartment ───────────────────────────────────────────────────

describe("getFacultyByDepartment()", () => {
  it("returns the correct faculty for a known department", () => {
    expect(getFacultyByDepartment("Computer Science")).toBe(
      "School of Information & Communication Technology"
    );
    expect(getFacultyByDepartment("Medicine and Surgery (MBBS)")).toBe(
      "College of Medicine"
    );
    expect(getFacultyByDepartment("Human Anatomy")).toBe(
      "School of Basic Medical Sciences"
    );
  });

  it("returns undefined for an unknown department", () => {
    expect(getFacultyByDepartment("Witchcraft & Wizardry")).toBeUndefined();
  });
});

// ─── isValidDepartment / isValidFaculty ───────────────────────────────────────

describe("isValidDepartment()", () => {
  it("returns true for valid departments", () => {
    expect(isValidDepartment("Computer Science")).toBe(true);
    expect(isValidDepartment("Radiography")).toBe(true);
  });

  it("returns false for invalid departments", () => {
    expect(isValidDepartment("Crop Science Technology")).toBe(false); // old typo
    expect(isValidDepartment("")).toBe(false);
    expect(isValidDepartment("Data Science")).toBe(false);
  });
});

describe("isValidFaculty()", () => {
  it("returns true for valid faculties", () => {
    expect(isValidFaculty("College of Medicine")).toBe(true);
  });

  it("returns false for invalid faculties", () => {
    expect(isValidFaculty("School of Medicine")).toBe(false);
    expect(isValidFaculty("")).toBe(false);
  });
});