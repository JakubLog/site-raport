import { Button } from 'components/atoms/Button/Button';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
// import {} from './Profile.styles';

const Profile = (): JSX.Element => {
  const { logout } = useAuth();
  return (
    <div>
      <Button onClick={logout}>Wyloguj się</Button>
    </div>
  );
};

export default Profile;
