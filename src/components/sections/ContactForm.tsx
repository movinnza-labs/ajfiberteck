'use client';

import { useState } from 'react';
import { CONTACT_PAGE } from '@/data/content';

const fieldClass =
  'w-full rounded-xl border border-navy-100 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-muted transition-colors duration-200 focus:border-brand-600 focus:outline-none';

/**
 * Contact form. Field labels, placeholders and the submit label are taken
 * from the existing Metform form.
 *
 * The original posts to a WordPress endpoint that does not exist here, so
 * this submits via a mailto: fallback rather than silently dropping the
 * message. Wire `action` to a real endpoint when one is available.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    const subject = get('subject') || `Website enquiry from ${get('name')}`;
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      '',
      get('message'),
    ].join('\n');

    window.location.href = `mailto:info@ajfibertek.co.in?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-5">
      {CONTACT_PAGE.form.fields.map((field) => {
        const id = `contact-${field.name}`;
        return (
          <div key={field.name}>
            {/* Visible label for accessibility; the original relies on
                placeholders alone, which screen readers cannot rely on. */}
            <label
              htmlFor={id}
              className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.12em] text-navy-800"
            >
              {field.label}
              {field.required && (
                <span className="text-brand-600" aria-hidden="true">
                  {' '}
                  *
                </span>
              )}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={id}
                name={field.name}
                rows={5}
                required={field.required}
                placeholder={field.placeholder}
                className={`${fieldClass} resize-y`}
              />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                autoComplete={
                  field.name === 'name'
                    ? 'name'
                    : field.name === 'email'
                      ? 'email'
                      : field.name === 'phone'
                        ? 'tel'
                        : 'off'
                }
                className={fieldClass}
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-display text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(221,0,5,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
      >
        {CONTACT_PAGE.form.submitLabel}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 13 13 3M6 3h7v7" />
        </svg>
      </button>

      <p aria-live="polite" className="min-h-[1.25rem] text-sm text-muted">
        {sent ? 'Opening your email app…' : ''}
      </p>
    </form>
  );
}
