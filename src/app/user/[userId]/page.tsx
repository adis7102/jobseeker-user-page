import axios from "axios";
import { UserPostType, ParamsType } from "@/types/home";
import PostCard from "@/components/PostCard";

interface Props {
  params: ParamsType
}

export default async function UserPost({ params }: Props) {
  const response = await axios(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`);
  const data: UserPostType[] = response.data;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center">User Posts</h1>
      {(data || []).map((post, index) => (
        <PostCard userPost={post} key={`user-post-${index}`} />
      ))}
    </div>
  );
}
