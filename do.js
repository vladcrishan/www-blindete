const fs = require('fs');
const path = require('path');

const cubs = ['aian', 'aria', 'electra', 'eric']
let html = ''

for (const cub of cubs) {
  for (let i = 1; i <= 20; i++) {
    html += `\n<div class="grid__item">
      <a href="images/persana-chinchilla/cuib20/${cub}/original/${i}.jpg" class="img-wrap">
          <img src="images/persana-chinchilla/cuib20/${cub}/thumbs/${i}.jpg" alt="img0${i}-${cub}" />
      </a>
    </div>`
  }
}

const filePath = path.join(__dirname, 'output.html');
fs.writeFileSync(filePath, html);

console.log(`Successfully wrote HTML to ${filePath}`);