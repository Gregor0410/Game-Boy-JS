const fs = require("fs");
let data = new Uint8Array(0xffff);
const gameBoyInitialState = [0x80,0xbf,0xf3,0x00,0xbf,0x00,0x3f,0x00,0x00,0xbf,0x7f,0xff,0x9f,0x00,0xbf,0x00,0xff,0x00,0x00,0xbf,0x77,0xf3,0xf1];
const gameBoyInitialState2 = [0x91,0x00,0x00,0x00,0x00,0x00,0xfc,0xff,0xff];
gameBoyInitialState.forEach((byte,i)=>data[0xff10+i]=byte);
gameBoyInitialState2.forEach((byte,i)=>data[0xff40+i]=byte);
let buffer = Buffer.from(data)
fs.writeFile("data.bin",buffer,(err)=>{});