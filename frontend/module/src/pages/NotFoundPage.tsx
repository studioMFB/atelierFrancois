import { Link } from "react-router-dom";

import { PageMessagePanel } from "@/components/page/PageMessagePanel";

export function NotFoundPage() {
  return (
    <div className="page-shell">
      <PageMessagePanel eyebrow="Page not found" title="Pomu wandered off with this page.">
        <Link className="primary-button" to="/">
          Back home
        </Link>
      </PageMessagePanel>
    </div>
  );
}
