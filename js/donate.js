//  console.log("check it")
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
        
}
    
})