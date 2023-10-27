async function buyAShirt(){
    const name = 'Shivani';
    const address = 'Adhartal';
    const product = 'Pink Shirt';
    const payment = '450';
    const id= '1243678';
    const info = await getOrderInfo(name,address);
    console.log(info);
    const available = await checkIfAvailable(address,product);
    console.log(available);
    const pay = await placeOrder(product,payment);
    console.log(pay);
    const sucess = await returnSuccess(name, product,id);
    console.log(sucess);
}



async function getOrderInfo(name,address){
    return new Promise(function(res,rej){
        setTimeout(() => {

            console.log('Name of customer: ',name );
            console.log('Address to deliver : ', address);
            res('Information done');

        } ,2000)
    });
}

async function checkIfAvailable(address, product){
    return new Promise(function(res, rej){
        setTimeout ( () => {

            console.log('For this address',address );
            console.log('Product is available' , product);
            res('Product Availability Checked');

        },2000)
    });
}

async function placeOrder (product,payment){
    return new Promise(function (res,rej){
        setTimeout(() => {

            console.log('Payment for th e product' , product);
            console.log('is done for ' , payment);
            res('Payment recieved');

        },2000)
    });
}

async function returnSuccess (name, product , id){
    return new Promise(function (res, rej){
        setTimeout(() => {
            console.log('Customer: ', name);
            console.log('Product: ' , product);
            console.log('Has been sucessfully placed and yor awb number is:', id);
            res('WILL DISPATCH SOON');
        },2000)
    });
}

buyAShirt();