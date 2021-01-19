window.BENCHMARK_DATA = {
  "lastUpdate": 1611059798350,
  "repoUrl": "https://github.com/NeoLegends/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "heng@cantab.net",
            "name": "Henry Gomersall",
            "username": "hgomersall"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5402c948eebbb4c6c695e156d68ce495a43ea81a",
          "message": "io: clarify AsyncFd docs about changes of the inner fd (#3430)",
          "timestamp": "2021-01-17T21:39:58+01:00",
          "tree_id": "63ed16dcd34c11314b7bda2dcb983946b5669a1e",
          "url": "https://github.com/NeoLegends/tokio/commit/5402c948eebbb4c6c695e156d68ce495a43ea81a"
        },
        "date": 1611059797382,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 971,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14106,
            "range": "± 5221",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1044,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14245,
            "range": "± 7443",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 565,
            "range": "± 45",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}