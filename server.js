const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3000
var connectCounter = 0;
const path = require('path')
var gamePermission = 0;


app.get('/src/components/assets/walls.png', function (req, res) {
    res.sendFile(__dirname + '/src/components/assets/walls.png')
})

app.get('/src/components/assets/up.png', function (req, res) {
    res.sendFile(__dirname + '/src/components/assets/up.png')
})

app.get('/src/components/assets/front.png', function (req, res) {
    res.sendFile(__dirname + '/src/components/assets/front.png')
})

app.get('/src/components/assets/back.png', function (req, res) {
    res.sendFile(__dirname + '/src/components/assets/back.png')
})

app.get('/src/components/assets/side.png', function (req, res) {
    res.sendFile(__dirname + '/src/components/assets/side.png')
})

// if (connectCounter == 2) {
app.use('/', express.static(__dirname + "/dist"))
// }
// else {
//     app.get('/', function (req, res) {
//         res.redirect('/lobby');
//     })
// }

//}
app.get('/lobby', function (req, res) {

    res.sendFile(__dirname + '/dist/lobby.html')
})

io.on('connection', (socket) => {
    connectCounter++;
    if (connectCounter >= 3) {
        socket.emit('err', { message: "Overload, disconnected..." })
        socket.disconnect()
        console.log('Overload, disconnected.')
        connectCounter--;
    }
    else {
        console.log('A user connected with an ID: ' + socket.id);
        socket.emit('setID', { id: socket.id });
        setInterval(function () {
            socket.emit('currentCounter', { counter: connectCounter })
        }, 250);
        console.log("Current players: " + connectCounter)
        if (connectCounter == 2) {
            gamePermission = 1;
        }
        socket.on('changeC', function (changeC) {
            var changes = changeC;
            console.log(changes)
            socket.emit('changeCserver', { changeCserver: changes })
        })
        socket.on('changeM', function (changeM) {
            var mapGame = changeM;
            console.log(mapGame)
            socket.emit('changeMserver', { changeMserver: mapGame })
        })
    }
    socket.on('disconnect', function () {
        connectCounter--;
        console.log('A user with an ID: ' + socket.id + " has disconnected.")
        socket.emit('deletePlayer', { id: socket.id });
        setInterval(function () {
            socket.emit('currentCounter', { counter: connectCounter })
        }, 250);
        console.log("Current players: " + connectCounter)
        gamePermission = 0;
    })
});

server.listen(PORT, () => {
    console.log(`Server is working on PORT: ${PORT}!`);
});