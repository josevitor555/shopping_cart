import { fileURLToPath } from 'url';
import { dirname } from 'path';

import express from 'express';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + '/public'));
app.use(express.json());


app.get('/', async function(request, response) {
    response.sendFile('index.html', {
        root: 'public'
    });
});

app.listen(3000, () => {
    console.log('Listening on 3000 port.');
});