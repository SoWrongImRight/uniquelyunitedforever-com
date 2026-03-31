import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

export default function NotFoundPage() {
  return (
    <PageLayout
      title="Page Not Found"
      metaDescription="The page you were looking for doesn't exist."
      canonicalPath="/404"
    >
      <p>We couldn't find that page. It may have been moved or doesn't exist.</p>
      <p>
        <Link to="/">Return to the homepage</Link> or{' '}
        <Link to="/contact">contact Rev. Miller</Link>.
      </p>
    </PageLayout>
  );
}
