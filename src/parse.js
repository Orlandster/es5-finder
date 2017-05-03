const fs = require('fs');

const parse = (files) => {
    for(let i = 0; i < files.length; i++){
        fs.readFile(files[i], function (err, data) {
            if (err) throw err;

            let es5Usage = 0;
            let es5Keywords = ['var '];
            let es6Keywords = ['const ', 'let ', 'class '];

            for(let i = 0; i < es5Keywords.length; i++){
                if(data.indexOf(es5Keywords[i]) >= 0) {
                    es5Usage++;
                }
            }

            for(let i = 0; i < es6Keywords.length; i++){
                if(data.indexOf(es6Keywords[i]) >= 0) {
                    es5Usage--;
                }
            }

            if(es5Usage > 0) {
                console.log(files[i]);
            }
        });
    }

}

module.exports = parse;