class vehicle{

    constructor(wheels, isDeisel){

        this.wheels= wheels;
        this.isDeisel=isDeisel
        }

        drive(){
            console.log('Driving the Deisel SuV');
        }

        breaks(){
            console.log(`Applying break with ${this.wheels} wheels`);
        }
        
    }

    const SuV1 = new vehicle(4,true);
    const SuV2 = new vehicle(6,false);

    console.log(SuV1);
    SuV1.drive();
    SuV1.breaks();

    console.log(SuV2)
    SuV2.drive();
    SuV2.breaks();

    function iterateObject1(){
        for (let key in SuV1) {
            console.log('iterating SuV1 by for loop: ' +SuV1[key]);
        }
    }

    iterateObject1();
    
    function iterateObject2(){
        for (let key in SuV2) {
            console.log('iterating Suv2 using for in loop :' +SuV2[key]);
        }
    }

    iterateObject2();

    const obj = JSON.stringify(SuV1);
    const obj2 = JSON.stringify(SuV2);

    console.log(obj);    
    console.log(obj2);    
