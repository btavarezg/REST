const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(':memory');

db.serialize(() => {
    const sql = 'CEATE TABLE IF NOT EXISTS todos (id integer primary key,title)';
    db.run(sql);
    db.run('INSERT INTO todos(title) VALUES(?)','buy the milk');
    db.run('INSERT INTO todos(title) VALUES(?)','rent a car');
    db.run('INSERT INTO todos(title) VALUES(?)','feed the cat');
});

class Todo {
    constructor(id,title){
        this.id = id;
        this.title = title;
    }

    static all(callback){
        db.all('SELECT * FROM todos',callback);
    };

    static add(todo){
        cons
    }
}