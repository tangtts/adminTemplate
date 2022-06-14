import { h, PropType, resolveComponent } from "vue";
import { ElFormItem } from "element-plus";
//TODO 战术撤退
export interface ItemConfig {
  itemConfig: {
    label: string;
    type: string;
    value: string | number;
    optionData?: [
      {
        label: string;
        value: string;
      }
    ];
  };
}

export default {
  props: {
    itemConfig: {
      type: Object as PropType<ItemConfig>,
      required: true, //接收配置，外部传入
    },
  },
  setup(props: ItemConfig, { slots }: any) {
    console.log(props);

    return () => [
      h(
        ElFormItem,
        {
          props: {
            label: props.itemConfig.label, // 表单项的label
          },
        },
        [
          h(
            props.itemConfig.type,
            {
              props: {
                value: props.itemConfig.value,
              },
              on: {
                change: (nVal: string | number) => {
                  props.itemConfig.value = nVal;
                },
              },
            },
            props.itemConfig.optionData &&
              props.itemConfig.optionData.map((option) => {
                return h("el-option", {
                  props: { label: option.label, value: option.value },
                });
              })
          ),
        ]
      ),
    ];
  },
};