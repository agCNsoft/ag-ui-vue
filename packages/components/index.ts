import { App } from "vue";
import { AjButton } from "./button";

const components = [AjButton];

function install(app:App) {
  components.forEach((component) => {
    console.log(component.name)
    app.component(component.name, component);
  });
}
export default install;
