import getProjectPost from "@/service/api/project/post/getProjectPost";
import { useQuery } from "@tanstack/react-query";

export const useGetProjectPost = (postId: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ["project", "post", postId],
    queryFn: async () => await getProjectPost(postId),
    refetchOnMount: "always",
    throwOnError: true,
  });

  return {
    data,
    isFetching,
  };
};
