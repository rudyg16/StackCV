const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();//verbose creates more detailed error logging 
const path = require('path');

const dbPath = path.join(__dirname,'stackcv.db');//get path of db to be created
const schemaPath = path.join(__dirname, 'stackcvschema.sql');//Path to schema,__dirname gets abs path of parent directory of js file 

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Failed to create/open DB:', err.message);
        return;
    }

    console.log('Database opened at', dbPath);
    const schemaSQL = fs.readFileSync(schemaPath, 'utf8');// Read SQL schema
    
    db.exec(schemaSQL, (err) => { // Execute the SQL commands to create tables
        if (err) {
            console.error('Failed to initialize schema:', err.message);
        } else {
            console.log('Schema created successfully');
        }

        // Optional: close DB when done
        db.close();
    });
});

    