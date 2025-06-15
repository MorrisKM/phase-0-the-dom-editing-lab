let body = document.getElementById('container');

let h1 = document.createElement('h1');
h1.textContent = 'My HTML adventure';
body.appendChild(h1);

let p1 = document.createElement('p')
p1.innerHTML = "We're writing <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML\">HTML</a>  markup to display in our <strong>browser</strong>. We're basically telling computers what to do. <em>Neat/!</em>"

body.appendChild(p1)

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

body.appendChild(table);
table.appendChild(tbody);
table.appendChild(thead)

let row1 = thead.insertRow(-1);
thead.appendChild(row1)

row1.insertCell(0).textContent = 'Element name';
row1.insertCell(1).textContent = 'Display value';

let rowb1 = tbody.insertRow(-1)
tbody.appendChild(rowb1)

rowb1.insertCell(0).textContent = 'h1';
rowb1.insertCell(1).textContent = 'block';

let rowb2 = tbody.insertRow(-1)
tbody.appendChild(rowb2)

rowb2.insertCell(0).textContent = 'p';
rowb2.insertCell(1).textContent = 'block';

let rowb3 = tbody.insertRow(-1)
tbody.appendChild(rowb3)

rowb3.insertCell(0).textContent = 'strong';
rowb3.insertCell(1).textContent = 'inline';

let rowb4 = tbody.insertRow(-1)
tbody.appendChild(rowb4)

rowb4.insertCell(0).textContent = 'em';
rowb4.insertCell(1).textContent = 'inline';
