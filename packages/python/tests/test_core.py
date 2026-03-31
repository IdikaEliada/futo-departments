# tests/test_core.py

from futo_departments import get_departments


def test_get_departments_returns_list():
    result = get_departments()
    assert isinstance(result, list)


def test_get_departments_not_empty():
    result = get_departments()
    assert len(result) > 0


def test_get_departments_contains_expected_value():
    result = get_departments()
    assert "Software Engineering" in result