# Data top-level keyword

**Type**: `map`

The data keyword represents a map of data types.

## What is a data type ?

A data type is a way to represent a personal data you store, use or manage.
It is represented by a meaningful name.

## purposes

`purposes` defines every purposes that a data is attached to. Each purpose
should be referenced under the [purposes top-level keyword](./purposes).

Example:

```yaml
projects:
  website:
    data: // [!code focus:4]
      firstName:
          purposes:
              - "ad"

purposes: // [!code focus:2]
  ad:
    description: 'Data used to provide personalized advertising'
```
