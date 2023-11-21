import React from 'react'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
        Layout file in admin group route
      {children}
    </div>
  )
}
