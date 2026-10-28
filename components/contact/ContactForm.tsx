"use client";

import { useActionState } from "react";
import { submitEnquiry, type ContactState } from "@/app/contact/actions";
import { budgetRanges, projectTypes } from "@/content/contact";
import styles from "./ContactForm.module.css";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div className={styles.success} role="status">
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form} noValidate>
      <div className={styles.row}>
        <Field label="Name" name="name" autoComplete="name" required error={errors.name} defaultValue={values.name} />
        <Field label="Organisation" name="organisation" autoComplete="organization" defaultValue={values.organisation} />
      </div>
      <Field label="Email" name="email" type="email" autoComplete="email" required error={errors.email} defaultValue={values.email} />

      <div className={styles.row}>
        <Select label="Type of project" name="projectType" options={projectTypes} defaultValue={values.projectType} />
        <Select label="Budget range" name="budget" options={budgetRanges} defaultValue={values.budget} />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={values.message}
          className={styles.input}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && (
        <p className={styles.formError} role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
};

function Field({ label, name, type = "text", autoComplete, required, error, defaultValue }: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span className={styles.required}>(required)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        defaultValue={defaultValue}
        className={styles.input}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}

type SelectProps = { label: string; name: string; options: string[]; defaultValue?: string };

function Select({ label, name, options, defaultValue = "" }: SelectProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select id={name} name={name} className={styles.input} defaultValue={defaultValue}>
        <option value="" disabled>
          Choose one
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
