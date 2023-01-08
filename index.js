
var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

function showBill() {

    var french_fries = 100, lunch = 250, burger = 150, pizza = 500, cheese_burger = 500, drink = 120;
    var quantity_d = 0, quantity_french = 0,  quantity_lunch = 0, quantity_burger = 0, quantity_pizza = 0, quantity_cheese = 0; 



    var quantity_d = parseInt(document.getElementById("drink").value);
    if (isNaN(quantity_d)) {
        quantity_d = 0;
    }
    var total_d = drink * quantity_d;

    var quantity_french = parseInt(document.getElementById("French").value);
    if (isNaN(quantity_french)) {
        quantity_french = 0;
    }
    var total_french = french_fries *  quantity_french;

    var  quantity_lunch = parseInt(document.getElementById("lunch").value);
    if (isNaN(quantity_lunch)) {
        quantity_lunch = 0;
    }
    var total_lunch = lunch * quantity_lunch;

    var quantity_burger = parseInt(document.getElementById("burger").value);
    if (isNaN(quantity_burger)) {
        quantity_burger = 0;
    }
    var total_burger = burger * quantity_burger;

    var quantity_pizza = parseInt(document.getElementById("pizza").value);
    if (isNaN(quantity_pizza)) {
        quantity_pizza = 0;
    }
    var total_pizza = pizza * quantity_pizza;

    var quantity_cheese = parseInt(document.getElementById("cheese").value);
    if (isNaN(quantity_cheese)) {
        quantity_cheese = 0;
    }
    var total_cheese = cheese_burger * quantity_cheese;

    var totalBill = total_d + total_french + total_lunch + total_burger + total_pizza + total_cheese;

    var tax = parseInt(document.getElementById("tax").value);
    if (isNaN(tax)) {
        tax = 0;
    }
    var total_tax = totalBill * tax / 100;

    var ServicesCharges = parseInt(document.getElementById("charges").value);
    if (isNaN(ServicesCharges)) {
        ServicesCharges = 0;
    }
    var subtotal = totalBill + total_tax + ServicesCharges;

    var text_total = document.getElementById("text");
    text_total.innerHTML = subtotal;



}
function resetBill(){
    // alert("remove");
  document.getElementById("order_no").value = "";
  document.getElementById("drink").value = "";
  document.getElementById("French").value = "";
  document.getElementById("lunch").value = "";
  document.getElementById("burger").value = "";
  document.getElementById("pizza").value = "";
  document.getElementById("cheese").value = "";
  document.getElementById("charges").value = "";
  document.getElementById("tax").value = "";
  document.getElementById("text");
  text_total.value = "";

}