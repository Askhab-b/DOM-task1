
const header = document.createElement('div')
const item_1 = document.createElement('a');
const item_2 = document.createElement('a');
const item_3 = document.createElement('a');
const borderForText = document.createElement('div')
const borderText = document.createElement('p')

item_1.textContent = 'intocode';
item_1.href = '#'


item_2.textContent = 'google';
item_2.href = "#"

item_3.textContent = 'instagram';
item_3.href = "#"

borderText.textContent = "text text text text text text text text text text"



header.className = 'textCenter'

borderForText.className = 'container'



header.append(item_1, item_2, item_3)


document.body.prepend(header)

document.body.prepend(borderForText)

borderForText.append(borderText)













console.log(document.body);