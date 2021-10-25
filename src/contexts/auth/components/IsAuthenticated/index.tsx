import React from 'react';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import Storage from '@contexts/shared/services/storage';

export default function IsAuthenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const isAdminLogin = router.pathname.indexOf('/admin/login') !== -1;

  React.useEffect(() => {
    const cmsAuthUser = Storage.read('cmsAuthUser');

    if (!user && !cmsAuthUser) {
      router.replace('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [user]);

  return isAuthenticated || isAdminLogin ? children : null;
}
