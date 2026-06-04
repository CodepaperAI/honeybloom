import { menuGroups } from "@/lib/site";

export function PricingMenu() {
  return (
    <div className="pricing-grid">
      {menuGroups.map((group) => (
        <article className="price-card" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map(([name, price]) => (
              <li key={name}>
                <span>{name}</span>
                <b>{price}</b>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
