document.getElementById('discount-btn').addEventListener('click',function(){
    const inputField=document.getElementById('discount-field');
    const inputFieldString=inputField.value;
    
    console.log(inputFieldString);

    if(inputFieldString=='disc30'){

        const price=document.getElementById('price');
        const priceString=price.innerText;
        const originalPrice=parseFloat(priceString);

        const payablePrice=originalPrice-(originalPrice*30)/100;
        document.getElementById('discount').innerText=payablePrice;

        
    }
    else{
        alert('coupon code not valid')
    }

    inputField.value='';
})