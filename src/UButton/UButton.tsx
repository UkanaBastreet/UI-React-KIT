import React, { FC, ReactNode } from "react"

export interface UButtonProps {
  children: ReactNode
}

export const UButton: FC<UButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  )
}


