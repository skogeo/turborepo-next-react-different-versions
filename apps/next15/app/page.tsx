import { Card } from '@repo/ui/card';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
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
