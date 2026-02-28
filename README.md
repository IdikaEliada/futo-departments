# futo-departments

TypeScript-first data package for FUTO (Federal University of Technology Owerri) faculties and departments — with runtime helpers and full type safety.

## Installation

```bash
npm install futo-departments
# or
yarn add futo-departments
# or
pnpm add futo-departments
```

## Usage

### Data

```ts
import { faculties, departments, facultyDepartments } from "futo-departments";

console.log(faculties); // readonly string[] of all 12 schools/colleges
console.log(departments); // readonly string[] of all ~58 departments
console.log(facultyDepartments["School of Information & Communication Technology"]);
// ["Computer Science", "Software Engineering", "Cyber Security", "Information Technology"]
```

### Helper functions

```ts
import {
  getDepartmentsByFaculty,
  getFacultyByDepartment,
  isValidDepartment,
  isValidFaculty,
} from "futo-departments";

getDepartmentsByFaculty("School of Physical Sciences");
// ["Mathematics", "Physics", "Chemistry", "Statistics", "Science Laboratory Technology"]

getFacultyByDepartment("Computer Science");
// "School of Information & Communication Technology"

isValidDepartment("Software Engineering"); // true
isValidFaculty("School of Medicine");      // false
```

### TypeScript types

```ts
import type { Faculty, Department } from "futo-departments";

const myFaculty: Faculty = "College of Medicine"; // ✅
const myDept: Department = "Human Anatomy";        // ✅
```

## Publishing to npm

1. Update `"author"` in `package.json`
2. Run `npm run build`
3. `npm login`
4. `npm publish`

> For a scoped package (e.g. `@yourname/futo-departments`), update the `"name"` field and run `npm publish --access public`.

## License

MIT