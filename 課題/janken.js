//結果
const results=['あいこ','アナタのまけです...','あなたのかちです！'];

//form
const form=document.forms[0];

//p
const result=document.querySelector('p');

form.addEventListener('submit',function(eve){
    eve.preventDefault();
    let radioValue=form.hand.value;
    if(radioValue===''){return;}
    let userHand=Number(radioValue);
    let pcHand=Math.floor((Math.random()*3));

result.textContent=results[(userHand+3 -pcHand) % 3];
result.style.display='block';
});
