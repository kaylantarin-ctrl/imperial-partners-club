'use client';
import { useState } from 'react';
import { whoWeWorkWith, clientTypes, clientCounts, opportunityQuestions } from '@/lib/partnerContent';

// To receive submissions: set this to your form endpoint (e.g. a Formspree URL
// like 'https://formspree.io/f/xxxx', or your own API route once the backend exists).
// While empty, the form validates and shows a success state without sending anywhere.
const FORM_ENDPOINT = '';

const initial = {
  fullName: '', company: '', email: '', phone: '', country: '',
  industry: '', years: '', clients: '', clientType: '',
  q0: '', q1: '', q2: '', q3: '', notes: '',
};

const required = ['fullName', 'company', 'email', 'phone', 'country', 'industry'];
const labels = { fullName: 'Full Name', company: 'Company Name', email: 'Email', phone: 'Phone Number', country: 'Country', industry: 'Industry' };

export default function ApplicationForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setYN = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const er = {};
    required.forEach((k) => { if (!form[k].trim()) er[k] = `${labels[k]} is required.`; });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email address.';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      document.querySelector('.field-invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setSending(true);
    try {
      if (FORM_ENDPOINT) {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
      } else {
        await new Promise((r) => setTimeout(r, 600)); // simulate while no backend
      }
      setDone(true);
    } catch {
      setErrors({ submit: 'Something went wrong sending your application. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="bg-white border border-gold/20 p-10 md:p-14 text-center max-w-[680px] mx-auto">
        <img src="/ipc-logo.png" alt="" className="w-16 mx-auto mb-6" />
        <h3 className="text-gold text-[1.4rem] uppercase tracking-[.05em] mb-3">Application Received</h3>
        <p className="text-body font-light leading-relaxed">
          Thank you, {form.fullName.split(' ')[0] || 'and welcome'}. Our team will review your application and be in
          touch to arrange a discovery call. Qualified partners are onboarded on a rolling basis.
        </p>
      </div>
    );
  }

  const Err = ({ k }) => (errors[k] ? <p className="field-err">{errors[k]}</p> : null);
  const inputCls = (k) => `field ${errors[k] ? 'field-invalid' : ''}`;

  return (
    <form onSubmit={submit} noValidate className="bg-white border border-gold/20 p-7 md:p-12 max-w-[820px] mx-auto">
      {/* Personal Information */}
      <fieldset className="mb-10">
        <legend className="font-display text-gold text-[1.05rem] uppercase tracking-[.06em] pb-4 mb-6 border-b border-gold/15 w-full">Personal Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div><label className="field-label">Full Name *</label><input className={inputCls('fullName')} value={form.fullName} onChange={set('fullName')} /><Err k="fullName" /></div>
          <div><label className="field-label">Company Name *</label><input className={inputCls('company')} value={form.company} onChange={set('company')} /><Err k="company" /></div>
          <div><label className="field-label">Email *</label><input type="email" className={inputCls('email')} value={form.email} onChange={set('email')} /><Err k="email" /></div>
          <div><label className="field-label">Phone Number *</label><input className={inputCls('phone')} value={form.phone} onChange={set('phone')} /><Err k="phone" /></div>
          <div className="md:col-span-2"><label className="field-label">Country *</label><input className={inputCls('country')} value={form.country} onChange={set('country')} /><Err k="country" /></div>
        </div>
      </fieldset>

      {/* Professional Information */}
      <fieldset className="mb-10">
        <legend className="font-display text-gold text-[1.05rem] uppercase tracking-[.06em] pb-4 mb-6 border-b border-gold/15 w-full">Professional Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="field-label">Industry *</label>
            <select className={inputCls('industry')} value={form.industry} onChange={set('industry')}>
              <option value="">Select…</option>
              {whoWeWorkWith.map((o) => <option key={o} value={o}>{o}</option>)}
              <option value="Other">Other</option>
            </select><Err k="industry" />
          </div>
          <div><label className="field-label">Years In Business</label><input type="number" min="0" className="field" value={form.years} onChange={set('years')} /></div>
          <div>
            <label className="field-label">Number Of Clients</label>
            <select className="field" value={form.clients} onChange={set('clients')}>
              <option value="">Select…</option>{clientCounts.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="field-label">Average Client Type</label>
            <select className="field" value={form.clientType} onChange={set('clientType')}>
              <option value="">Select…</option>{clientTypes.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Opportunity Questions */}
      <fieldset className="mb-10">
        <legend className="font-display text-gold text-[1.05rem] uppercase tracking-[.06em] pb-4 mb-6 border-b border-gold/15 w-full">Opportunity Questions</legend>
        <div className="space-y-5">
          {opportunityQuestions.map((q, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-[.9rem] text-body font-light">{q}</span>
              <div className="flex gap-2 w-full sm:w-[160px] shrink-0">
                {['Yes', 'No'].map((v) => (
                  <button type="button" key={v} onClick={() => setYN(`q${i}`, v)}
                          className={`yn-btn ${form[`q${i}`] === v ? 'active' : ''}`}>{v}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Additional Notes */}
      <div className="mb-8">
        <label className="field-label">Additional Notes</label>
        <textarea className="field" value={form.notes} onChange={set('notes')} placeholder="Anything you'd like us to know…" />
      </div>

      {errors.submit && <p className="field-err mb-4">{errors.submit}</p>}
      <button type="submit" disabled={sending} className="btn w-full justify-center !py-[17px] disabled:opacity-60">
        {sending ? 'Submitting…' : 'Submit Application'}
      </button>
      <p className="text-center text-[.72rem] text-muted mt-4 font-light">Your information is reviewed confidentially by the Imperial partnerships team.</p>
    </form>
  );
}
