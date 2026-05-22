"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import styles from "./page.module.css";
import formStyles from "@/components/Form.module.css";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: LoginValues) {
    setMessage("This is a UI-only login flow for ShipWise AI.");
    setTimeout(() => router.push("/dashboard"), 600);
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <div className={styles.brand}>
          <h1>Sign in</h1>
          <p>Access the ShipWise AI workspace and review your engineering workflow.</p>
        </div>
        <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={formStyles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email")} />
            {formState.errors.email ? <p className={formStyles.error}>{formState.errors.email.message}</p> : null}
          </div>
          <div className={formStyles.field}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password")} />
            {formState.errors.password ? <p className={formStyles.error}>{formState.errors.password.message}</p> : null}
          </div>
          <button type="submit" className={formStyles.button}>Sign in</button>
          {message ? <p style={{ color: "#8cd9ff" }}>{message}</p> : null}
        </form>
        <p className={styles.switchText}>
          Don’t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
