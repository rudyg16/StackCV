import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';
import {app} from 'electron';
import createDatabase from './create_db';'./create_db'

const dbPath = path.join(app.getPath('userData'),'stackcv.db');

if (fs.existsSync(dbPath)) {
    console.log('Database file already exists at:', dbPath);
} else {
    console.log('Database does not exist yet. Initializing...');
    createDatabase();
}
const jakeTempPath = path.join(__dirname,'../templates/jakes/template.tex');
const jakeFullPath = path.join(__dirname, '../templates/jakes/full.tex');

const insertTemplate = dbPath.prepare("INSERT INTO templates(name,file_path) VALUES(?,?");

const insertJakeSections =dbPath.prepare("INSERT INTO templates()") 

