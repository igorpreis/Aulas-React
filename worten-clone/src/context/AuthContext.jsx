import { createContext , useState, useContext} from "react"

// Criar o context com seus valores

const AuthContext = createContext ({
user: null,
setUser: ()=>{},

})

// Declara os valores no Provider do Context

export default function AuthContextProvider({children}) {
  const {user, setUser } = useState(null)
  
  
    return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

// Lê os valores do context
export const useAuthContext = () => useContext(AuthContext)