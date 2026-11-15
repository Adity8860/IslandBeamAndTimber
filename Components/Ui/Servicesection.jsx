import Image from "next/image";

export default function Servicesection({ sections = [] }) {
  return sections.map((section, index) => (
    <section
      className="finished-lumber-hero"
      aria-label={section.eyebrow}
      key={section.id ?? `${section.eyebrow}-${index}`}
    >
      <Image
        className="finished-lumber-hero__image"
        src={section.imageSrc}
        alt={section.imageAlt}
        fill
        priority={index === 0}
        sizes="100vw"
      />
      <div className="finished-lumber-hero__shade" />
      <div className="finished-lumber-hero__content">
        <p className="finished-lumber-hero__eyebrow">{section.eyebrow}</p>
        <h1>{section.title}</h1>
        <p className="finished-lumber-hero__description">{section.description}</p>
        <div className="finished-lumber-hero__actions">
          <a
            className="finished-lumber-hero__button finished-lumber-hero__button--primary"
            href={section.primaryAction.href}
          >
            {section.primaryAction.label} <span aria-hidden="true">↗</span>
          </a>
          <a
            className="finished-lumber-hero__button finished-lumber-hero__button--secondary"
            href={section.secondaryAction.href}
          >
            {section.secondaryAction.label}
          </a>
        </div>
        <div className="finished-lumber-hero__specs" aria-label="Product specifications">
          {section.specs?.map((spec) => (
            <div key={`${spec.value}-${spec.label}`}>
              <strong>{spec.value}</strong>
              <span>{spec.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  ));
}
