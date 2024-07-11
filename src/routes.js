import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
    </div>
  )
}
