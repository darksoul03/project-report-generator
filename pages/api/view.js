import Database from 'better-sqlite3';

export default function handler(req, res) {
  const db = new Database('./data/projects.db', { readonly: true });
  const projects = db.prepare('SELECT * FROM projects').all();
  res.status(200).json(projects);
}
