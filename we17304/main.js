 import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'
import HomePage from './pages/home'
import ContactPage from './pages/contact';
import test from './pages/test';
import { router } from './libs';
import ProjectPage from './pages/project';
import NotFoundPage from './pages/not-found';
import ProjectDetailPage from './pages/project-detail';


const app = document.querySelector("#app");

const render = (container,content) => {
  container.innerHTML = content();
}



// tạo các đường dẫn đến các page
router.on('/',()=>{
  render(app,HomePage);
})
router.on('/contact',()=>{
  render(app,ContactPage);
})
router.on('/test',()=>{
  render(app,test);
})
router.on('/project',()=>{
  render(app,ProjectPage);
})
router.on("/project/:id",(params)=>{
  console.log(params);
  render(app,function(){
      return ProjectDetailPage(params)
  })
})

router.notFound(()=>{
  render(app,NotFoundPage);
})

router.resolve();
