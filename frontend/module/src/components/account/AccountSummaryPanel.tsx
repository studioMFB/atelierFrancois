import type { User } from "@atelierfrancois/lilwud-sdk";

interface AccountSummaryPanelProps {
  user: User;
  onLogout: () => Promise<void>;
}

export function AccountSummaryPanel({ user, onLogout }: AccountSummaryPanelProps) {
  return (
    <div className="panel account-page__panel account-summary-panel">
      <p className="eyebrow">Account</p>
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>
      <p className="muted-copy">Account created {new Date(user.createdUtc).toLocaleDateString("en-GB")}</p>
      <button className="primary-button" onClick={() => void onLogout()} type="button">
        Sign out
      </button>
    </div>
  );
}
