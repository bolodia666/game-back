# PORT=80 node src/index.js

### Get RTP settings
```
curl -X POST <host>/settings/get
   -H 'Content-Type: application/json'
   -d '{}'
```

### Set RTP settings
```
curl -X POST <host>/settings/set
   -H 'Content-Type: application/json'
   -d '{"rtp": 95}'
```

### Init game session
```
curl -X POST <host>/game/init
   -H 'Content-Type: application/json'
   -d '{}'
```

### Play round within session (place bet)
```
curl -X POST <host>/game/play
   -H 'Content-Type: application/json'
   -d '{"sessionId": "f18e530e-1d83-4c8c-aeef-76548d27f62c"}'
```