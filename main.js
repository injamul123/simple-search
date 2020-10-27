

const searchCountry = document.querySelector('#search-country');
const dataList = document.querySelector('#countries');

searchCountry.addEventListener("keyup", function(event){
   let value = event.target.value;
   let input = new URLSearchParams();
   input.append("input", value);
   dataList.innerHTML = "";

   axios.post('./get-countries.php', input)
      .then((response) => {
      	
         let options = [];
         for(let i=0; i < response.data.countries.length; i++) {
            console.log(response.data.countries)
         	let option = `<option value=" ${ucFirst(response.data.countries[i].name)}">`;
         	options.push(option);
         }
         dataList.innerHTML = options.join(' ');
      })
      .catch((error) => {
      	console.log(error);
      });
});	



 function ucFirst(str) {
    console.log(str);
   return str.split(' ').map(function(word){
     return word[0].toUpperCase() + word.substr(1);
   }).join(' ')
 }
