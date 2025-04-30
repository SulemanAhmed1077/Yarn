// script.js

// LOGIN FUNCTIONALITY
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Simple dummy login
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "suleman" && password === "1234") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}

// LOGOUT BUTTON (works for both dashboard & index pages)
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    window.location.href = "lndex.html";
  });
}

// INDEX PAGE: Auto calculation for Purchase
const excluding = document.getElementById("excluding");
const salesTax = document.getElementById("salesTax");
const including = document.getElementById("including");
const netAmt = document.getElementById("netAmt");

if (excluding && salesTax && including && netAmt) {
  excluding.addEventListener("input", calculatePurchase);
  salesTax.addEventListener("input", calculatePurchase);

  function calculatePurchase() {
    const ex = parseFloat(excluding.value) || 0;
    const tax = parseFloat(salesTax.value) || 0;
    including.value = (ex + tax).toFixed(2);
    netAmt.value = including.value;
  }
}

// INDEX PAGE: Auto calculation for Sales
const salesExcluding = document.getElementById("salesExcluding");
const salesTax2 = document.getElementById("salesTax2");
const salesIncluding = document.getElementById("salesIncluding");
const salesNetAmt = document.getElementById("salesNetAmt");

if (salesExcluding && salesTax2 && salesIncluding && salesNetAmt) {
  salesExcluding.addEventListener("input", calculateSales);
  salesTax2.addEventListener("input", calculateSales);

  function calculateSales() {
    const ex = parseFloat(salesExcluding.value) || 0;
    const tax = parseFloat(salesTax2.value) || 0;
    salesIncluding.value = (ex + tax).toFixed(2);
    salesNetAmt.value = salesIncluding.value;
  }
}
