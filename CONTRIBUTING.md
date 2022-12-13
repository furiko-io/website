# Contribution Guide

Thanks for wanting to contribute to Furiko's website! Here are some tips and guidelines on how to start contributing.

## Developing

The website is built with [Docusaurus 2](https://docusaurus.io/), a modern static site generator. Read more information on the Docusaurus website to find out how to start working with this repository.

### Development Environment

- **IDE**: We recommend using VS Code for editing this repository, which bundles several useful tools used in the repository.
- **Formatting**: This repository uses [Prettier](https://prettier.io/) to format almost all code.

## Submitting Your Changes

1. Fork this repository.
2. Push your changes to a new branch.
3. Submit a PR to the `main` branch.
4. Once merged, the changes will be deployed via GitHub Actions to [the website](https://furiko.io).

## Versioning

We maintain [versioned docs](https://docusaurus.io/docs/versioning) that follow the releases on [furiko-io/furiko](https://github.com/furiko-io/furiko). Documentation versions should follow major + minor + patch (e.g. `v0.1.2`).

This means that when a Furiko version is due to be released, all documentation must be written before finalizing the version in this repository. The `next` version (i.e. <https://furiko.io/docs/next/>) is reserved for the latest version of docs for ongoing feature development (before cutting a release).

### Building a new version

To build a new version, run the following:

```sh
$ npm run version "<version-number>"
```

This will build the current docs into `versioned_docs` and update `versions.json` accordingly.

Simply commit the built files, and the Docusaurus site will handle multiple versions correctly.

### Modifying an existing version

There should be no need to modify documentation for an existing built version once it has been generated and pushed. However, some exceptions can be made, such as but not limited to:

1. Major typo in one of the documentation
2. Missing/erraneous documentation for a feature
3. Accidental inclusion of unreleased feature in a released version

To do this, you have to delete the old version and re-run the above command to regenerate all files:

1. Delete the version in `versions.json`
2. Run `npm run version "<version-number>"` again
