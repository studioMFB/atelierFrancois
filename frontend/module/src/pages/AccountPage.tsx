import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LilWudApiError } from "@atelierfrancois/lilwud-sdk";

import { AccountAuthForm } from "@/components/account/AccountAuthForm";
import { AccountBenefitsPanel } from "@/components/account/AccountBenefitsPanel";
import { AccountSummaryPanel } from "@/components/account/AccountSummaryPanel";
import { WudlingScatter } from "@/components/brand/WudlingScatter";
import { useAuth } from "@/hooks/useAuth";

export function AccountPage() {
  const { status, user, login, logout, register } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.redirectTo as string | undefined;

  const [mode, setMode] = useState<"login" | "register">("login");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && redirectTo) {
      navigate(redirectTo, { replace: true });
    }
  }, [navigate, redirectTo, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const trimmedEmail = email.trim();
      const trimmedDisplayName = displayName.trim();

      if (!trimmedEmail || !password.trim()) {
        throw new Error("Enter both your email and password.");
      }

      if (mode === "login") {
        await login({ email: trimmedEmail, password });
      } else {
        if (!trimmedDisplayName) {
          throw new Error("Add a display name before creating an account.");
        }

        if (password.trim().length < 8) {
          throw new Error("Use a password with at least 8 characters.");
        }

        await register({ displayName: trimmedDisplayName, email: trimmedEmail, password });
      }
    } catch (nextError) {
      if (nextError instanceof LilWudApiError) {
        setError(nextError.message);
      } else if (nextError instanceof Error) {
        setError(nextError.message);
      } else {
        setError("The account request failed. Check the API and try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "authenticated" && user) {
    return (
      <div className="page-shell">
        <section className="section-grid">
          <AccountSummaryPanel onLogout={logout} user={user} />
          <AccountBenefitsPanel authenticated />
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <section className="section-grid">
        <div className="panel panel--quiet">
          <p className="eyebrow">Account</p>
          <h1>Create an account, then save your 3D garden concepts.</h1>
          <p>Use the same credentials on web and mobile because both apps talk to the shared API and SDK.</p>
          <WudlingScatter items={["cap", "plain"]} layout="row" size="sm" />
        </div>
        <AccountAuthForm
          displayName={displayName}
          email={email}
          error={error}
          mode={mode}
          onDisplayNameChange={setDisplayName}
          onEmailChange={setEmail}
          onModeChange={setMode}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
          password={password}
          submitting={submitting}
        />
      </section>
    </div>
  );
}
