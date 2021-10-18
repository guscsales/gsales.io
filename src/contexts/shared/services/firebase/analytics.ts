import './index';
import { getAnalytics } from 'firebase/analytics';

const analytics = () =>
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? getAnalytics() : null;

export default analytics;
