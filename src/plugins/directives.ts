import { DirectiveBinding, ObjectDirective } from "vue";

type DocumentHandler = <T extends MouseEvent>(e: T) => void;
import { ElMessage } from "element-plus";
let str = "";
const handler: DocumentHandler = () => {
  navigator.clipboard.writeText(str).then(() => {
    ElMessage.success("复制成功");
  });
};

export default {
  install: function (app: any) {
    app.directive("copy", {
      mounted(el: HTMLElement, bindings: DirectiveBinding) {
        str = bindings.value;
        el.addEventListener("click", handler);
      },
      unmounted(el: HTMLElement) {
        el.removeEventListener("click", handler);
      },
    });
  },
};
