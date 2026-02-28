# futo-departments

TypeScript-first data package for FUTO (Federal University of Technology Owerri) faculties and departments — with runtime helpers, abbreviation maps, formatters, and full type safety.

Works in any JS/TS environment: Node.js, Next.js, Vite, React Native, etc.

## Installation

```bash
npm install futo-departments
# or
yarn add futo-departments
# or
pnpm add futo-departments
```

---

## Data

### Raw arrays

```ts
import { faculties, departments, facultyDepartments } from "futo-departments";

faculties;     // readonly string[] — 12 schools/colleges
departments;   // readonly string[] — 58 departments

facultyDepartments["School of Information & Communication Technology"];
// ["Computer Science", "Software Engineering", "Cyber Security", "Information Technology"]
```

### Abbreviation maps

```ts
import { departmentAbbreviations, facultyAbbreviations } from "futo-departments";

departmentAbbreviations["Computer Science"];  // "CSC"
departmentAbbreviations["Human Anatomy"];     // "ANA"

facultyAbbreviations["College of Medicine"];  // "COM"
facultyAbbreviations["School of Physical Sciences"]; // "SPS"
```

---

## Helper functions

### Faculty ↔ Department lookups

```ts
import {
  getDepartmentsByFaculty,
  getFacultyByDepartment,
} from "futo-departments";

getDepartmentsByFaculty("School of Physical Sciences");
// ["Mathematics", "Physics", "Chemistry", "Statistics", "Science Laboratory Technology"]

getDepartmentsByFaculty("Unknown Faculty");
// falls back to full departments array

getFacultyByDepartment("Computer Science");
// "School of Information & Communication Technology"

getFacultyByDepartment("Witchcraft & Wizardry");
// undefined
```

### Abbreviation lookups

```ts
import {
  getDepartmentAbbreviation,
  getFacultyAbbreviation,
  getDepartmentByAbbreviation,
  getFacultyByAbbreviation,
  listDepartmentsWithAbbreviations,
  listFacultiesWithAbbreviations,
} from "futo-departments";

// Strict lookup — returns undefined if not found (no fallback)
getDepartmentAbbreviation("Computer Science");  // "CSC"
getDepartmentAbbreviation("Unknown Dept");      // undefined

getFacultyAbbreviation("College of Medicine");  // "COM"
getFacultyAbbreviation("Unknown Faculty");      // undefined

// Reverse lookup — case-insensitive
getDepartmentByAbbreviation("CSC");   // "Computer Science"
getDepartmentByAbbreviation("csc");   // "Computer Science"
getDepartmentByAbbreviation("XYZ");   // undefined

getFacultyByAbbreviation("COM");      // "College of Medicine"
getFacultyByAbbreviation("XYZ");      // undefined

// List all with abbreviations — useful for dropdowns / select inputs
listDepartmentsWithAbbreviations();
// [{ name: "Computer Science", abbreviation: "CSC" }, ...]

listFacultiesWithAbbreviations();
// [{ name: "College of Medicine", abbreviation: "COM" }, ...]
```

### Formatters

```ts
import { shortenDepartment, shortenFaculty, formatName, maskRegNumber } from "futo-departments";

// Uses official abbreviation map, falls back to generated abbreviation for unknowns
shortenDepartment("Computer Science");   // "CSC"
shortenDepartment("Software Engineering"); // "SOE"

shortenFaculty("College of Medicine");   // "COM"
shortenFaculty("School of Physical Sciences"); // "SPS"

// Formats a full name: first two in full, third as initial, rest discarded
formatName("John");                      // "John"
formatName("John Doe");                  // "John Doe"
formatName("John Michael Doe");          // "John Michael D."
formatName("John Michael Doe Extra");    // "John Michael D."

// Masks a registration number, keeping first char and last 3 visible
maskRegNumber("F/HD/22/0012345");        // "F***********345"
maskRegNumber("F/HD/22/0012345", "#");   // "F###########345"
```

### Validation / type guards

```ts
import { isValidDepartment, isValidFaculty } from "futo-departments";

isValidDepartment("Software Engineering"); // true
isValidDepartment("Data Science");         // false

isValidFaculty("College of Medicine");     // true
isValidFaculty("School of Medicine");      // false
```

---

## TypeScript types

```ts
import type { Faculty, Department } from "futo-departments";

const myFaculty: Faculty = "College of Medicine"; // ✅
const myDept: Department = "Human Anatomy";        // ✅

// Type narrowing with guards
function printDept(value: string) {
  if (isValidDepartment(value)) {
    // value is now typed as Department
    console.log(departmentAbbreviations[value]);
  }
}
```

---

## JavaScript usage (no TypeScript needed)

```js
const { getDepartmentsByFaculty, shortenDepartment } = require("futo-departments");
// or
import { getDepartmentsByFaculty, shortenDepartment } from "futo-departments";

getDepartmentsByFaculty("College of Medicine"); // ["Medicine and Surgery (MBBS)"]
shortenDepartment("Petroleum Engineering");     // "PET"
```

All functions are documented with JSDoc, so you get inline hints and autocomplete in VS Code even in plain `.js` files.

---

## Running tests

```bash
npm install
npm test        # run once
npm run test:watch  # watch mode
```

Tests cover data integrity (no duplicate codes, no orphan departments), all helper functions, edge cases, and type guard behaviour. See `src/index.test.ts` for the full suite.

---

## Publishing to npm

1. Set `"author"` in `package.json`
2. `npm run build`
3. `npm login`
4. `npm publish`

For a scoped package (e.g. `@yourname/futo-departments`), update the `"name"` field and run:

```bash
npm publish --access public
```

---

## License

MIT