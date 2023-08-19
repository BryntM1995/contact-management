import { createRouter, createWebHistory } from "vue-router";
import Contact from "./views/ContactView/Contact.vue";
import Task from "./views/TaskView/Task.vue";
import Login from './views/LoginView/LoginView.vue'
const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/Contacts", name: "contact", component: Contact },
  { path: "/Task", name: "task", component: Task },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
