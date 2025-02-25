# NightPDF

Dark Mode PDF reader

It uses Electron but my eyes dont care.

![NightPDF screencast](docs/nightpdf.gif?raw=true)

## Download Binaries

![NightPDF logo](docs/nightpdf_small.png?raw=true)

Binaries for Linux, Macos and Windows

-   [Latest release](https://github.com/Lunarequest/NightPDF/releases/latest)
<br/>
<br/>
<a href='https://flathub.org/apps/io.github.lunarequest.NightPDF'><img width='240' alt='Download on Flathub' src='https://dl.flathub.org/assets/badges/flathub-badge-en.png'/></a>

## Support tiers

- Tier 1: Linux, guaranteed builds and guaranteed 100% functionality
- Tier 2: Tier 2: Windows, guaranteed builds. Functionality is not guaranteed
- Tier 3: Tier 3: Macos, builds are not guaranteed if it breaks fix is not guaranteed

## Limitations

There is limited support for xfa forms, and saving forms with filled in data. This will be worked on with coming releases.

## Development

### Requirements

This software was developed using

-   node: v12.x
-   yarn: berry
-   Arch Linux Rolling/OpenSUSE Tumbleweed

## Instructions

1. Install dependencies

```bash
yarn
```

2. Run

```bash
yarn dev
```

### Building Release Version

1. Install dependencies

```bash
yarn
```

2. Build release

```bash
yarn dist
```

## CLI
```
Usage: NightPDF [-p] [pdf]

Positionals:
  pdf, pdf  The pdf to open                                             [string]

Options:
      --help     Dark Mode PDF Reader built using Electron and PDF.js  [boolean]
      --version  Show version number                                   [boolean]
  -p, --pages    The page to open in the pdf                            [number]

Examples:
  NightPDF -p 5 pdf.pdf  Loads pdf on the 5th page
```

## Licenses

-   [NightPDF](https://github.com/Lunarequest/NightPDF) is under [GPLv2 only](LICENSE)
-   [Electron](https://github.com/electron/electron) is under [MIT](https://github.com/electron/electron/blob/master/LICENSE)
-   [PDF.js](https://mozilla.github.io/pdf.js/) is under [Apache License 2.0](https://github.com/mozilla/pdf.js/blob/master/LICENSE)
