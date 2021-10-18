import './index';
import { getAnalytics, setCurrentScreen, logEvent } from 'firebase/analytics';

const analytics = () =>
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? getAnalytics() : null;

export function logAnalyticsEvent(url) {
  const instance = analytics();
  if (instance) {
    setCurrentScreen(instance, url);
    logEvent(instance, 'screen_view');
  }
}

export default analytics;
