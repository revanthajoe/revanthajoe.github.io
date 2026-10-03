import Link from "next/link";

export function SectionHeading({ title, href }: { title: string; href?: string }) {
  return <div className="section-heading"><h2>{title}</h2>{href && <Link href={href}>View all <span aria-hidden="true">↗</span></Link>}</div>;
}
