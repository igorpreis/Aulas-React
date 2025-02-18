import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter, Routes, Route } from "react-router"
import BemVindoPage from "./pages/BemVindo/index.jsx"
import ContadorPage from "./pages/Contador/index.jsx"
import ListaItemsPage from "./pages/ListaItems/index.jsx"
import ListaTarefasPage from "./pages/ListaTarefas/index.jsx"
import RelogioPage from "./pages/Relogio/index.jsx"
import SaudacaoPage from "./pages/Saudacao/index.jsx"
import ListarPostsPage from "./pages/ListarPosts/index.jsx"
import Layout from "./components/Layout/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />}></Route>
          <Route path="/bem-vindo" element={<BemVindoPage />}></Route>
          <Route path="/contador" element={<ContadorPage />}></Route>
          <Route path="/lista-items" element={<ListaItemsPage />}></Route>
          <Route path="/lista-tarefas" element={<ListaTarefasPage />}></Route>
          <Route path="/relogio" element={<RelogioPage />}></Route>
          <Route path="/saudacao" element={<SaudacaoPage />}></Route>
          <Route path="/listar-posts" element={<ListarPostsPage />}></Route>
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
