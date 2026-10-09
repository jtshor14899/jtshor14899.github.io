/* Defensive program event log. Newest entries render first (sorted by date in site.js).
   Add one object per event. Fields:
     date  : YYYY-MM-DD
     type  : deploy | telemetry | detection | hardening | exercise | incident | note
     title : one line
     body  : one or two sentences (HTML allowed)
     tags  : optional list of short labels (ATT&CK IDs, hosts, tools)
     link  : optional URL to a public write-up or repo
   Keep it synthetic-safe: no real IPs, MACs, or credentials. */
window.DEFENSE_LOG = [
  {
    date: "2026-10-09",
    type: "note",
    title: "Blue-team program defined",
    body: "Published the plan, the attack-path coverage matrix, and this log. Scope: the five-host, three-domain GOAD range on the Proxmox cluster, instrumented with Wazuh and Sysmon.",
    tags: ["GOAD", "Wazuh", "Proxmox"]
  }
];
