 const countValue=document.querySelector('#counter');

 const increment = () => {
    //get the value frome UI
    let value = parseInt(countValue.innerText);

    // update the value
    value = value+1;

    //set the onto UI
    countValue.innerText=value;
 };

 const decrement=() => {
    let value = parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
 };