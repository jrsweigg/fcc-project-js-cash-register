let price = 3.26;
// Cash in drawer
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.10],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const formatResults = (status, change) => {
    displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
    change.map(
        money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
    );
    return;
};

