import { useQuery } from "@tanstack/react-query";
import { UserInfo } from "../../types/user/userInfo";
import { getUserInfo } from "../../service/api/user/getUserInfo";

const useGetUserInfo = () => {
  const {
    data: userInfo,
    error,
    isError,
  } = useQuery<UserInfo>({
    queryKey: ["user", "info"],
    queryFn: getUserInfo,
  });

  return {
    userInfo,
    error,
    isError,
  };
};

export default useGetUserInfo;
