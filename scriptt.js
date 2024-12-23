

        function pay()
           {
            var aa=document.getElementById("amount2").value;
             var amountpay=parseInt(aa);
             var pay=main-amountpay;
             if(pay>=0)
             {
                 alert("Payment Done "+"\nAmount Paid := "+amountpay +"\nRemaining Balance = "+pay);
                    
             }
             else
             {
                 alert("insufficient balance");
             }
               
           }
