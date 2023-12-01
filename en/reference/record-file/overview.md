# Record File overview

The **Record File** is an efficient way of declaring various personal data
collected by your application.
It must respect the specification in order to be interpreted correctly.

## Format

You should write the **Record File** following the [YAML](https://yaml.org/) syntax.

The recommended naming is `pdcp-records.yaml` but you'll be able to specify a
custom name.

## Top-level keywords

We defined a bunch of **Top-level Keywords** in order to standardize the way of
writing a **Record File**.

- [projects](./keywords/projects)
- [data](./keywords/projects)
- [adapter](./keywords/projects)
- [purposes](./keywords/purposes)

## Example

```yaml:line-numbers
projects:
  website:
    data:
      firstName:
        fetch:
          adapter: database
      lastName:
        fetch:
          adapter: database
      username:
        fetch:
          adapter: database

purposes:
    ad:
      description: "Data used to provide personnalized advertising"
```
