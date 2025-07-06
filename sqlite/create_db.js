import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';
// Default state of DB.
// Load your SQL
const sql = fs.readFileSync(
    path.join(__dirname, '../mysqlite/stackcv_schema.sql'),
    'utf8'
);

// Open (or create) the DB file
const dbPath = path.join(app.getPath('userData'), 'stackcv.db');
const db = new sqlite3.Database(dbPath);

// 3. Execute all statements in order
db.serialize(() => {
    db.exec(sql, (err) => {
        if (err) {
            console.error('Failed to initialize schema:', err);
        } else {
            console.log('SQLite schema initialized.');
        }
    });
});

