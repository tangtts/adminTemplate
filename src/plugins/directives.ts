import { DirectiveBinding, ObjectDirective } from "vue";

type DocumentHandler = <T extends MouseEvent>(e: T, s: string) => void;
import { ElMessage } from "element-plus";
const handler: DocumentHandler = (e: MouseEvent, value: string) => {
  navigator.clipboard.writeText(`<${value}/>`).then(() => {
    ElMessage.success("复制成功");
  });
};

export default {
  install: function (app: any) {
    app.directive("copy", {
      mounted(el: HTMLElement, bindings: DirectiveBinding) {
        el.addEventListener("click", (e: MouseEvent) =>
          handler(e, bindings.value)
        );
      },
      unmounted(el: HTMLElement) {
        el.removeEventListener("click", () => handler);
      },
    });
  },
};
