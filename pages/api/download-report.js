import { NextApiRequest, NextApiResponse } from 'next';
import ExcelJS from 'exceljs';
import Database from 'better-sqlite3';

export default async function handler(req, res) {
  const db = new Database('./data/projects.db', { readonly: true });
  const projects = db.prepare('SELECT * FROM projects').all();

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Projects');

  sheet.columns = [
    { header: 'Project ID', key: 'id', width: 10 },
    { header: 'Project Name', key: 'name', width: 25 },
    { header: 'Description', key: 'description', width: 40 },
    { header: 'Start Date', key: 'start_date', width: 15 },
    { header: 'End Date', key: 'end_date', width: 15 },
  ];

  sheet.addRows(projects);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=projects.xlsx');

  await workbook.xlsx.write(res);
  res.end();
}
