"use client";

import { useUserStore } from "@/store/user-store";
import { alertColor } from "@/vars/vars";

export default function Notification() {
  const { alert } = useUserStore();

  return alert.status !== null && (
    <div
      className={`right-0 my-5 p-2 items-center text-white leading-none lg:rounded-full flex lg:inline-flex ${alert.status === 500 ? alertColor.failed.bg : alertColor.success.bg}`}
      role="alert"
    >
      <span className={`flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 ${alert.status === 500 ? alertColor.failed.badge : alertColor.success.badge}`}>
        {alert.status}
      </span>
      <span className="font-semibold mr-2 text-left flex-auto">
        {alert.text}
      </span>
    </div>
  );
}
