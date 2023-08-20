let total=0;

function handleCLikBtn(target){

   // console.log(target.parentNode.childNodes);
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    //console.log(li);
    selectedItemContainer.appendChild(li);

    const price = target.parentNode.childNodes[3].innerText.split(" ")[0];

    //console.log(price);
    total =parseFloat(total) + parseFloat(price) ;
    document.getElementById("total").innerText = total;
    //console.log(total);





}



const submitbutton = document.getElementById('submit');

submit