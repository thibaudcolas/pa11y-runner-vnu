# [pa11y-runner-vnu](https://www.npmjs.com/package/pa11y-runner-vnu) [![npm](https://img.shields.io/npm/v/pa11y-runner-vnu.svg)](https://www.npmjs.com/package/pa11y-runner-vnu) [![Build Status](https://travis-ci.com/thibaudcolas/pa11y-runner-vnu.svg?branch=master)](https://travis-ci.com/thibaudcolas/pa11y-runner-vnu) [![Total alerts](https://img.shields.io/lgtm/alerts/g/thibaudcolas/pa11y-runner-vnu.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-vnu/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/thibaudcolas/pa11y-runner-vnu.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-vnu/context:javascript)

> Pa11y runner for HTML validation with the [Nu Html Checker (v.Nu)](https://validator.github.io/validator/).

## Usage

> 🚧 Currently the runner is only compatible with PR [#524 – Add lower-level runner API to support non-browser runners](https://github.com/pa11y/pa11y/pull/524), and on my fork [thibaudcolas/pa11y#feature/node-runners](https://github.com/thibaudcolas/pa11y#feature/node-runners).

**V.Nu first needs to be installed separately, with a standalone [`vnu` binary](https://validator.github.io/validator/).**

```sh
# On macOS,
brew install vnu
# Elsewhere, grab the latest release from
# https://github.com/validator/validator/releases/latest.
# Make sure the `vnu` executable is in your PATH.
# Then,
npm install -g https://github.com/thibaudcolas/pa11y#feature/node-runners pa11y-runner-vnu
```

With `vnu`, Pa11y, and the runner installed,

```sh
pa11y --runner vnu https://www.example.com/
```

## Why

When it comes to finding accessibility issues, HTML validation ranks [poorly](https://alphagov.github.io/accessibility-tool-audit/) compared to dedicated tools. Nonetheless, I find it valuable for a few reasons:

- Developers understand it well. Accessibility guidelines can be hard to grasp for newcomers, while “valid HTML” is a well understood concept.
- It’s ubiquitous. There are well established tools for HTML validation, they’ve been there forever. A lot of web developers have already used them.
- It finds issues much closer to the code than other methods. If the HTML is malformed, a validator picks this up right away, in very clear terms.

---

Here are examples of issues I wouldn’t have found if it wasn’t for HTML validation:

- [Forcing `row="table"` on all tables](https://github.com/wagtail/wagtail/pull/5977)

## Contributing

See anything you like in here? Anything missing? We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more. Please have a look at our [contribution guidelines](docs/CONTRIBUTING.md).

## Credits

View the full list of [contributors](https://github.com/thibaudcolas/pa11y-runner-vnu/graphs/contributors). [MIT](LICENSE) licensed.

```

```
