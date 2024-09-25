
document.getElementById('button-donate').addEventListener('click',function(event){
    event.preventDefault();
   


    const addDonateInput = document.getElementById('input-donation-amount').value;
    console.log(addDonateInput);


    if(isNaN(addDonateInput) || (addDonateInput < 0) ){
        alert('Invalid amount or datatype.')

      
    }
    else{
        

        const balance = document.getElementById('stat-balance').innerText;
        console.log(balance);

        const donateNumber = parseFloat(addDonateInput);
        const balanceNumber = parseFloat(balance);
        const newBalance   = donateNumber + balanceNumber;
        console.log(newBalance);
        document.getElementById('stat-balance').innerText = newBalance;

        const balance1 =document.getElementById('stat-balance1').innerText;
        console.log(balance1);
         
        const balanceNumber1 = parseFloat(balance1);
        const newBalance1 =balanceNumber1 - donateNumber;
        console.log(newBalance1);
        document.getElementById('stat-balance1').innerText = newBalance1;
        
// add to history
 const p = document.createElement('p');
 p.innerText = `${donateNumber},Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
 console.log(p);
    
document.getElementById('transaction-container').appendChild(p);

}
    
})