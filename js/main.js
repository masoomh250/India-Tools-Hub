const TOOLS = [
 {name:'EMI Calculator',slug:'emi',cat:'Finance',icon:'💳',desc:'Calculate monthly loan EMI, total interest and total payment.'},
 {name:'SIP Calculator',slug:'sip',cat:'Investment',icon:'📈',desc:'Estimate SIP maturity value and wealth created from monthly investing.'},
 {name:'FD Calculator',slug:'fd',cat:'Investment',icon:'🏦',desc:'Estimate fixed deposit maturity and interest earnings.'},
 {name:'GST Calculator',slug:'gst',cat:'Tax',icon:'🧾',desc:'Add or remove GST from an amount using a selected GST rate.'},
 {name:'Salary Calculator',slug:'salary',cat:'Salary',icon:'💼',desc:'Estimate monthly take-home salary from annual CTC.'},
 {name:'Income Tax Estimator',slug:'income-tax',cat:'Tax',icon:'🏛️',desc:'Estimate income tax under the FY 2026-27 new regime.'},
 {name:'Loan Interest Calculator',slug:'loan-interest',cat:'Finance',icon:'💰',desc:'Calculate simple interest and total repayment on a loan.'},
 {name:'PPF Calculator',slug:'ppf',cat:'Investment',icon:'🛡️',desc:'Estimate PPF maturity value using annual contribution and rate.'},
 {name:'NPS Calculator',slug:'nps',cat:'Retirement',icon:'👴',desc:'Estimate retirement corpus from monthly NPS contributions.'},
 {name:'Age Calculator',slug:'age',cat:'Utility',icon:'🎂',desc:'Calculate exact age in years, months and days.'},
 {name:'Percentage Calculator',slug:'percentage',cat:'Utility',icon:'％',desc:'Solve common percentage calculations quickly.'},
 {name:'Date Difference',slug:'date-difference',cat:'Date',icon:'📅',desc:'Find the number of days between two dates.'},
 {name:'BMI Calculator',slug:'bmi',cat:'Health',icon:'⚖️',desc:'Calculate BMI from height and weight.'},
 {name:'Fuel Cost Calculator',slug:'fuel-cost',cat:'Travel',icon:'⛽',desc:'Estimate fuel cost for a trip based on mileage and fuel price.'},
 {name:'Trip Cost Calculator',slug:'trip-cost',cat:'Travel',icon:'🚗',desc:'Estimate per-person trip cost including stay, food and travel.'},
 {name:'Compound Interest',slug:'compound-interest',cat:'Investment',icon:'📊',desc:'Calculate future value using compound interest.'},
 {name:'Inflation Calculator',slug:'inflation',cat:'Finance',icon:'📉',desc:'Estimate future cost after applying annual inflation.'},
 {name:'Discount Calculator',slug:'discount',cat:'Shopping',icon:'🏷️',desc:'Calculate discount amount and final selling price.'},
 {name:'Unit Converter',slug:'unit-converter',cat:'Utility',icon:'🔄',desc:'Convert common length, weight, temperature and distance units.'}
];
function loadChrome(){
 const base = location.pathname.includes('/tools/') ? '../../' : './';
 const header=document.getElementById('site-header');
 if(header) header.innerHTML=`<div class="topbar"><div class="container"><span>🇮🇳 Free tools built for everyday India</span><span>No signup • Calculations run in your browser</span></div></div><header class="header"><div class="container nav"><a class="brand" href="${base}index.html"><span class="logo">IT</span><span>India Tools Hub</span></a><nav class="navlinks" id="navLinks"><a href="${base}index.html">Home</a><a href="${base}index.html#tools">All Tools</a><a href="${base}about.html">About</a><a href="${base}contact.html">Contact</a></nav><div class="nav-actions"><button class="icon-btn menu-btn" aria-label="Menu" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button><button class="icon-btn" aria-label="Toggle dark mode" onclick="toggleTheme()">☾</button></div></div></header>`;
 const footer=document.getElementById('site-footer');
 if(footer) footer.innerHTML=`<footer class="footer"><div class="container"><div class="footer-grid"><div><h3>India Tools Hub</h3><p>Free, practical calculators and online tools designed for everyday use in India.</p></div><div><h3>Popular</h3><div class="footer-links"><a href="${base}tools/emi/index.html">EMI Calculator</a><a href="${base}tools/income-tax/index.html">Income Tax</a><a href="${base}tools/sip/index.html">SIP Calculator</a><a href="${base}tools/gst/index.html">GST Calculator</a></div></div><div><h3>Information</h3><div class="footer-links"><a href="${base}about.html">About</a><a href="${base}privacy.html">Privacy</a><a href="${base}terms.html">Terms</a><a href="${base}disclaimer.html">Disclaimer</a></div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} India Tools Hub</span><span>For informational purposes only.</span></div></div></footer>`;
}
function toggleTheme(){document.body.classList.toggle('dark');localStorage.setItem('ith-theme',document.body.classList.contains('dark')?'dark':'light')}
(function(){if(localStorage.getItem('ith-theme')==='dark')document.body.classList.add('dark')})();
function money(n){return '₹'+Number(n||0).toLocaleString('en-IN',{maximumFractionDigits:2})}
function num(id){return Number(document.getElementById(id)?.value||0)}
