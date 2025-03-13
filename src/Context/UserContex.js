
import { createContext } from 'react';

export const UserContex = createContext();

export const UserContexProvider=({children})=>{
   const name="Develoer Guru";
  return(<UserContex.Provider value={name}>
      {children}
    </UserContex.Provider>)
}



