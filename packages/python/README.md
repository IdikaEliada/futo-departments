# futo-departments

Python-first data package for FUTO (Federal University of Technology Owerri) faculties and departments — with runtime helpers, abbreviation maps, formatters, and validation functions.

Works in any Python environment: Python 3.8+, Django, Flask, FastAPI, etc.

## Installation

```bash
pip install futo-departments
```

---

## Data

### Raw list

```py
from futo_departments import faculties, departments, faculty_departments

print(faculties)  # list of 12 schools/colleges
print(departments)  # list of 58 departments

faculty_departments["School of Information & Communication Technology"]
# ['Computer Science', 'Software Engineering', 'Cyber Security', 'Information Technology']
```

### Abbreviation maps

```py
from futo_departments import department_abbreviations, faculty_abbreviations

department_abbreviations["Computer Science"]  # "CSC"
department_abbreviations["Human Anatomy"]     # "ANA"

faculty_abbreviations["College of Medicine"]  # "COM"
faculty_abbreviations["School of Physical Sciences"]  # "SOPS"
```

---

## Helper functions

### Faculty ↔ Department lookups

```py
from futo_departments import get_departments_by_faculty, get_faculty_by_department

get_departments_by_faculty("School of Physical Sciences")
# ['Mathematics', 'Physics', 'Chemistry', 'Statistics', 'Science Laboratory Technology']

get_departments_by_faculty("Unknown Faculty")
# returns full departments list as fallback

get_faculty_by_department("Computer Science")
# "School of Information & Communication Technology"

get_faculty_by_department("Witchcraft & Wizardry")
# None
```

### Abbreviation lookups
```py
from futo_departments import (
  get_department_abbreviation,
  get_faculty_abbreviation,
  get_department_by_abbreviation,
  get_faculty_by_abbreviation,
  list_departments_with_abbreviations,
  list_faculties_with_abbreviations
)

get_department_abbreviation("Computer Science")  # "CSC"
get_department_abbreviation("Unknown Dept")      # None

get_faculty_abbreviation("College of Medicine")  # "COM"
get_faculty_abbreviation("Unknown Faculty")      # None

get_department_by_abbreviation("CSC")           # "Computer Science"
get_department_by_abbreviation("csc")           # "Computer Science"
get_department_by_abbreviation("XYZ")           # None

get_faculty_by_abbreviation("COM")              # "College of Medicine"
get_faculty_by_abbreviation("XYZ")              # None

list_departments_with_abbreviations()
# [{'name': 'Computer Science', 'abbreviation': 'CSC'}, ...]

list_faculties_with_abbreviations()
# [{'name': 'College of Medicine', 'abbreviation': 'COM'}, ...]
```

### Formatters

```py
from futo_departments import shorten_department, shorten_faculty, format_name, mask_reg_number

shorten_department("Computer Science")       # "CSC"
shorten_department("Software Engineering")   # "SOE"

shorten_faculty("College of Medicine")       # "COM"
shorten_faculty("School of Physical Sciences")  # "SPS"

format_name("John")                          # "John"
format_name("John Doe")                      # "John Doe"
format_name("John Michael Doe")              # "John Michael D."
format_name("John Michael Doe Extra")        # "John Michael D."

mask_reg_number("F/HD/22/0012345")          # "F***********345"
mask_reg_number("F/HD/22/0012345", "#")     # "F###########345"
```

### Validation / type guards

```py
from futo_departments import is_valid_department, is_valid_faculty

is_valid_department("Software Engineering")  # True
is_valid_department("Data Science")          # False

is_valid_faculty("College of Medicine")      # True
is_valid_faculty("School of Medicine")       # False
```

---

## Running tests

```bash
pip install -r requirements-dev.txt
pytest
```

Tests cover data integrity (no duplicates, no orphan departments), helper functions, edge cases, and validation behavior. See `tests/` folder for full suite.

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
