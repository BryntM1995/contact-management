
import { createRouter, createWebHistory } from 'vue-router';
import Contact from './views/ContactView/Contact.vue';
import Task from './views/TaskView/Task.vue';

const routes = [
  { path: '/', component: Contact },
  { path: '/Task', component: Task }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;