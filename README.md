# jtshor14899.github.io

Personal portfolio site for **James Tyler Short** — cybersecurity professional.

Static site hosted on GitHub Pages. No build step: plain HTML, CSS, and vanilla JS.

```
index.html                 # portfolio: about, skills, projects, contact
defense.html               # Defense tab: GOAD blue-team program (range, plan, coverage matrix, event log)
assets/css/site.css        # styles for both pages
assets/js/site.js          # nav, scroll-spy, lightbox, defense-page renderers
assets/js/defense-log.js   # event log entries for defense.html (edit this to add events)
images/                    # screenshots & diagrams (synthetic data only)
```

## Adding an event to the Defense log

Append an object to `window.DEFENSE_LOG` in `assets/js/defense-log.js`:

```js
{ date: "2026-10-20", type: "detection", title: "Kerberoasting rule validated",
  body: "Ran the GOAD write-up from the attacker box; Wazuh alerted in 40 s.",
  tags: ["T1558.003", "winterfell"], link: "https://..." }
```

Types: `deploy`, `telemetry`, `detection`, `hardening`, `exercise`, `incident`, `note`.
When a detection or hardening is proven, change the matching `st-planned` pill in the
`defense.html` coverage matrix to `st-building`, `st-validated`, or `st-hardened`; the
hero counters update automatically.

Keep the public site synthetic: no real IPs, MACs, hostnames, or credentials.

Live at https://jtshor14899.github.io/
