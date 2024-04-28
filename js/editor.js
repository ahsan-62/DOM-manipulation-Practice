// document.getElementById('ahsan').addEventListener('keyup',function(){

//     const text=document.getElementById('ahsan').value;
// });



document.getElementById('bold').addEventListener('click',function(){

    const text=document.getElementById('ahsan');

    if(text.style.fontWeight=='bold'){

        text.style.fontWeight='normal';
    }

    else{

        text.style.fontWeight='bold';
    }

})


document.getElementById('italic').addEventListener('click',function(){

    const text=document.getElementById('ahsan');

    if(text.style.fontStyle=='italic'){

        text.style.fontStyle='normal';
    }

    else{

        text.style.fontStyle='italic';
    }

})


document.getElementById('underline').addEventListener('click',function(){

    const text=document.getElementById('ahsan');        

    if(text.style.textDecoration=='underline'){

        text.style.textDecoration='none';
    }

    else{

        text.style.textDecoration='underline';
    }

})


