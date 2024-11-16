import React from 'react'

const header = ({ title, subtitle}: { title: string, subtitle?: string }) => {
  return (
    <>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      {subtitle && <p className="p-16-reular mt-4">{subtitle}</p>}
    </>
  )
}

export default header
