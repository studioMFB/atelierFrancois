import type { FormEvent } from "react";

interface AccountAuthFormProps {
  mode: "login" | "register";
  displayName: string;
  email: string;
  password: string;
  error: string | null;
  submitting: boolean;
  onDisplayNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onModeChange: (mode: "login" | "register") => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function AccountAuthForm({
  mode,
  displayName,
  email,
  password,
  error,
  submitting,
  onDisplayNameChange,
  onEmailChange,
  onModeChange,
  onPasswordChange,
  onSubmit,
}: AccountAuthFormProps) {
  return (
    <form className="panel" onSubmit={(event) => void onSubmit(event)}>
      <div className="toggle-row">
        <button
          className={mode === "login" ? "toggle-row__button toggle-row__button--active" : "toggle-row__button"}
          onClick={() => onModeChange("login")}
          type="button"
        >
          Sign in
        </button>
        <button
          className={mode === "register" ? "toggle-row__button toggle-row__button--active" : "toggle-row__button"}
          onClick={() => onModeChange("register")}
          type="button"
        >
          Register
        </button>
      </div>

      {mode === "register" ? (
        <label className="field">
          <span>Display name</span>
          <input onChange={(event) => onDisplayNameChange(event.target.value)} value={displayName} />
        </label>
      ) : null}

      <label className="field">
        <span>Email</span>
        <input
          autoComplete="email"
          onChange={(event) => onEmailChange(event.target.value)}
          type="email"
          value={email}
        />
      </label>

      <label className="field">
        <span>Password</span>
        <input
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          onChange={(event) => onPasswordChange(event.target.value)}
          type="password"
          value={password}
        />
      </label>

      {error ? <p className="muted-copy">{error}</p> : null}

      <button className="primary-button" disabled={submitting} type="submit">
        {submitting ? "Working..." : mode === "login" ? "Sign in" : "Create account"}
      </button>
    </form>
  );
}
