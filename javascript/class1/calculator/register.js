login_signup();

async function login_signup(){

    const users = ['chintu', 'bantu'];
    const name = "Sourabh";
    const email = '28saurbh@gmail.com'

    try{
        const info = await getUserInfo(name, email);
        console.log(info);
    
        const checkUser = await checkIfAlreadyPresent(users, name);
        console.log(checkUser);

        const create = await createAccount(users, name);
        console.log(create);

       // const x = await checkIfAlreadyPresent(users, name);
       // console.log(x);

        const sendDetails = await sendSignUpEmail(email);
        console.log(sendDetails);

        const complete = await returnSuccess();
        console.log(complete);
    }
    catch(error){
        console.log(error);
    }

}



function getUserInfo(name, email){
    return new Promise((res, rej) => {

        setTimeout(()=>{
            console.log('UserName: ' + name + ' Email: ' +email);
            res("Details Successfully Fetched.");
        }, 2000);
    })
}

function checkIfAlreadyPresent(users, name){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            for(const element of users){
                if(name == element){
                    rej("User Already Present");
                }
            }
            res(name + " is eligible to create new account.")
        }, 2000);
    })
}

function createAccount(users, name){

    return new Promise((res, rej) => {
        setTimeout(() => {
            users.push(name);
            res("Account Successfully Created.");
        }, 2000);
    })
}

function sendSignUpEmail(email){
    return new Promise((res, rej) => {

        setTimeout(() => {
            console.log("sending login details to "+email);
            res('successfully send login details to '+email);
        }, 2000);
    })
}

function returnSuccess(){
    return new Promise((res, rej) => {
        res("All operations completed.")
    })
}
