import axios from "axios";
import Link from "next/link";

import UserCard from "@/components/UserCard";

import { User } from "@/types/home";

export default async function Home() {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  const data: User[] = response.data ;

  return (
    <div className="pt-10">
      <div>
        <Link href={`/user/create`} className="cursor-pointer inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          Create User
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-center">User List</h1>
      {response.status === 200 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {(data || []).map((user, index) => (
          <UserCard user={user} key={`user-item-${index}`} />
        ))}
      </div>) : (<p className="text-lg font-bold">No User Data</p>)}
    </div>
  );
}
