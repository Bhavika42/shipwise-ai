"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bugSchema } from "@/lib/validations";
import styles from "./Form.module.css";

type BugFormValues = z.input<typeof bugSchema>;

const defaults: BugFormValues = {
  title: "",
  description: "",
  stepsToReproduce: "",
  expectedBehavior: "",
  actualBehavior: "",
  severity: "Medium",
  rootCause: "",
  fixSummary: "",
  verificationSteps: "",
  status: "Open",
  aiRootCause: "",
  aiVerified: false,
};

export default function BugForm({
  onSubmit,
  initialValues,
  submitLabel,
}: {
  onSubmit: (values: BugFormValues) => Promise<void>;
  initialValues?: Partial<BugFormValues>;
  submitLabel: string;
}) {
  const { register, handleSubmit, formState } = useForm<BugFormValues>({
    resolver: zodResolver(bugSchema),
    defaultValues: { ...defaults, ...initialValues },
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...register("title")} />
        {formState.errors.title ? <p className={styles.error}>{formState.errors.title.message}</p> : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="description">Description</label>
        <textarea id="description" {...register("description")} />
        {formState.errors.description ? <p className={styles.error}>{formState.errors.description.message}</p> : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="stepsToReproduce">Steps to reproduce</label>
        <textarea id="stepsToReproduce" {...register("stepsToReproduce")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="expectedBehavior">Expected behavior</label>
        <textarea id="expectedBehavior" {...register("expectedBehavior")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="actualBehavior">Actual behavior</label>
        <textarea id="actualBehavior" {...register("actualBehavior")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="severity">Severity</label>
        <select id="severity" {...register("severity")}> 
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")}> 
          <option>Open</option>
          <option>Investigating</option>
          <option>Fixed</option>
          <option>Verified</option>
          <option>Closed</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="rootCause">Root cause</label>
        <textarea id="rootCause" {...register("rootCause")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="fixSummary">Fix summary</label>
        <textarea id="fixSummary" {...register("fixSummary")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="verificationSteps">Verification steps</label>
        <textarea id="verificationSteps" {...register("verificationSteps")} />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
