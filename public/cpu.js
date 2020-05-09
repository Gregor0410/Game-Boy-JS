//helper functions
class CPU{
    constructor(motherboard){
        this.clockSpeed = 4194304;
        //initialise memory and registers
        this.mb = motherboard;
        //this.memory = new Uint8Array(0xffff).fill(0);
        this.a = 0x01;
        this.b = 0x00;
        this.c = 0x13;
        this.d = 0x00;
        this.e = 0xd8;
        this.f = 0xb0;
        this.h = 0x01;
        this.l = 0x4d;
        this.sp = 0xfffe;
        this.pc = 0x100;
        this.cycleTimeout = 0; //sets the number of cpu cycles required for the last decoded operation

    }
    cycle(){
        if(!this.cycleTimeout){
            opcodes[this.memory[this.pc]](this);
            this.cycleTimeout--;
        }else{
            this.cycleTimeout--;
        }
    }
    get(pointer){
        //gets data from the specified memory address or register
        //have to do this because it allows for easy specification of parameters when programmatically generating assembly functions
        if(typeof pointer=="number"){
            return this.memory[pointer];
        }else{
            //if pointer is non numeric, get the register that matches the name of the string.
            switch (pointer) {
                case "a":
                    return this.a;                   
                case "b":
                    return this.b;                   
                case "c":
                    return this.c;                    
                case "d":
                    return this.d;                    
                case "e":
                    return this.e;
                case "f":
                    return this.f;  
                case "h":
                    return this.h;     
                case "l":
                    return this.l;  
            }
        }
    }
    set(pointer,value){
        //sets an address or register to the given value.
        //have to do this because it allows for easy specification of parameters when programmatically generating assembly functions
        if(typeof pointer=="number"){
            this.memory[pointer]=value;
        }else{
            //if pointer is non numeric, set the register that matches the name of the string.
            switch (pointer) {
                case "a":
                    this.a = value;
                    break;
                case "b":
                    this.b = value;
                    break;
                case "c":
                    this.c = value;
                    break;
                case "d":
                    this.d = value;
                    break; 
                case "e":
                    this.e = value;
                    break; 
                case "f":
                    this.f = value;
                    break;
                case "h":
                    this.h = value;
                    break;
                case "l":
                    this.l = value;
                    break;
            }
        }
    }
    get16(pointer){
        //gets 2 bytes from the specified memory address or register
        //have to do this because it allows for easy specification of parameters when programmatically generating assembly functions
        if(typeof pointer=="number"){
            //memory is little endian
            return joinBytesLE([this.memory[pointer],this.memory[pointer+1]]);
        }else{
            //if pointer is non numeric, get the 16 bit register that matches the name of the string.
            //16 bit registers are either sp or pc or combinations of two 8 bit registers
            switch (pointer) {
                case "af":
                    return joinBytes([this.a,this.f]);                   
                case "bc":
                    return joinBytes([this.b,this.c]);                   
                case "de":
                    return joinBytes([this.d,this.e]);                    
                case "hl":
                    return joinBytes([this.h,this.l]);                    
                case "sp":
                    return this.sp
                case "pc":
                    return this.pc;  
            }
        }
    }
    set16(pointer,value){
        //sets an address or register to the given 16 bit value.
        //have to do this because it allows for easy specification of parameters when programmatically generating assembly functions
        if(typeof pointer=="number"){
            this.memory[pointer]=getLS(value);
            this.memory[pointer+1]=getMS(value);
        }else if(pointer == "sp"){
            this.sp=value;
        } 
        else{
            //if pointer is non numeric, set the register that matches the name of the string.
            switch (pointer) {
                case "af":
                    this.a = getMS(value);
                    this.f = getLS(value);
                    break;
                case "bc":
                    this.b = getMS(value);
                    this.c = getLS(value);
                    break;
                case "de":
                    this.d = getMS(value);
                    this.e = getLS(value);
                    break;
                case "hl":
                    this.h = getMS(value);
                    this.l = getLS(value);
                    break; 
                case "sp":
                    this.sp = value;
                case "pc":
                    this.pc = value;
            }
        }
    }
}