"use client";

import { useState } from "react";
import axios from "axios";
import { useUserStore } from "@/store/user-store";
import { userDefault } from "@/vars/vars";
import { userSchema } from "@/validations/UserValidations";

import UserForm from "@/components/UserForm";

import { User } from "@/types/home";

const geo = {
  lat: "-37.3159",
  lng: "81.1496",
};

export default function CreateUser() {
  const { setAlert } = useUserStore();
  const [userData, setUserData] = useState<User | null>(null);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);

  const handleSubmit = async (userData: User | null) => {
    setLoadingCreate(true);
    try {
      const newUserData: User | any = JSON.parse(JSON.stringify(userData));
      newUserData.address.geo = geo;

      const isValid = await userSchema.validate(newUserData);
      if (!isValid) {
        throw isValid;
      }

      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        newUserData
      );

      setUserData(JSON.parse(JSON.stringify(userDefault)));
      setAlert({ status: response.status, text: "Success Creating User!" });
      setTimeout(() => {
        setAlert({ status: null, text: "" });
      }, 2500);
    } catch (err) {
      console.error(err);
      setAlert({ status: 500, text: `${err}` });
      setTimeout(() => {
        setAlert({ status: null, text: "" });
      }, 3000);
    } finally {
      setLoadingCreate(false);
    }
  };

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold text-center">Create User</h1>
      <UserForm userData={userData} setUserData={setUserData} />
      <button
        className="cursor-pointer inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
        onClick={() => handleSubmit(userData)}
        disabled={loadingCreate}
      >
        Create User
      </button>
      {loadingCreate && <p>Creating User...</p>}
    </div>
  );
}
