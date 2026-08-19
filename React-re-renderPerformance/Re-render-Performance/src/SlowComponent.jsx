const MakeSlowComponent = (ms)=>{
    let start = Date.now();
    let now = start;
    while(now - start <ms){
        now = Date.now();
    }
    
}

export default function SlowComponent(){
    MakeSlowComponent(1000);
    return <>hello</>;
}