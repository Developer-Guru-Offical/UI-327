
import { createContext } from 'react';

export const UserContex = createContext();

export const UserContexProvider=({children})=>{
   const name="Develoer Guru";
  return(<UserContex.Provider value={name}>
      {children}
    </UserContex.Provider>)
}






















 //export const UserContext = createContext();

// export const UserContexProvider=({children})=>{
//   const name="developer Guru";
//   console.log(children);
//     return (
//     <UserContext.Provider value={name}>
//       {children}
//     </UserContext.Provider>)
// }