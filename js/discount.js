document.getElementById('apply').addEventListener('click',function(){

    const price=document.getElementById('price');
    const priceString=price.innerText;

    const originalPrice=parseFloat(priceString);
    console.log(originalPrice);

    const payablePrice=originalPrice-(originalPrice*30)/100;

    console.log(payablePrice);

    document.getElementById('pay').innerText=payablePrice;
})