---
title: Long-term Support (LTS)
lang: en
---

# Change Log (LTS)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

::: tip What is a breaking change?

* The original configuration file may not work, for example, if a directive item is removed or renamed.
* It may be necessary to update the build environment, such as installing new dependencies.

:::


## [Unreleased]

### Added
 

### Removed


### Changed


### Fixed


***

## [6.1.4] - 2021-08-27 UTC+0800

### 修复

* Memory leak.

***

## [6.1.3] - 2021-08-23 UTC+0800

### Added

* No longer generates additional response headers when CC protection returns the status code 444.

### Fixed

* The directive `waf_http_status` could not be merged correctly.

***

## [6.1.2] - 2021-08-11 UTC+0800

### Fixed

* Failed to parse `0.0.0.0/0` correctly when handling IP black and white lists.

* Compatible with environments that do not support IPV6.

***

## [6.1.1] - 2021-08-04 UTC+0800

### Fixed

* Under Attack Mode (UAM) sometimes does not work correctly.

***

## [6.1.0] - 2021-08-03 UTC+0800

### Added

* Added three options to the directive `waf_mode`.
    * ADV: Enable the  advanced rules.
    * CMN-METH: Equivalent to `head get post`.
    * ALL-METH: Any http request method will start checking.