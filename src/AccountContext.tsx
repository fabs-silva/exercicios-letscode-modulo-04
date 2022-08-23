import { createContext, ReactNode, useContext, useState } from 'react';
import { getObject, storeAccountData } from './LocalStorage';

type AccountProviderProps = {
  children: ReactNode;
};

type AccountContextType = {
  getAccountData: () => AccountData;
  setAccountData: (
    name: string,
    phone: string,
    username: string,
    password: string
  ) => void;
};

export type AccountData = {
  name: string;
  phone: string;
  username: string;
  password: string;
};

const AccountContext = createContext({} as AccountContextType);

export function useAccount() {
  return useContext(AccountContext);
}

export function AccountProvider({ children }: AccountProviderProps) {
  const [account, setAccount] = useState({} as AccountData);
  function getAccountData() {
    getObject('@account').then((result) => setAccount(result));

    return account;
  }

  function setAccountData(
    name: string,
    phone: string,
    username: string,
    password: string
  ) {
    storeAccountData({
      name,
      phone,
      username,
      password,
    });
  }

  return (
    <AccountContext.Provider
      value={{
        getAccountData,
        setAccountData,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
