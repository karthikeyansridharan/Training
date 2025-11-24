import { ID } from 'appwrite';
import { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../lib/appwrite';
import type { UserContextValue, UserProviderProps } from '../types';

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props: UserProviderProps) {
  const [user, setUser] = useState<any>(null);

  async function login(email: string, password: string) {
    const loggedIn = await account.createEmailPasswordSession({
      email,
      password,
    });
    setUser(loggedIn);
    return loggedIn;
  }

  async function logout() {
    await account.deleteSession({
      sessionId: 'current',
    });
    setUser(null);
  }

  async function register(email: string, password: string) {
    await account.create({
      userId: ID.unique(),
      email,
      password,
    });
    await login(email, password);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}


