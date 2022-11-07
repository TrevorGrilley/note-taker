const express = require('express');
const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//html routes start
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  })
  
  app.get('/notes', (req, res)=> {
      res.sendFile(__dirname + '/public/notes.html');
  })
  //html routes end
  
  //api routes start
    app.get("/api/notes", function(req, res) {   
    res.json(data);
    });

    function newNote(body, Array) {
        const notes = body;
        if (!Array.isArray(Array))
            Array = [];
        
        if (Array.length === 0)
            Array.push(0);
    
        body.id = Array[0];
        Array[0]++;
    
        Array.push(notes);
        fs.writeFileSync(
            path.join(__dirname, './db/db.json'),
            JSON.stringify(Array, null, 2)
        );
        return notes;
    }
    
    app.post('/api/notes', (req, res) => {
        const notes = newNote(req.body, allNotes);
        res.json(notes);
    });
    
  
    app.listen(PORT, () => {
      console.log(`API server now on port ${PORT}!`);
    });
