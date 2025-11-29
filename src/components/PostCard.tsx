import { UserPostType } from "@/types/home";

interface Props {
  userPost: UserPostType;
}

export default function PostCard({ userPost }: Props) {
  return (
    <div className="max-w-2xl mb-5 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{userPost.title}</div>
        <p className="text-gray-700 font-semibold text-base">
          {userPost.body}
        </p>
      </div>
    </div>
  );
}
