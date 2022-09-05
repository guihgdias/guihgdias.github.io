infosJson.map((item, index) => {
  item.tecnologies.map((i, j) => {
    let tecItem = document.querySelector('.models .tiny-card').cloneNode(true);
    document.querySelector('#knowledges .tecs .slider').append(tecItem);
    tecItem.querySelector('.card_name').innerHTML = i.title;
    tecItem.querySelector('.card_icon').src = i.image;
  });

  item.tools.map((i, j) => {
    let toolsItem = document.querySelector('.models .tiny-card').cloneNode(true);
    document.querySelector('#knowledges .tools .slider').append(toolsItem);
    toolsItem.querySelector('.card_name').innerHTML = i.title;
    toolsItem.querySelector('.card_icon').src = i.image;
  });

  item.projects.map((i, j) => {
    let projectItem = document.querySelector('.models .project-card').cloneNode(true);
    console.log(projectItem);
    document.querySelector('#projects .cards').append(projectItem);
    projectItem.querySelector('.preview img').src = i.image;
    projectItem.querySelector('.text_medium').innerHTML = i.title;
    projectItem.querySelector('.text_tiny').innerHTML = i.description;
    projectItem.querySelector('.tecs').innerHTML = i.tecsUsed;
    projectItem.href = i.url;
  });
});