export default function HeroOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`sphere-wrap ${className}`} aria-hidden="true">
      <div className="sphere">
        <div className="sphere-ring sphere-ring-eq" />
        <div className="sphere-ring sphere-ring-lat1" />
        <div className="sphere-ring sphere-ring-lat2" />
        <div className="sphere-ring sphere-ring-mer1" />
        <div className="sphere-ring sphere-ring-mer2" />
        <div className="sphere-ring sphere-ring-mer3" />
      </div>
    </div>
  );
}
