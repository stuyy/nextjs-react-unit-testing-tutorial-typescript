# Notes

This project has `msw` as a dependency. As of right now (6/9/2023), installing `msw` in a Typescrupt project errors out if the version is less than 5.0.x. The current version of Typescript in this project is 5.1.3. You can just install `msw` with the `--force` flag like this:

`npm install -D msw --force`
