let total = 0;

function handleCLikBtn(target) {

    // console.log(target.parentNode.childNodes);
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;


    selectedItemContainer.appendChild(li);

    const price = target.parentNode.childNodes[3].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total").innerText = total;

    const deletebutton = document.getElementById('submit-btn');
    console.log(deletebutton);

    if (total > 0) {
        deletebutton.removeAttribute('disabled');

    }
    else {
        deletebutton.setAttribute('disabled', true);

    }

}

document.getElementById('input-field').addEventListener('keyup', function (event) {

    const Sellproduct = event.target.value;
    //console.log(text);
    const deletebutton = document.getElementById('btn-update');
    //&& totalprice > 200

    if (Sellproduct === 'SELL200' && total > 200) {
        deletebutton.removeAttribute('disabled');


        let discountamount = 0.2;
        const totalDiscount = total * discountamount;
        const discountElement = document.getElementById('discount');
        discountElement.innerText = totalDiscount.toFixed(2);


        const FinalTotal = total - totalDiscount;
        const finalamount = document.getElementById('distotal');
        finalamount.innerText = FinalTotal.toFixed(2);


    }
    else {
        deletebutton.setAttribute('disabled', true);

    }

})

