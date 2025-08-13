"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validation";
import { setUser } from "@/lib/storage";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import styles from "./Auth.module.scss";
import { z } from "zod";
import clsx from "clsx";

type FormData = z.infer<typeof loginSchema>;

export default function AuthPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const fetchedData = await res.json();
    setUser(data);
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={clsx(styles.loginBox, "loginBox")}>
        <form
          className={clsx(styles.form, "form")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={clsx(styles.logo, "logo")}></div>
          <span className={clsx(styles.header, "header")}>Welcome Back!</span>

          <Input
            placeholder="Enter your name"
            {...register("userName")}
            error={errors.userName?.message}
          />
          <Input
            placeholder="Enter Iranian Phone Number"
            {...register("phone")}
            error={errors.phone?.message}
          />

          <Button type="submit">Log In</Button>
        </form>
      </div>
    </div>
  );
}
