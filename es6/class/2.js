class HinhHoc {
    constructor(w, h = 0) {
        this.w = w;
        this.h = h
    }
    printInfo(){
        console.log(`W: ${this.w}\tH: ${this.h}`)
    }
}

class HCN extends HinhHoc{
    constructor(w,h){
        super(w,h);
    }
    
    printInfo(){
        super.printInfo()
        console.log(`HCN: W: ${this.w}\tH: ${this.h}`)
    }
}

let hcn = new HCN(1,2)
hcn.printInfo()
