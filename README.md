# [pa11y-runner-vnu](https://www.npmjs.com/package/pa11y-runner-vnu) [![npm](https://img.shields.io/npm/v/pa11y-runner-vnu.svg)](https://www.npmjs.com/package/pa11y-runner-vnu) [![Build Status](https://travis-ci.com/thibaudcolas/pa11y-runner-vnu.svg?branch=master)](https://travis-ci.com/thibaudcolas/pa11y-runner-vnu) [![Total alerts](https://img.shields.io/lgtm/alerts/g/thibaudcolas/pa11y-runner-vnu.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-vnu/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/thibaudcolas/pa11y-runner-vnu.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-vnu/context:javascript)

> Pa11y runner for HTML validation with the [Nu Html Checker (v.Nu)](https://validator.github.io/validator/).

## Usage

**To use the runner, first install [`vnu`](https://validator.github.io/validator/).**

> 🚧 Currently the Runner is only compatible with https://github.com/thibaudcolas/pa11y.

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

## What is this

## Contributing

See anything you like in here? Anything missing? We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more. Please have a look at our [contribution guidelines](docs/CONTRIBUTING.md).

## Credits

View the full list of [contributors](https://github.com/thibaudcolas/pa11y-runner-vnu/graphs/contributors). [MIT](LICENSE) licensed.

```

```
