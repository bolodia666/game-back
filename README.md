# Horserace demo server
```bash
npm install
PORT=80 node src/index.js
```

### Get RTP settings
```bash
curl -X POST <host>/settings/get
   -H 'Content-Type: application/json'
   -d '{}'
```
```javascript
{
  "rtp": 96
}
```
### Set RTP settings
```bash
curl -X POST <host>/settings/set
   -H 'Content-Type: application/json'
   -d '{"rtp": 95}'
```
```
ok
```

### Init game session
```bash
curl -X POST <host>/game/init
   -H 'Content-Type: application/json'
   -d '{}'
```
```javascript
{
  "sessionId": "7898a5de-3b26-4d13-a3c5-5326658615e9",
  "user": {
    "balance": 100
  }
}
```

### Play round within session (place bet)
```bash
curl -X POST <host>/game/play
   -H 'Content-Type: application/json'
   -d '{"sessionId": "f18e530e-1d83-4c8c-aeef-76548d27f62c"}'
```
```javascript
{
  "user": {
    "balance": 100.98
  },
  "round": {
    "bet": 1,
    "win": 1.98,
    "horses": 7
  }
}
```