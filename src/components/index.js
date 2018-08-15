import Vue from "vue";
import EdTask from "./EdTask.vue";
import EdResource from "./EdResource.vue";

const Components = {
    EdTask,
    EdResource
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;