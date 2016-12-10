import Vue from 'vue';
import VueRouter from 'vue-router';
import ProjectsView from 'views/ProjectsView';


Vue.use(VueRouter);

const routes = [
  {
    path: '/projects/:id',
    component: ProjectsView,
  },
];

export default new VueRouter({
  routes, // short for routes: routes
});
