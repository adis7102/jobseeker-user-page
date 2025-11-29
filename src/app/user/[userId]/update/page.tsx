"use client";

import { use, useState, useEffect } from "react";
import axios from "axios";
import { useUserStore } from "@/store/user-store";
import { userSchema } from "@/validations/UserValidations";
import { User, ParamsType } from "@/types/home";
import UserForm from "@/components/UserForm";

interface Props {
  params: Promise<ParamsType>;
}

export default function UpdateUser({ params }: Props) {
  const resolvedParams = use(params);
  const { setAlert } = useUserStore();
  const { userId } = resolvedParams;
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [LoadingUpdate, setLoadingUpdate] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const result = await response.data;
        setUserData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (userData: User | null) => {
    setLoadingUpdate(true);
    try {
      const isValid = await userSchema.validate(userData);
      if (!isValid) {
        throw isValid;
      }

      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        userData
      );

      setAlert({ status: response.status, text: "Success Updating User!" });
      setTimeout(() => {
        setAlert({ status: null, text: "" });
      }, 2500);
    } catch (err) {
      console.error(err);
      setAlert({ status: 500, text: `${err}` });
      setTimeout(() => {
        setAlert({ status: null, text: "" });
      }, 2500);
    } finally {
      setLoadingUpdate(false);
    }
  };

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold text-center">Update User</h1>
      {!loading ? (
        <>
          <UserForm userData={userData} setUserData={setUserData} />
          <button
            className="cursor-pointer inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
            onClick={() => handleSubmit(userData)}
            disabled={LoadingUpdate}
          >
            Update User
          </button>
          {LoadingUpdate && <p>Updating User...</p>}
        </>
      ) : (
        <>
          <h2>Getting data...</h2>
        </>
      )}
    </div>
  );
}
