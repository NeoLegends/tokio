window.BENCHMARK_DATA = {
  "lastUpdate": 1611059815795,
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
    ],
    "sync_semaphore": [
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
        "date": 1611059804402,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15964,
            "range": "± 3828",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1121,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 664,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15728,
            "range": "± 5653",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1120,
            "range": "± 52",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
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
        "date": 1611059814753,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 201332,
            "range": "± 15079",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 748539,
            "range": "± 38055",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5656360,
            "range": "± 972193",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20865049,
            "range": "± 2601079",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}