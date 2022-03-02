import React from 'react';
import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
  AuthType,
} from '../auth-types';

import PublicOnlyProtector from './public-only-protector';
import AuthProtector from './auth-protector';
import UserProtector from './user-protector';
import AdminProtector from './admin-protector';

type ProtectPageEnum = {
  [Key in AuthType]: (Page: React.FC) => React.ReactNode
};

const pageProtectors: ProtectPageEnum = {
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  [AUTH]: (Page) => <AuthProtector><Page /></AuthProtector>,
  [USER]: (Page) => <UserProtector><Page /></UserProtector>,
  [ADMIN]: (Page) => <AdminProtector><Page /></AdminProtector>,
};

export default pageProtectors;
