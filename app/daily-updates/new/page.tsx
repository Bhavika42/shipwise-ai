"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import formStyles from "@/components/Form.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dailyUpdateSchema } from "@/lib/validations";
import styles from "../page.module.css";

type DailyUpdateFormValues = {
  whatIWorkedOn: string;
  blockers?: string;
  nextSteps: string;
  questionsForTeam?: string;
};

export default function NewDailyUpdatePage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<DailyUpdateFormValues>({
    resolver: zodResolver(dailyUpdateSchema),
    defaultValues: {
      whatIWorkedOn: "",
      blockers: "",
      nextSteps: "",
      questionsForTeam: "",
    },
  });

  async function onSubmit(values: DailyUpdateFormValues) {
    const response = await fetch("/api/daily-updates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      setMessage("Update submitted.");
      router.push("/daily-updates");
    } else {
      const error = await response.json();
      setMessage(error.error?.message || "Unable to submit update.");
    }
  }

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>New update</p>
            <h1 className={styles.title}>Share your daily status</h1>
            <p className={styles.description}>Keep your team aligned with work notes, blockers, and next steps.</p>
          </div>
        </div>
        {message ? <p style={{ color: "#8cd9ff" }}>{message}</p> : null}
        <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={formStyles.field}>
            <label htmlFor="whatIWorkedOn">What I worked on</label>
            <textarea id="whatIWorkedOn" {...register("whatIWorkedOn")} />
            {formState.errors.whatIWorkedOn ? <p className={formStyles.error}>{formState.errors.whatIWorkedOn.message}</p> : null}
          </div>
          <div className={formStyles.field}>
            <label htmlFor="blockers">Blockers</label>
            <textarea id="blockers" {...register("blockers")} />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="nextSteps">Next steps</label>
            <textarea id="nextSteps" {...register("nextSteps")} />
            {formState.errors.nextSteps ? <p className={formStyles.error}>{formState.errors.nextSteps.message}</p> : null}
          </div>
          <div className={formStyles.field}>
            <label htmlFor="questionsForTeam">Questions for the team</label>
            <textarea id="questionsForTeam" {...register("questionsForTeam")} />
          </div>
          <div className={formStyles.actions}>
            <button type="submit" className={formStyles.button}>Submit update</button>
          </div>
        </form>
      </main>
    </div>
  );
}
