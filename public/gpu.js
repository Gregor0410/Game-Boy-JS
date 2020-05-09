class GPU{
    constructor(){
        this.vram = new Uint8Array(0x2000);
        this.spriteAtrribMemory = new Uint8Array(0xa0);
    }
}