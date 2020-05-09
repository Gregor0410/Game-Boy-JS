class Motherboard{
    constructor(){
        this.speedMultiplier = 1;
        this.ram = new Uint8Array(0x2000);
        this.gpu = new GPU();
    }
    get(pointer){
        //get a value using the following memory map:

        // Interrupt Enable Register
        // --------------------------- FFFF
        // Internal RAM
        // --------------------------- FF80
        // Empty but unusable for I/O
        // --------------------------- FF4C
        // I/O ports
        // --------------------------- FF00
        // Empty but unusable for I/O
        // --------------------------- FEA0
        // Sprite Attrib Memory (OAM)
        // --------------------------- FE00
        // Echo of 8kB Internal RAM
        // --------------------------- E000
        // 8kB Internal RAM
        // --------------------------- C000
        // 8kB switchable RAM bank
        // --------------------------- A000
        // 8kB Video RAM
        // --------------------------- 8000 --
        // 16kB switchable ROM bank |
        // --------------------------- 4000 |= 32kB Cartridge
        // 16kB ROM bank #0 |
        // --------------------------- 0000 --
        if(pointer >=0x0 && pointer <0x8000){
            //TODO: implement cartridge class
            //return this.cartridge.getrom(pointer)
            return 0x0;
        }else if(pointer >=0x8000 && pointer<0xa000){
            return this.gpu.vram[pointer-0x8000];
        }else if(pointer>=0xa000 && pointer<0xc000){
            //TODO:implement cartridge class
            //return this.cartridge.getram(pointer)
            return 0x0;
        }else if(pointer>=0xc000 && pointer < 0xe000){
            return this.ram[pointer-0xc000];
        }else if(pointer>=0xe000&&pointer<0xfe00){
            return this.ram[pointer-0xe000]
        }else if(pointer>=0xfe00 && pointer < 0xfea0){
            return this.gpu.spriteAtrribMemory[pointer-0xfe00];
        }else if(pointer>=0xfea0 && pointer <0xff80){
            //TODO:implement special registers and I/O
            //return this.hardwareRegisters.get(pointer-0xfea0);
            return 0;
        }else if(pointer>=0xff80 && pointer <0xffff){
            return this.internalRam[pointer-0xff80];
        }else if(pointer==0xffff){
            //return this.interrupter.enable;
            return 0;
        }else{
            console.error("Bad address");
        }
    }
    set(pointer,value){
        //set a value using the following memory map:

        // Interrupt Enable Register
        // --------------------------- FFFF
        // Internal RAM
        // --------------------------- FF80
        // Empty but unusable for I/O
        // --------------------------- FF4C
        // I/O ports
        // --------------------------- FF00
        // Empty but unusable for I/O
        // --------------------------- FEA0
        // Sprite Attrib Memory (OAM)
        // --------------------------- FE00
        // Echo of 8kB Internal RAM
        // --------------------------- E000
        // 8kB Internal RAM
        // --------------------------- C000
        // 8kB switchable RAM bank
        // --------------------------- A000
        // 8kB Video RAM
        // --------------------------- 8000 --
        // 16kB switchable ROM bank |
        // --------------------------- 4000 |= 32kB Cartridge
        // 16kB ROM bank #0 |
        // --------------------------- 0000 --
        if(pointer >=0x0 && pointer <0x8000){
            //TODO: implement cartridge class
            //return this.cartridge.setrom(pointer)
            return;
        }else if(pointer >=0x8000 && pointer<0xa000){
            this.gpu.vram[pointer-0x8000]=value;
        }else if(pointer>=0xa000 && pointer<0xc000){
            //TODO:implement cartridge class
            //return this.cartridge.setram(pointer-0xa000,value)
            return;
        }else if(pointer>=0xc000 && pointer < 0xe000){
            this.ram[pointer-0xc000]=value;
        }else if(pointer>=0xe000&&pointer<0xfe00){
            this.ram[pointer-0xe000]=value;
        }else if(pointer>=0xfe00 && pointer < 0xfea0){
            this.gpu.spriteAtrribMemory[pointer-0xfe00]=value;
        }else if(pointer>=0xfea0 && pointer <0xff80){
            //TODO:implement special registers and I/O
            //return this.hardwareRegisters.get(pointer-0xfea0);
            return;
        }else if(pointer>=0xff80 && pointer <0xffff){
            this.internalRam[pointer-0xff80]=value;
        }else if(pointer==0xffff){
            //this.interrupter.enable = ;
            return;
        }else{
            console.error("Bad address");
        }
    }
}