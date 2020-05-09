function ld(pcIncrement,cycles,param1,param2){
    //LD param1,param2
    //programmatically create a load function. params are functions that return pointers to an address or register.
    return function(gb){
        gb.set(param1(gb),gb.get(param2(gb)));
        gb.cycleTimeout = cycles;
        gb.pc += pcIncrement;
    }
}
function ld16(pcIncrement,cycles,param1,param2){
    //LD param1,param2
    //programmatically create a 16-bit load function. params are functions that return pointers to an address or register.
    return function(gb){
        gb.set16(param1(gb),gb.get16(param2(gb)));
        gb.cycleTimeout = cycles;
        gb.pc += pcIncrement;
    }
}
function ldHlPlusOrMinus(order,increment){
    //LD A|(HL+/HL-),A|(HL+/HL-)
    //programmatically create a load and increment function.
    return function(gb){
        if(order){
            //(HL) first
            gb.set(gb.get16("hl"),gb.a);
        }else{
            //A first
            gb.set("a",gb.get16("hl"));
        }
        gb.set16("hl",(gb.get16("hl")+increment)&0xffff) //
        gb.cycleTimeout = 8;
        gb.pc += 1;
    }
}
function nop(gb){
    //NOP
    gb.pc++;
    gb.cycleTimeout = 4;
}
function inc(cycles,param){
    //INC param1
    //programmatically generate a increment function.
    return function(gb){
        gb.set(param(gb),(gb.get(param(gb))+1)&0xff);
        gb.pc++;
        gb.cycleTimeout = cycles;
    }
}
function inc16(cycles,param){
    //INC param1
    //programmatically generate a 16 bit increment function.
    return function(gb){
        gb.set16(param(gb),(gb.get16(param(gb))+1)&0xffff);
        gb.pc++;
        gb.cycleTimeout = cycles;
    }
}