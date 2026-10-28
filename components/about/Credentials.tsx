import { formattedAddress, site } from "@/content/site";
import styles from "./Credentials.module.css";

/** Verification details for procurement: registration, address, memberships. */
export function Credentials() {
  return (
    <div className={styles.grid}>
      <div>
        <h2 className={styles.title}>Registration and memberships</h2>
        <p className={styles.intro}>The details procurement teams usually ask for. Contact us for certificates or supplier forms.</p>
      </div>
      <dl className={styles.list}>
        <div>
          <dt>Registered company</dt>
          <dd>
            {site.name}, CAC {site.cacNumber}
          </dd>
        </div>
        <div>
          <dt>Registered address</dt>
          <dd>{formattedAddress}</dd>
        </div>
        <div>
          <dt>Membership</dt>
          {/* Add the CAFCI logo here once permission is confirmed. */}
          <dd>CAFCI, the Caribbean animation and film cluster</dd>
        </div>
        <div>
          <dt>Contact</dt>
          <dd>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
