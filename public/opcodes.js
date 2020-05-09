opcodes = {
    //loads
    0x01:ld16(3,12,gb=>"bc",gb=>gb.pc+1), //LD BC,d16
    0x02:ld(1,8,gb=>gb.get16("bc"),gb=>"a"), //LD (BC),A
    0x06:ld(2,8,gb=>"b",gb=>gb.pc+1), //LD B,d8
    0x08:ld16(3,20,gb=>gb.get16(gb.pc+1),gb=>"sp"), //LD (a16),SP
    0x0a:ld(1,8,gb=>"a",gb=>gb.get16("bc")), //LD A,(BC)
    0x0e:ld(2,8,gb=>"c",gb=>gb.pc+1), //LD C,d8
    0x11:ld16(3,12,gb=>"de",gb=>gb.pc+1), //LD DE,d16
    0x12:ld(1,8,gb=>gb.get16("de"),gb=>"a"), //LD (DE),A
    0x16:ld(2,8,gb=>"d",gb=>gb.pc+1), //LD D,d8
    0x1a:ld(1,8,gb=>"a",gb=>gb.get16("dc")), //LD A,(DC)
    0x1e:ld(2,8,gb=>"e",gb=>gb.pc+1), //LD E,d8
    0x21:ld(3,12,gb=>"hl",gb=>gb.pc+1) //LD HL,d16
    //0x22:ld(1,8)
};