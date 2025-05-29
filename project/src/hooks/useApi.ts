import axiosInstance from "../utils/axiosInstace";
import { AxiosResponse } from "axios";

const useApi = () => {
  // const { token, logout } = useAuth();

  // const isAuth = async (token: string): Promise<void> => {
  //   try {
  //     const response: AxiosResponse = await axiosInstance.get("/api/admin/is-authenticated", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (response.status !== 200) {
  //       logout();
  //     }
  //   } catch (error) {
  //     logout();
  //     throw error;
  //   }
  // };

  const get = async <T = any>(url: string): Promise<T> => {
    // await isAuth(token);
    const response: AxiosResponse<T> = await axiosInstance.get(url);
    return response.data;
  };

  const post = async <T = any>(url: string, data: unknown): Promise<T> => {
    // await isAuth(token);
    const response: AxiosResponse<T> = await axiosInstance.post(url, data);
    return response.data;
  };

  const patch = async <T = any>(url: string, data: unknown): Promise<T> => {
    // await isAuth(token);
    const response: AxiosResponse<T> = await axiosInstance.patch(url, data);
    return response.data;
  };

  const put = async <T = any>(url: string, data: unknown): Promise<T> => {
    // await isAuth(token);
    const response: AxiosResponse<T> = await axiosInstance.put(url, data);
    return response.data;
  };

  const del = async <T = any>(url: string): Promise<T> => {
    // await isAuth(token);
    const response: AxiosResponse<T> = await axiosInstance.delete(url);
    return response.data;
  };

  return { get, post, patch, del, put };
};

export default useApi;
