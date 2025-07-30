# Project Report Generator

This is a full-stack web app built with **Next.js** that lets you download project data from an **SQLite database** into a formatted `.xlsx` Excel report.

---

## Features

- Displays a download button on the frontend
- Generates Excel report (`.xlsx`) on backend using [ExcelJS](https://github.com/exceljs/exceljs)
- Uses [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) for fast and simple SQL queries
- Preloaded with 20 sample project entries

---

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [ExcelJS](https://github.com/exceljs/exceljs)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)

---

## Installation

```bash
git clone https://github.com/your-username/project-report-app.git
cd project-report-app
npm install
```
---
### Initialize the Database

Run the DB seeding script to create the projects table and insert sample data:
```
node data/init-db.js
```
---
### Run the Dev Server

`npm run dev`

---
### Project Structure

```
project-report-app/
├── data/
│   └── init-db.js         # Creates DB and inserts 20 sample rows
├── pages/
│   ├── api/
│   │   └── download-report.js  # API to generate and stream Excel
|   |   └── view.js # API to view the query result in json formatparam
│   └── index.js           # Main UI page with download button
├── public/
├── package.json
├── README.md

```
---
### SQLite DB Location

The SQLite database file is stored at:

`./data/projects.db`

You can open it using:

- DB Browser for SQLite
- VS Code extension: SQLite Viewer
- sqlite3 CLI

---
### API Endpoints

```
GET /api/download-report → Downloads the .xlsx file
GET /api/view → JSON response with all project rows (for debugging)
```
---
### Sample Data Format

Each project record contains:

- id: Project ID
- name: Project Name
- description: Project Description
- start_date: Start Date
- end_date: End Date
---