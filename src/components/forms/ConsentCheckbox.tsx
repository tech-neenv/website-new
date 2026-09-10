'use client';

import Link from 'next/link';
import styles from './ConsentCheckbox.module.css';

interface ConsentCheckboxProps {
    /** Unique id — a page may render more than one form. */
    id?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

/**
 * DPDP consent statement shown above the submit button on every lead form.
 *
 * Deliberately unticked by default and `required`, so consent is an explicit
 * affirmative action rather than something the visitor has to notice and undo.
 * The wording is shared across forms so the consent we record is identical.
 */
const ConsentCheckbox = ({ id = 'dataConsent', checked, onChange }: ConsentCheckboxProps) => (
    <div className={styles.wrapper}>
        <input
            type="checkbox"
            id={id}
            name={id}
            className={styles.input}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            required
            aria-describedby={`${id}-description`}
        />
        <label htmlFor={id} className={styles.label} id={`${id}-description`}>
            I consent to Neenv collecting and processing my data as per the{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.required} aria-hidden="true">*</span>
            . You can withdraw this consent at any time &mdash; see{' '}
            <Link href="/legal#consent-notice">how to withdraw</Link>.
        </label>
    </div>
);

export default ConsentCheckbox;
