//                     1                   //
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.backgroundColor = 'lightblue'; // колір фону
div.style.color = 'darkblue'; // колір тексту
div.style.fontSize = '20px'; // розмір тексту
div.textContent = 'Це новий блок з заданими стилями та класами.';

const cloneNode = div.cloneNode(true);
document.body.append(div, cloneNode);
//                     2                   //
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const array = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');



//                     3                   //


//                     4                   //