"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ticketSchema } from "@/lib/validations";
import styles from "./Form.module.css";

type TicketFormValues = z.input<typeof ticketSchema>;

const defaults: TicketFormValues = {
  title: "",
  description: "",
  requirements: "",
  priority: "Medium",
  status: "Backlog",
  technicalPlan: "",
  testPlan: "",
  deploymentChecklist: "",
  aiSummary: "",
  aiVerified: false,
};

export default function TicketForm({
  onSubmit,
  initialValues,
  submitLabel,
}: {
  onSubmit: (values: TicketFormValues) => Promise<void>;
  initialValues?: Partial<TicketFormValues>;
  submitLabel: string;
}) {
  const { register, handleSubmit, formState } = useForm<TicketFormValues>({
    resolver: zodResolver(ticketSchema),
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
        <label htmlFor="requirements">Requirements</label>
        <textarea id="requirements" {...register("requirements")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="priority">Priority</label>
        <select id="priority" {...register("priority")}> 
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")}> 
          <option>Backlog</option>
          <option>In Progress</option>
          <option>In Review</option>
          <option>Testing</option>
          <option>Shipped</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="technicalPlan">Technical plan</label>
        <textarea id="technicalPlan" {...register("technicalPlan")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="testPlan">Test plan</label>
        <textarea id="testPlan" {...register("testPlan")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="deploymentChecklist">Deployment checklist</label>
        <textarea id="deploymentChecklist" {...register("deploymentChecklist")} />
      </div>

      <div className={styles.field}>
        <label htmlFor="aiSummary">AI summary</label>
        <textarea id="aiSummary" {...register("aiSummary")} />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
