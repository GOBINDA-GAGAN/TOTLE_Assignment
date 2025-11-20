# Topics API

## 📹 Video Explanation (2 min):** *[video link](https://drive.google.com/file/d/1Ba4NO8OhFXj8FqBzbGglGLWD7shLN9fJ/view?usp=sharing)*

A lightweight Node.js + Express API that returns topic data from a JSON file with search and sorting features. Clean, simple, and production-ready.

---

## 1. Project Overview

This API exposes one main endpoint:

```
GET /api/topics?search=<query>&sort=name
```

Features:

* Case-insensitive search
* Optional alphabetical sort
* Proper error handling (`200`, `400`, `500`)
* Data stored in `data/topics.json`

---

## 2. Prerequisites

* Node.js 16+
* npm 8+
* Terminal / CMD

---

## 3. Project Structure

```
project/
├── server.js
├── routes/topicsRoute.js
├── controllers/topicsController.js
├── utils/readJson.js
└── data/topics.json
```

---

## 4. Quick Start

```bash
git clone <repo-url>
cd project
npm install
```

Create `.env`:

```
PORT=3000
NODE_ENV=development
```

Run:

```bash
npm run dev
# or
node server.js
```

Visit:

```
http://localhost:3000/api/topics?search=blog
```

---

## 5. API Usage

Examples:

```
/api/topics?search=seo
/api/topics?search=blog&sort=name
```

Response sample:

```json
{
  "status": 200,
  "results": 2,
  "topics": [
    { "id": "65f9...", "name": "Easy SEO", "category": "SEO" }
  ]
}
```


---

## 6. Troubleshooting

* **ENOENT file error** → check `data/topics.json` path
* **Invalid query** → `search` param is required
* **Port already in use** → change `PORT` in `.env`

---
