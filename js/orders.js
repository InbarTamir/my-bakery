'use strict'
$('body').ready(onInit());

function onInit() {
    var orders = localStorage.getItem('orders');
    if (orders) orders = orders.split('|');
    else return;
    var strHTML = '';
    var itemsMap = getItemsMap(orders);
    var idx = 0;
    for (var item in itemsMap) {
        if (!item.length) continue;
        strHTML += `<tr><th scope="row">${++idx}</th>`;
        strHTML += `<td class="text-right">${item}</td><td>${itemsMap[item]}</td><td>${50 * +itemsMap[item]}</td>`;
        strHTML += '</tr>';
    };
    $('.orders-table').html(strHTML);
}

function getItemsMap(orders) {
    var itemsMap = {};
    orders.forEach((order) => itemsMap[order] = (itemsMap[order]) ? itemsMap[order] + 1 : 1);
    return itemsMap;
}