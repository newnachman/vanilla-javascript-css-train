
function createLinkTag(text, href, title) {
  let a = document.createElement('a');
  let linkText = document.createTextNode(text);
  a.appendChild(linkText);
  a.title = title;
  a.href = href;
  return a;
}

const nav = document.createElement('nav');

nav.appendChild(createLinkTag('css-parallax', '/css-parallax', 'Go to css-parallax'));
nav.appendChild(createLinkTag('image-hover-wow', '/image-hover-wow', 'Go to image-hover-wow'));
nav.appendChild(createLinkTag('search-cards', '/search-cards', 'Go to search-cards'));
nav.appendChild(createLinkTag('flexbox-basic', '/flexbox-basic', 'Go to flexbox-basic'));
nav.appendChild(createLinkTag('flexbox-advanced', '/flexbox-advanced', 'Go to flexbox-advanced'));
nav.appendChild(createLinkTag('toggle-button', '/toggle-button', 'Go to toggle-button'));
nav.appendChild(createLinkTag('css-variables', '/css-variables', 'Go to css-variables'));

let body = document.querySelector('body');
body.prepend(nav);