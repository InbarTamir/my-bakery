'use strict'

$('.order-me .btn').click(((ev) => {
    var $elBtn = $(ev.target);
    $elBtn.parent().parent().children('a').click();
    if ($elBtn.attr('class').includes('button-yes')) addOrder($elBtn);
}));

function addOrder($elBtn) {
    var orders = localStorage.getItem('orders');
    var productName = `|${$elBtn.parent().siblings('.card-body').children('.card-title').text()}`;
    orders = (!orders) ? productName : orders + productName;
    localStorage.setItem('orders', orders);
}