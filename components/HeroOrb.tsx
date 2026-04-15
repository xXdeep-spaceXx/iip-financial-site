export default function HeroOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-orb-wrap ${className}`} aria-hidden="true">
      <div className="hero-orb" />
    </div>
  );
}
