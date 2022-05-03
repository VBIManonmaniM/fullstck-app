import React, {Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ToDo = React.lazy(() => import("../widgets/ToDo"))
const Home = React.lazy(() => import("../widgets/Home"))

const Router = () => {
  return <BrowserRouter>
    <Suspense fallback={<div>Loading modules</div>}>
      <Routes>
        <Route path="/" element={<ToDo />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
}

export default Router