---
title: Directive
lang: en
---

# Directive

## `waf`

* syntax: waf \<*on* | *off*\>
* default: waf *off*
* context: http, server, location

Whether to enable this module.

## `waf_rule_path`

* syntax: waf_rule_path \<*dir*\>
* default: —
* context: http, server, location

The absolute path to the directory where the rule file is located, and must end with `/`.

## `waf_mode`

* syntax: waf_mode \<*mode_type*\> ...
* default: —
* context: http, server, location

Specify the working mode of the firewall, specifying at least one mode and up to eight modes.

`mode_type` has the following values (not case sensitive):
* GET: Start the inspection process when `Http.Method=GET`.
* HEAD: Start the inspection process when `Http.Method=HEAD`.
* POST: Start the inspection process when `Http.Method=POST`.
* PUT: Start the inspection process when `Http.Method=PUT`.
* DELETE: Start the inspection process when `Http.Method=DELETE`.
* MKCOL: Start the check process when `Http.Method=MKCOL`.
* COPY: Start the inspection process when `Http.Method=COPY`.
* MOVE: Start the inspection process when `Http.Method=MOVE`.
* OPTIONS: Start the inspection process when `Http.Method=OPTIONS`.
* PROPFIN: Start the inspection process when `Http.Method=PROPFIN`.
* PROPPATCH: Start the inspection process when `Http.Method=PROPPATCH`.
* LOCK: Start the inspection process when `Http.Method=LOCK`.
* UNLOCK: Start the inspection process when `Http.Method=UNLOCK`.
* PATCH: Start the inspection process when `Http.Method=PATCH`.
* TRAC: Start the inspection process when `Http.Method=TRAC`.
* CMN-METH: Equivalent to `HEAD GET POST`.
* ALL-METH: Any HTTP request method will start the inspection process.
* IP: Enable IP address inspecting rules.
* URL: Enable URL inspecting rules.
* RBODY: Enable POST request body inspecting rules.
* ARGS: Enable ARGS inspecting rules.
* UA: Enable UA inspecting rules.
* COOKIE: Enable COOKIE inspecting rules.
* REFERER: Enable REFERER inspecting rules.
* CC: Enable 'Anti Challenge Collapsar'. **When you enable this mode, you must set [waf_cc_deny](#waf-cc-deny)**.
* ADV: Enable the advanced rules.
* LIB-INJECTION-SQLI: Use [libinjection](https://github.com/libinjection/libinjection) to detect SQL injection.
* LIB-INJECTION-XSS: Use [libinjection](https://github.com/libinjection/libinjection) to detect XSS attacks.
* LIB-INJECTION: Equivalent to `LIB-INJECTION-SQLI LIB-INJECTION-XSS`.
* CACHE: Enable caching. Enabling this mode will cache the result of the inspection, so that the next time the same target is inspected, there is no need to repeat the inspection. However, the results of the POST body inspection are not cached. For example, if a URL is not in the blacklist after inspection, the next time the same URL is inspected, the cache can be read directly. **When you enable this mode, you must set [waf_cache](#waf-cache)**.
* STD: Standard working mode, equivalent to `HEAD GET POST IP URL RBODY ARGS UA CC CACHE LIB-INJECTION-SQLI`.
* STATIC: working mode for static sites, equivalent to `HEAD GET IP URL UA CC CACHE`.
* DYNAMIC: working mode for dynamic sites, equivalent to `HEAD GET POST IP URL ARGS UA RBODY COOKIE CC CACHE LIB-INJECTION-SQLI`.
* FULL: Enable all modes.

You can turn off a mode by prefixing `mode_type` with the prefix `!` to turn off a mode.
The following is an example of using the standard working mode, but without inspecting the User-Agent.

```nginx
waf_mode STD !UA;
```

::: warning NOTE

If two or more conflicting modes are enabled at the same time, the mode to the right will override the mode to its left. The following example means inspecting the User-Agent.

```nginx
waf_mode !UA STD;
```

:::

::: tip NOTE

The mode of `CC` is independent of other modes, and whether it takes effect or not is not affected by other modes. A typical situation such as the `URL` mode will be affected by the `GET` mode, because if the `GET` mode is not used, the check will not be started when `Http.Method=GET`, and the URL will naturally not be inspected, but ` CC` mode will not be similarly affected.

:::

::: tip CHANGES IN LATEST 'Current' VERSION

The parameters `CC` and `CACHE` are removed.

* STD: Standard working mode, equivalent to `HEAD GET POST IP URL RBODY ARGS UA`.
* STATIC: working mode for static sites, equivalent to `HEAD GET IP URL UA`.
* DYNAMIC: working mode for dynamic sites, equivalent to `HEAD GET POST IP URL ARGS UA RBODY COOKIE`.
* LIB-INJECTION: Removed.
* LIB-INJECTION-SQLI: Removed.
* LIB-INJECTION-XSS: Removed.
* ADV: Removed.

:::

## `waf_cc_deny`

* syntax: waf_cc_deny \<rate=*n*r/m\> \[duration=*1h*\] \[size=*20m*\]
* default: —
* context: http, server, location

Set the parameters related to CC protection.

* `rate`: Indicates the upper limit of the number of requests over a period of time, such as `500r/m`. Exceeding the limit returns a [503 status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) with a [Retry-After](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) response header.
* `duration`: Indicates the time to block IP after exceeding the limit of the first parameter `rate`, such as `60s`, `60m`, `60h` and `60d`, if not specified, the default is `1h`.
* `size`: Used to set the size of the memory for recording IP accesses, such as `20m`, `2048k`, must not be less than `20m`, if not specified, the default is `20m`. When this memory is exhausted, the program will clean up some of the records according to the LRU policy.


::: tip TIP

1MB of memory can record at least 4096 IP.

:::


::: tip CHANGES IN LATEST 'Current' VERSION

* syntax: waf_cc_deny \<*off* | *on* | *CAPTCHA*\> \<rate=*n*r/t\> \[duration=*1h*\] \[size=*20m*\]
* default: waf_cc_deny *off* duration=*1h* size=*20m*
* context: server, location

***

* `CAPTCHA`. When the request rate exceeds the set value, use CAPTCHA authentication to disable the IP if it fails three times in a row, and vice versa to recalculate the request frequency. When you enable this option, you must set the parameters `prov`, `file` and `secret` of the directive [waf_captcha](#waf-captcha). You can refer to the use case in [Enable Captcha | Best Practices](/practice/enable-captcha.md).
* `rate`: indicates the upper rate of requests, such as `500r/s`, `500r/60s`, `500r/m`, `500r/60m`, `500r/h`, `500r/60h` and `500r/d`. Exceeding the limit returns a [503 status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) with a [after retry](https://developer.mozilla.org/zh-) CN/ docs/Web/HTTP/Headers/Retry-After) response header.

:::


## `waf_cache`

* syntax: waf_cache \<capacity=*n*\>
* default: —
* context: http, server, location

Set the parameters related to cache rule inspection results.

* `capacity`: For some inspection items with caching mechanism enabled, the maximum number of inspection results per inspection item to be cached for each inspection target.


::: tip Cache-enabled inspections

Cache-enabled inspections refer to all inspections except CC protection, I
P black and white list inspection, and POST inspection.

:::


::: tip Performance optimization suggestions

Too small a `capacity` will result in frequent cache cleanups, 
increasing memory fragmentation and reducing performance. 
So please set it reasonably according to your actual needs.

:::


::: tip CHANGES IN LATEST 'Current' VERSION

* syntax: waf_cache \<*off* | *on*\> \[capacity=*50*\]
* default: waf_cache *off* \capacity=*50*
* context: server, location

:::


## `waf_modsecurity` <Badge text="Latest Current version only" type="tip"/>

* syntax: waf_modsecurity \<*on* | *off*\> \<file=*/path/to/modsecuriy/rules.conf\*> \<remote_key=*key*\> \<remote_url=*url*\>
* default: waf_modsecurity off
* context: http, server, location

Use ModSecurity's rules.

* `file`: absolute path to the rule file.
* `remote_key`: key for reading remote rule file.
* `remote_url`: URL to read the remote file.

You can refer to the use case in [Enable ModSecurity | Best Practices](/practice/enable-modsecurity.md).

::: tip Note

* If you use the parameter `remote_key`, you must also use the parameter `remote_url`.
* If you use the parameters `file`, `remote_key` and `remote_url` at the same time, then both rules will be loaded.

:::

## `waf_modsecurity_transaction_id` <Badge text="Latest Current version only" type="tip"/>

* Configuration syntax: waf_modsecurity_transaction_id \<*string*\>
* Default configuration: waf_modsecurity off
* Configuration segments: http, server, location

Specify the transaction ID for ModSecurity. you can use constant strings and variables here, here is an example.

```nginx
server {
    location /file/ {
        waf_modsecurity_transaction_id "$host-file";
    }

    location /api/ {
        waf_modsecurity_transaction_id "$host-api";
    }
}
```


## `waf_captcha` <Badge text="Latest Current version only" type="tip"/>

* syntax: waf_captcha \<*on* | *off*\> \<prov=*hCaptcha* | *reCAPTCHAv2* | *reCAPTCHAv3*\> \<file=*/full/path*\> \<secret=*your_secret*\> \[score=*0.5*\] \[expire=30m\] \[api=*uri*\] \[verify=*/captcha*\]
* default: waf_captcha off
* context: http, server, location

Use CAPTCHA for human identification of the client.

* `prov`: CAPTCHA platform with [hCaptcha](https://www.hcaptcha.com/), [reCAPTCHAv2](https://www.google.com/recaptcha/about/) and [reCAPTCHAv3](https:/ /www.google.com/recaptcha/about/).
* `file`: the absolute path of the HTML file used to access the CAPTCHA, you can find the corresponding HTML file under `assets/`.
* `secret`: the key used to confirm the result of the CAPTCHA, you can get it from the corresponding CAPTCHA platform.
* `socre`: when `prov=reCAPTCHAv3`, this indicates the minimum value of the CAPTCHA scoring result, below which the validation will be considered as failed. The default value is `0.5`.
* ``expire``: the expiration time of the CAPTCHA, after which the CAPTCHA needs to be re-run. The default is 30 minutes.
* `api`: The API provided by the CAPTCHA platform to the server to confirm the result of the CAPTCHA run.
    * If `prov=hCaptcha`, the default value is `https://hcaptcha.com/siteverify`.
    * If `prov=reCAPTCHAv2`, then the default value is `https://www.recaptcha.net/recaptcha/api/siteverify`.
    * If `prov=reCAPTCHAv3`, the default value is `https://www.recaptcha.net/recaptcha/api/siteverify`.
* `verify`: the url used by the captcha to submit the token to the backend, defaults to `/captcha`.

You can refer to the use case in [Enable Captcha | Best Practices](/practice/enable-captcha.md).

:::tip Fill in your Sitekey

You can find the HTML used for each CAPTCHA in the directory `assets/` and make a copy of it, then fill in your `Sitekey' in the copy.

:::


## `waf_verify_bot` <Badge text="Latest Current version only" type="tip"/>

* syntax: waf_verify_bot \<*off* | *on* | *strict*\> \[*who*\] ...
* default: waf_captcha *off* *GoogleBot* *BingBot* *BaiduSpider* *YandexBot*
* context: http, server, location

Verify friendly crawlers, such as GoogleBot.

If the first parameter is `on` then all subsequent checks will be stopped and the request will be released.

If the first parameter is `strict`, then if the User-Agent of a request is correct, but the IP address is incorrect, it will be blocked (with false positives).

* `who`: the name of the crawler, values include `GoogleBot`, `BingBot`, `BaiduSpider` and `YandexBot`. If not specified, the default is all.

::: tip How IT WORKS?

* [Overview of Google crawlers (user agents) | Search Central](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers)
* [Googlebot Verification | Google Search Central | Google Developers](https://developers.google.com/search/docs/advanced/crawling/verifying-googlebot)
* [Which Crawlers Does Bing Use? - Bing Webmaster Tools](https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0)
* [How to Verify Bingbot](https://www.bing.com/webmasters/help/how-to-verify-bingbot-3905dc26)
* [Baidu User Service Center - Webmaster Platform](https://help.baidu.com/question?prod_id=99&class=0&id=3001)
* [How to check that a robot belongs to Yandex](https://yandex.com/support/webmaster/robot-workings/check-yandex-robots.html)

:::


## `waf_under_attack`

* syntax: waf_under_attack \<*on* | *off*\> \[uri=*str*\]
* default: waf_under_attack off
* context: http, server, location

If your site is under attack you can try using this directive.
Turning it on forces a five-second delay on each user's first visit and automatically jumps to the page pointed to by `uri`.

* `uri`: can be a full URL or a path. For example, `https://example.com/attack.html` or `/attack.html`.

You can refer to the use case in [protect against distributed CC Attacks (distributed HTTP flooding) | Best Practices](/practice/protect-against-distributed-http-flood.md).

::: tip Tips

The page pointed to by `uri` should automatically jump to the page the user wants to visit after five seconds, the URL of the page can be obtained by querying a string with the parameter `target`.

`assets/under-attack.html` is a sample page, you should copy this file to your web directory and configure `uri` correctly.

Naturally, you can also write your own html file and point to it with `uri`.

:::


::: tip CHANGES IN LATEST 'Current' VERSION

In the LTS version we implemented this feature through redirects, but many reasons (such as caching and CDN) would cause the redirects to fail or not validate the cookie properly.
So we changed the implementation so that we return the specified page by changing the response body in a way that does not cause the URI to change.

We also added the response header `Cache-Control: no-store` to avoid the impact of caching.

* Removed the parameter `uri`.
* Added parameter `file`, the value of which should be the absolute path to an HTML file, e.g. `file=/path/to/under-attack.html`. This HTML has only one function, i.e. it refreshes automatically after five seconds.

:::


## `waf_priority`

* syntax: waf_priority "*str*"
* default: waf_priority "W-IP IP CC UNDER-ATTACK W-URL URL ARGS UA W-REFERER REFERER COOKIE ADV"
* context: http, server, location

Set the priority of each inspection process, except for POST detection, which always has the lowest priority.

* `UNDER-ATTACK`: Directive `waf_under_attack`.
* `W-IP`: IP whitelist inspection
* `IP`: IP Blacklist inspection
* `CC`: CC protection
* `W-URL`: URL whitelist inspection
* `URL`: URL blacklist inspection
* `ARGS`: URL parameter (query string) blacklist inspection
* `UA`: User-Agent blacklist inspection
* `W-REFERER`: Referer whitelist inspection
* `REFERER`: Referer blacklist inspection
* `COOKIE`: Cookie blacklist inspection
* `ADV`: Advanced rules.

::: warning WARNING

`str` must be wrapped in single or double quotes, and `str` must contain all of the inspection process.

:::


::: tip CHANGES IN LATEST 'Current' VERSION

* default: waf_priority "W-IP IP VERIFY-BOT CC CAPTCHA UNDER-ATTACK W-URL URL ARGS UA W-REFERER REFERER COOKIE POST MODSECURITY"

***

* `VERIFY-BOT`: friendly crawler verification.
* `CAPTCHA`: Captcha.
* `POST`: Request body blacklist.
* `ModSecurity`.
* `ADV`: Removed.

:::


## `waf_http_status`

* syntax: waf_http_status \[general=*http_status_code*\] \[cc_deny=*http_status_code*]
* default: waf_http_status general=403 cc_deny=503
* context: http, server, location

This directive is used to set the HTTP status code returned when a request is blocked.

* `general`: Indicates the HTTP status code returned when all blacklist-based inpection are triggered.
* `cc_deny`: Indicates the HTTP status code returned when CC protection is triggered.


