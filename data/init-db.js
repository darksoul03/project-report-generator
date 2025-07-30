const Database = require('better-sqlite3');
const db = new Database('./data/projects.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    start_date TEXT,
    end_date TEXT
  )
`).run();

const sampleProjects = Array.from({ length: 20 }).map((_, i) => ({
  name: `Project ${i + 1}`,
  description: `Description of project ${i + 1}`,
  start_date: `2024-01-${String((i % 28) + 1).padStart(2, '0')}`,
  end_date: `2024-12-${String((i % 28) + 1).padStart(2, '0')}`,
}));

const insert = db.prepare(`
  INSERT INTO projects (name, description, start_date, end_date)
  VALUES (@name, @description, @start_date, @end_date)
`);

for (const project of sampleProjects) {
  insert.run(project);
}

console.log('Database initialized with 20 sample projects.');
