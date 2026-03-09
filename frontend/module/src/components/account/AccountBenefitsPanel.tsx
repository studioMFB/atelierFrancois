interface AccountBenefitsPanelProps {
  authenticated?: boolean;
}

export function AccountBenefitsPanel({ authenticated = false }: AccountBenefitsPanelProps) {
  return (
    <div className="panel panel--accent">
      <p className="eyebrow">{authenticated ? "Why keep it?" : "Why create an account?"}</p>
      <h2>Save planner layouts, revisit them on mobile, and price baskets later.</h2>
      <p>
        The backend is set up for account registration, session tokens, and saved planner projects so web and mobile stay in sync.
      </p>
    </div>
  );
}
