import React, { createContext, useState } from 'react'

export const SignUpContext = createContext({
  hiddne: false,
  toggleHiddne: () => {}
})

export const SignUpProvider = ({ children }) => {
  const [hiddne, sethiddne] = useState(false)

  const toggleHiddne = () => sethiddne(!hiddne)
  return (
    <SignUpContext.Provider
      value={{
        hiddne,
        toggleHiddne
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}
