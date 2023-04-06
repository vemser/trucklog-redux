import { Route, Routes } from "react-router-dom";
import { Homepage, Login } from "./pages";
import { Viagens, Roles, Caminhoes, Postos, Rotas } from "./pages/Admin";
import { ColaboratorLayout } from "./shared/layouts/CollaboratorLayout";
import { Dashboard } from "./pages/Admin/Dashboard/Dashboard";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* LandingPage Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />

            {/* Admin Routes */}
            {/* Privar rotas quando houver sistema de atutenticação */}
            <Route path="/usuario/" element={<ColaboratorLayout />}>
                <Route path="/usuario/dashboard" element={<Dashboard />} />
                <Route path="/usuario/viagens" element={<Viagens />} />
                <Route path="/usuario/motoristas" element={<Roles />} />
                <Route path="/usuario/caminhoes" element={<Caminhoes />} />
                <Route path="/usuario/postos" element={<Postos />} />
                <Route path="/usuario/rotas" element={<Rotas />} />
            </Route>
        </Routes>
    );
};
