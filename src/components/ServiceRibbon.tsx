const ribbonText =
  "Microshading - Ombre Brows - Lash Lift - Facials - Waxing - Threading - Eyebrow Tinting - Lash Tinting - Henna Services - Brow Shaping - Beauty Consultations -";

export function ServiceRibbon() {
  return (
    <div className="service-ribbon" aria-label="Featured services">
      <div>{ribbonText}</div>
      <div aria-hidden="true">{ribbonText}</div>
    </div>
  );
}
