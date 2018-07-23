

$("#confirm-purchase").click(function (event) {
    event.preventDefault();

    var inputName = $("#owner").val();
    var inputCreditNumber = $("#cardNumber").val();
    var inputMonth = $("#monthValue").val();
    var inputYear = $("#yearValue").val();
    var inputCvv = $("#cvv").val();

    console.log(inputName);
    console.log(inputCreditNumber);
    console.log(inputCvv);
    console.log(inputMonth);
    console.log(inputYear);


    if (!compareAllData(inputName, inputCreditNumber, inputMonth, inputYear, inputCvv, dataClients)) {
        console.log("Tarjeta Invalida");
        swal("TARJETA RECHAZADA", "Intente de nuevo", "error");

    } else {
        console.log("Tarjeta Valida");
        swal("TARJETA APROBADA", "Gracias por su compra", "success");
    }


});

