'use strict';
function onInit() {
  renderProj();
}

function renderProj() {
  var strHtmls = gProj.map(
    (proj) => `
        <article class="proj-flex">
        
        <h3>${proj.name}</h2> <br>
        <h6>${proj.desc}</h5> <br>
        <button onclick="onReadProj('${proj.id}')">Details</button> <br>
        <td><img onerror="this.src='img/Mine.png'"src="img/${proj.imgFile}" alt="img" ></td>
        
        </article> 
        `
  );

  document.querySelector('.proj-container').innerHTML = strHtmls.join('');
}

function onReadProj(projId) {
  console.log('sss');
  var proj = getProjById(projId);
  var modal = document.querySelector('.portfolio-modal');
  modal.innerHTML = buildModal(proj);
  modal.style.display = 'block';
}

function onCloseModal() {
  var modal = document.querySelector('.portfolio-modal');
  modal.innerHTML = '';
  modal.style.display = 'none';
}

function buildModal(project) {
  return `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal" onClick="onCloseModal()">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.desc}</p>
                <img class="img-fluid d-block mx-auto" src="img/${project.imgFile}" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                  cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: ${project.date}</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                  <a class="btn btn-primary" href="${project.url}" role="button" target="_blank">Link</a>
                
                
                </ul>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
    `;
}
