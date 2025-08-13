"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/storage";
import styles from "./Dashboard.module.scss";
import { ClientPageRoot } from "next/dist/client/components/client-page";

type user = {
  phone: number;
  userName: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<user | null>(null);

  useEffect(() => {
    const u = getUser();
    if (!u) {
      router.push("/auth");
    } else {
      setUser(u);
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
      <p>
        {user.userName} {user.phone}
      </p>
    </div>
  );
}
