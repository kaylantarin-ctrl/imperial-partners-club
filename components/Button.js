export default function Button({ href = '#', children, variant = 'solid', arrow = false, className = '' }) {
  const base = variant === 'ghost' ? 'btn btn-ghost' : 'btn';
  return (
    <a href={href} className={`${base} ${className}`}>
      {children}
      {arrow && <span className="arr">→</span>}
    </a>
  );
}
