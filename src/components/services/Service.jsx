import { useState } from "react"
import { Outlet } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

function Service() {
  const service1 = useOutletContext()[0];
  const [service] = useOutletContext();
  return (
    <>
      <div>service:{service}</div>
    </>
  )
}

export default Service