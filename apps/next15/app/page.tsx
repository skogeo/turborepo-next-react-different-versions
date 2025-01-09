'use client';
import { Card } from '@repo/ui/card';
import styles from './page.module.css';
import { PhoneInput } from '@repo/ui/phone-input';
import type { IntlTelInputRef } from 'intl-tel-input/react';
import { useRef } from 'react';

export default function Home() {
  const phoneRef = useRef<IntlTelInputRef>(null);
  return (
    <div className={styles.page}>
      <PhoneInput
        ref={phoneRef}
        initialValue="+1234567890"
        onChangeNumber={(number: string) => {
          console.log('Phone number:', number);
        }}
        onChangeCountry={(country: string) => {
          console.log('Country:', country);
        }}
        onChangeValidity={(valid: boolean) => {
          console.log('Is valid:', valid);
        }}
        className="your-custom-class"
      />{' '}
      <main className={styles.main}>
        <Card
          className={styles.card}
          title="Card Title"
          href="https://example.com"
        >
          This is a card component.
        </Card>
      </main>
    </div>
  );
}
