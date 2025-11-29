"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

import { useUserStore } from "@/store/user-store";

import { User } from "@/types/home";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const { setAlert } = useUserStore();
  const [loadingDelete, setLoadingDelete] = useState(false)

  const handleDelete = async () => {
    setLoadingDelete(true)
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`
      );
      
      setAlert({status: response.status, text: 'Success Deleting User!'})
      setTimeout(() => {
        setAlert({status: null, text: ''})
      }, 2500);
    } catch (err) {
      console.error(err);
      setAlert({status: 500, text: `${err}`})
      setTimeout(() => {
        setAlert({status: null, text: ''})
      }, 2500);
    } finally {
      setLoadingDelete(false);
    }
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link className="cursor-pointer" href={`/user/${user.id}`}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{user.name}</div>
          <p className="text-gray-700 text-base">
            Username: <span className="font-semibold">{user.username}</span>
          </p>
          <p className="text-gray-700 text-base">
            Email: <span className="font-semibold">{user.email}</span>
          </p>
          <p className="text-gray-700 text-base">
            Phone: <span className="font-semibold">{user.phone}</span>
          </p>
          <p className="text-gray-700 text-base">
            Company: <span className="font-semibold">{user.company.name}</span>
          </p>
          <p className="text-gray-700 text-base">
            Website: <span className="font-semibold">{user.website}</span>
          </p>
          <p className="text-gray-700 text-base">
            Address:{" "}
            <span className="font-semibold">{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</span>
          </p>
        </div>
      </Link>
      <div className="flex flex-row-reverse px-6 pt-4 pb-2 border-t border-gray-200">
        <button className="cursor-pointer inline-block bg-red-600 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2" onClick={handleDelete} disabled={loadingDelete}>
          {loadingDelete ? 'Deleting user...' : 'Delete'}
        </button>
        <Link href={`/user/${user.id}/update`} className="cursor-pointer inline-block bg-green-500 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          Update
        </Link>
      </div>
    </div>
  );
}
