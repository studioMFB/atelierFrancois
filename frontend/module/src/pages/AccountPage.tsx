import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, type Location as RouterLocation } from "react-router-dom";
import { LilWudApiError } from "@atelierfrancois/lilwud-sdk";

import { AccountAuthForm } from "@/components/account/AccountAuthForm";
import { AccountBenefitsPanel } from "@/components/account/AccountBenefitsPanel";
import { AccountSummaryPanel } from "@/components/account/AccountSummaryPanel";
import { WudlingScatter } from "@/components/brand/WudlingScatter";
import { useAuth } from "@/hooks/useAuth";
import { routePaths } from "@/router";

interface AccountPageProps {
  presentation?: "page" | "modal";
}

interface AccountLocationState {
  backgroundLocation?: RouterLocation;
  redirectTo?: string;
}

export function AccountPage({ presentation = "page" }: AccountPageProps) {
  const { status, user, login, logout, register } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const routeState = location.state as AccountLocationState | undefined;
  const backgroundLocation = routeState?.backgroundLocation;
  const redirectTo = routeState?.redirectTo;
  const requestedMode = new URLSearchParams(location.search).get("mode");
  const isModal = presentation === "modal" && Boolean(backgroundLocation);

  const [mode, setMode] = useState<"login" | "register">(requestedMode === "register" ? "register" : "login");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const intro =
    mode === "login"
      ? {
          heading: "Sign in, then return to the garden without losing your work.",
        }
      : {
          heading: "Create an account, then save your 3D garden concepts.",
        };

  useEffect(() => {
    if (status === "authenticated" && redirectTo) {
      navigate(redirectTo, { replace: true });
    }
  }, [navigate, redirectTo, status]);

  useEffect(() => {
    setMode(requestedMode === "register" ? "register" : "login");
  }, [requestedMode]);

  useEffect(() => {
    if (!isModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModal]);

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

  function closeModal() {
    if (!backgroundLocation) {
      navigate(routePaths.home, { replace: true });
      return;
    }

    navigate(
      `${backgroundLocation.pathname}${backgroundLocation.search}${backgroundLocation.hash}`,
      { replace: true },
    );
  }

  function renderContent() {
    if (status === "authenticated" && user) {
      return (
        <section className="section-grid account-page__grid">
          <AccountSummaryPanel onLogout={logout} user={user} />
          <AccountBenefitsPanel authenticated />
        </section>
      );
    }

    return (
      <section className="section-grid account-page__grid">
        <div className="panel panel--quiet account-page__panel account-page__intro">
          <p className="eyebrow">Account</p>
          <h1>{intro.heading}</h1>
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
    );
  }

  if (isModal) {
    return (
      <div className="account-modal" onClick={closeModal} role="presentation">
        <div
          aria-label={status === "authenticated" ? "Account details" : "Account sign in"}
          aria-modal="true"
          className="account-modal__dialog"
          role="dialog"
        >
          <button
            aria-label="Close account dialog"
            className="ghost-button account-modal__close"
            onClick={closeModal}
            type="button"
          >
            &#x2715;
          </button>
          <div
            className="account-page account-page--modal"
            onClick={(event) => event.stopPropagation()}
          >
            {renderContent()}
          </div>
        </div>
      </div>
    );
  }

  return <div className="page-shell account-page">{renderContent()}</div>;
}
