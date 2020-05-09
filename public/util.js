//Helper functions
function getLS(data){
    //gets the least significant byte of a 16 bit number
    return data & 0xff;
}
function getMS(data){
    //gets the most significant byte of a 16 bit number
    return data>>8;
}
function splitBytes(data){
    //takes a 16 bit number and splits it into an array of two bytes
    return [getMS(data),getLS(data)];
}
function joinBytes(data){
    //takes an array of two bytes and joins them into a 16 bit number(big endian)
    return (data[0]<<8) + data[1];
}
function joinBytesLE(data){
    //takes an array of two bytes and joins them into a 16 bit number(little endian)
    return (data[1]<<8) + data[0];
}
function rotateLeft(data){
    //rotates byte left
    return ((data<<1)+(data>>7))&0xff;
}
function rotateRight(data){
    //rotates byte right
    return ((data <<7)+(data>>1))&0xff;
}
