const button = document.getElementById('button');
const quotes = document.getElementById('box2');
const author = document.getElementById('author');

async function fetchData() {
    try{

        const response = await fetch('https://dummyjson.com/quotes');
        console.log(response);
        const json_data = await response.json();
        console.log(json_data);

        let count= 0;
        loaddata(json_data , count);

        if(count<100){
            button.addEventListener("click" , () => {
                count++;
                loaddata(json_data,count);

            });
        }
        

    }
    catch(err) {
        console.log(err);
    }
}

function loaddata(json_data, count){
    
    quotes.innerHTML = json_data.quotes[count].quote;
    author.innerHTML = json_data.quotes[count].author;

    count++;

}

fetchData();
