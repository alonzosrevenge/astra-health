'use client';

import React, { useState, FormEvent } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formAction = process.env.NEXT_PUBLIC_FORM_ACTION || 'https://formspree.io/f/yourcode';

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-mint text-sm" role="status" aria-live="polite">
        Thanks — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        aria-label="Email address"
        className="flex-1 px-4 py-3 bg-graphite/50 border border-white/10 rounded text-[#E6E7E8] placeholder:text-[#E6E7E8]/40 focus:outline-none focus:border-mint/50 focus:ring-1 focus:ring-mint/50 transition-colors"
        disabled={status === 'submitting'}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="px-6 py-3 bg-mint text-ink font-medium rounded hover:bg-mint/90 focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Request Access'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
