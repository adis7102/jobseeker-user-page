"use client";

import { userDefault } from "@/vars/vars";
import { User } from "@/types/home";

interface Props {
  userData: User | null;
  setUserData: (userData: User) => void;
}

export default function UserForm({ userData, setUserData }: Props) {
  const handleInput = ({
    value,
    key,
    child,
  }: {
    value: string;
    key: string;
    child?: string;
  }) => {
    const newUserData: User | any = userData
      ? JSON.parse(JSON.stringify(userData))
      : JSON.parse(JSON.stringify(userDefault));

    if (child) {
      newUserData[key][child] = value;
    } else {
      newUserData[key] = value;
    }

    setUserData(newUserData);
  };

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-5">
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Name"
          type="text"
          value={userData?.name}
          onChange={(e) => handleInput({ value: e.target.value, key: "name" })}
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Username"
          type="text"
          value={userData?.username}
          onChange={(e) =>
            handleInput({ value: e.target.value, key: "username" })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Email"
          type="email"
          value={userData?.email}
          onChange={(e) => handleInput({ value: e.target.value, key: "email" })}
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={userData?.phone}
          onChange={(e) => handleInput({ value: e.target.value, key: "phone" })}
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Website"
          type="text"
          value={userData?.website}
          onChange={(e) =>
            handleInput({ value: e.target.value, key: "website" })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Street Address"
          type="text"
          value={userData?.address.street}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "street",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Suite"
          type="text"
          value={userData?.address.suite}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "suite",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="City"
          type="text"
          value={userData?.address.city}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "city",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Zipcode"
          type="text"
          value={userData?.address.zipcode}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "zipcode",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Company Name"
          type="text"
          value={userData?.company.name}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "company",
              child: "name",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Company Catchphrase"
          type="text"
          value={userData?.company.catchPhrase}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "company",
              child: "catchPhrase",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Company BS"
          type="text"
          value={userData?.company.bs}
          onChange={(e) =>
            handleInput({ value: e.target.value, key: "company", child: "bs" })
          }
        />
      </div>
    </div>
  );
}

/* 

<div className="mt-5">
      <div className="grid grid-cols-3 gap-4 mt-5">
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Name"
          type="text"
          value={userData?.name}
          onChange={(e) => handleInput({ value: e.target.value, key: "name" })}
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Username"
          type="text"
          value={userData?.username}
          onChange={(e) =>
            handleInput({ value: e.target.value, key: "username" })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Email"
          type="email"
          value={userData?.email}
          onChange={(e) => handleInput({ value: e.target.value, key: "email" })}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={userData?.phone}
          onChange={(e) => handleInput({ value: e.target.value, key: "phone" })}
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Website"
          type="text"
          value={userData?.website}
          onChange={(e) =>
            handleInput({ value: e.target.value, key: "website" })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Street Address"
          type="text"
          value={userData?.address.street}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "street",
            })
          }
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Suite"
          type="text"
          value={userData?.address.suite}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "suite",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="City"
          type="text"
          value={userData?.address.city}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "city",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Zipcode"
          type="text"
          value={userData?.address.zipcode}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "address",
              child: "zipcode",
            })
          }
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Company Name"
          type="text"
          value={userData?.company.name}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "company",
              child: "name",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Company Catchphrase"
          type="text"
          value={userData?.company.catchPhrase}
          onChange={(e) =>
            handleInput({
              value: e.target.value,
              key: "company",
              child: "catchPhrase",
            })
          }
        />
        <input
          className="p-2 rounded bg-gray-200 focus:bg-white"
          placeholder="Company BS"
          type="text"
          value={userData?.company.bs}
          onChange={(e) =>
            handleInput({ value: e.target.value, key: "company", child: "bs" })
          }
        />
      </div>
    </div>

*/