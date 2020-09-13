function createReader() {
  const headerPage = document.createElement('header');
  headerPage.className = 'head-class';
  document.body.appendChild(headerPage);
  const titleProject = document.createElement('h1');
  titleProject.innerHTML = 'Paleta de Cores';
  titleProject.className = 'title';
  titleProject.setAttribute('id', 'title')
  headerPage.appendChild(titleProject);
}
createReader();
