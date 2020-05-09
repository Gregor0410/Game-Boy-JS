//tests the efficiency of functions
function evaluateEfficiency(){
    const testGB = new GameBoy();
    console.log("======================");
    console.log("Efficiency tests");
    console.log("Memory read/write")
    console.log(`8 bit load: ${timeFunction(()=>testGB.get(0xff00))} clock cycles`);
    console.log(`8 bit write: ${timeFunction(()=>testGB.set(0xff00,0xff))} clock cycles`);
    console.log(`16 bit load: ${timeFunction(()=>testGB.get16(0xff00))} clock cycles`);
    console.log(`16 bit write: ${timeFunction(()=>testGB.set16(0xff00,0xff00))} clock cycles`);
    console.log("Register read/write");
    console.log(`8 bit load: ${timeFunction(()=>testGB.get("a"))} clock cycles`);
    console.log(`8 bit write: ${timeFunction(()=>testGB.set("a",0xff))} clock cycles`);
    console.log(`16 bit load: ${timeFunction(()=>testGB.get16("hl"))} clock cycles`);
    console.log(`16 bit write: ${timeFunction(()=>testGB.set16("hl",0xff00))} clock cycles`);
    console.log(`Assembly Functions`);
    console.log(`LD BC,d16: ${timeFunction(()=>opcodes[0x01](testGB))} clock cycles`);
    console.log(`LD (BC),A: ${timeFunction(()=>opcodes[0x02](testGB))} clock cycles`);

}