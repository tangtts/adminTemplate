import { ref } from "vue";

export interface DataResponse {
  data: any;
  code: number;
}
/**
 *
 * @param api Promise
 * @returns
 * @description 自动执行返回result,error,loading
 */

export function useApi(api: Function) {
  const loading = ref(true);
  const result = ref();
  const error = ref<Error | null>(null);
  const fetchResource = (params?: unknown) => {
    loading.value = true;
    return api(params)
      .then((data: DataResponse) => {
        // 按照约定，api返回的结果直接复制给result
        result.value = data;
      })
      .catch((e: Error) => {
        error.value = e;
      })
      .finally(() => {
        loading.value = false;
      });
  };
  return {
    loading,
    error,
    result,
    fetchResource,
  };
}

export function fetchUserList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const payload = {
        code: 200,
        data: [11, 22, 33],
        msg: "success",
      };
      resolve(payload);
    }, 1000);
  });
}
