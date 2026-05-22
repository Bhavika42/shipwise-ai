"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import styles from "./page.module.css";
import formStyles from "@/components/Form.module.css";

const signupSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type SignupValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  async function onSubmit(values: SignupValues) {
    setMessage("Account creation is mocked for ShipWise AI.");
    setTimeout(() => router.push("/dashboard"), 600);
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <div className={styles.brand}>
          <h1>Create account</h1>
          <p>Get started with ShipWise AI by creating a mock developer account.</p>
        </div>
        <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={formStyles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" {...register("name")} />
            {formState.errors.name ? <p className={formStyles.error}>{formState.errors.name.message}</p> : null}
          </div>
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
          <button type="submit" className={formStyles.button}>Create account</button>
          {message ? <p style={{ color: "#8cd9ff" }}>{message}</p> : null}
        </form>
        <p className={styles.switchText}>
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
