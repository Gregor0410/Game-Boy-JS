class GameBoy{
    constructor(){
        this.mb = new Motherboard();
        this.cpu = new CPU(this.mb);
    }
}