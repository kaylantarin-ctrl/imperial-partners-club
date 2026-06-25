'use client';
import { useState } from 'react';
import { industries } from '@/lib/partners';

// Where applications are sent. Leave '' for test mode (validates + shows success,
// no network call). For production set a form endpoint that works on any static host:
//   Formspree:  https://formspree.io/f/XXXXXXXX
//   Web3Forms:  https://api.web3forms.com/submit  (also add a hidden access_key field)
// Later, point this at your own Partner Portal API.
const FORM_ENDPOINT = '';

const yesno = ['Yes', 'No'];
const opportunityQs = [
  ['asked_citizenship', 'Have clients ever asked about citizenship?'],
  ['asked_residency', 'Have clients ever asked about residency?'],
  ['asked_property', 'Have clients ever asked about international property?'],
  ['asked_relocation', 'Have clients ever asked about relocation?'],
];

function Field({ label, name, type = 'text', required, ...rest }) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>{label}{required && ' *'}</label>
      <input id={name} name={name} type={type} required={required} className="field" {...rest} />
    </div>
  );
}

export default function PartnerForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus('submitting');
    try {
      if (!FORM_ENDPOINT) { await new Promise((r) => setTimeout(r, 700)); setStatus('success'); return; }
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch { setStatus('error'); }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-gold/20 p-10 text-center">
        <h3 className="text-gold text-xl uppercase tracking-[.06em]">Application Received</h3>
        <p className="text-muted font-light mt-3 max-w-md mx-auto">
          Thank you. Our team will review your application and be in touch regarding the next step — a discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-gold/20 p-7 md:p-10">
      <fieldset className="border-0 p-0 m-0">
        <legend className="font-display text-gold text-[1.05rem] uppercase tracking-[.08em] mb-5">Personal Information</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full Name" name="full_name" required autoComplete="name" />
          <Field label="Company Name" name="company" required autoComplete="organization" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
          <div className="sm:col-span-2">
            <Field label="Country" name="country" required autoComplete="country-name" />
          </div>
        </div>
      </fieldset>

      <fieldset className="border-0 p-0 m-0 mt-9">
        <legend className="font-display text-gold text-[1.05rem] uppercase tracking-[.08em] mb-5">Professional Information</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="field-label" htmlFor="industry">Industry *</label>
            <select id="industry" name="industry" required defaultValue="" className="field">
              <option value="" disabled>Select your industry</option>
              {industries.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <Field label="Years In Business" name="years_in_business" type="number" min="0" inputMode="numeric" />
          <div>
            <label className="field-label" htmlFor="num_clients">Number Of Clients</label>
            <select id="num_clients" name="num_clients" defaultValue="" className="field">
              <option value="" disabled>Select a range</option>
              {['1–10', '11–50', '51–200', '201–500', '500+'].map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="client_type">Average Client Type</label>
            <select id="client_type" name="client_type" defaultValue="" className="field">
              <option value="" disabled>Select client type</option>
              {['High-Net-Worth', 'Ultra-High-Net-Worth', 'Corporate', 'Mass Affluent', 'Mixed', 'Other'].map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="border-0 p-0 m-0 mt-9">
        <legend className="font-display text-gold text-[1.05rem] uppercase tracking-[.08em] mb-5">Opportunity Questions</legend>
        <div className="grid gap-4">
          {opportunityQs.map(([name, q]) => (
            <div key={name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gold/10 pb-3">
              <span className="text-[.9rem] text-body">{q}</span>
              <span className="yn">
                {yesno.map((v) => (
                  <label key={v}><input type="radio" name={name} value={v} /> {v}</label>
                ))}
              </span>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset className="border-0 p-0 m-0 mt-9">
        <legend className="font-display text-gold text-[1.05rem] uppercase tracking-[.08em] mb-5">Additional Notes</legend>
        <textarea name="notes" rows="4" className="field" placeholder="Anything you'd like us to know" />
      </fieldset>

      {status === 'error' && (
        <p className="text-red-700 text-sm mt-5">Something went wrong submitting your application. Please try again, or email contact@imperialpartners.club.</p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn w-full justify-center mt-8 disabled:opacity-60">
        {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
      </button>
    </form>
  );
}
