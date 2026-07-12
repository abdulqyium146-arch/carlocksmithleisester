import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500" role="list">
        <li>
          <Link href="/" className="hover:text-brand-600">Home</Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-brand-600">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-800" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
