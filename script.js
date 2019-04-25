var deposit;
var name;
var depositorName = [];
var moneyAdd = [];

$(".newDeposit").click(function() {
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    if (deposit === "" || name === ""){
        $(".error").text("You did not input all of the nesscessay information.");
    } else {
        $(".error").text(" ");
        depositorName.push(name);
        moneyAdd.push(parseInt(deposit));
        $(".numberT").text(depositorName.length);
        var total = 0;
        moneyAdd.forEach(function(money){
             total += money;
             $(".totalA").text(total);
        });
        $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
        $(".accountDeposit").val("");
        $(".accountName").val("");
    }
});
$(".update").click(function() {
    alert("Your later transaction was $" + moneyAdd[moneyAdd.length - 1] + " by " + depositorName[depositorName.length - 1] );
});