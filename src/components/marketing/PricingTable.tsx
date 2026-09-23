import { useState } from 'react';

/**
 * PricingTable.tsx — Interactive Pricing Component
 *
 * Features:
 * - Monthly / Annual billing toggle
 * - Highlights popular tiers
 * - Accessible toggle button
 */

export interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  currencySymbol?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

interface Props {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export default function PricingTable({ title, subtitle, tiers }: Props) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-lg text-[var(--text-secondary)]">{subtitle}</p>}

          {/* Billing Toggle */}
          <div className="mt-10 mx-auto inline-flex flex-col sm:flex-row items-center rounded-3xl sm:rounded-full bg-[var(--bg-secondary)] p-1.5 shadow-inner border border-[var(--border)] gap-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-8 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] ${
                !isAnnual 
                  ? 'bg-[var(--color-primary-600)] text-white shadow-md' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] ${
                isAnnual 
                  ? 'bg-[var(--color-primary-600)] text-white shadow-md' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Annually
              <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold tracking-wide transition-colors ${
                isAnnual 
                  ? 'bg-white/25 text-white' 
                  : 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] dark:bg-[var(--color-primary-900)] dark:text-[var(--color-primary-300)]'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            const currency = tier.currencySymbol || '$';

            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl border p-8 shadow-sm transition-all hover:shadow-md ${
                  tier.isPopular
                    ? 'border-[var(--color-primary-500)] bg-[var(--bg-secondary)]'
                    : 'border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-hover)]'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 right-0 left-0 flex justify-center">
                    <span className="rounded-full bg-[var(--color-primary-500)] px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{tier.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{tier.description}</p>

                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                    {currency}
                    {price}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-tertiary)]">/month</span>
                </div>

                <a
                  href={tier.ctaHref}
                  className={`mt-auto inline-flex w-full justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    tier.isPopular
                      ? 'bg-[var(--color-primary-500)] text-white shadow-[var(--color-primary-500)]/25 shadow-lg hover:bg-[var(--color-primary-600)]'
                      : 'border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg)]'
                  }`}
                >
                  {tier.ctaText}
                </a>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-[var(--color-primary-500)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
