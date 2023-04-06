import { useEffect, useState } from "react";

import { RotasContainer } from "./styles";
import {
  CreateRouteModal,
  EditRouteModal,
  DeleteRouteModal,
} from "../../../shared/components/User/Modals";
import { Button } from "../../../shared/components/Button";
import { useGetRouteQuery } from "../../../redux/features/route/routeSlice";
import loadingGif from "../../../assets/TruckGif.gif";

export const Rotas = () => {
  const [searchRoute, setSearchRoute] = useState("");
  const [isCreateRouteModalOpen, setIsCreateRouteModalOpen] = useState(false);
  const [isEditRouteModalOpen, setIsEditRouteModalOpen] = useState(false);

  const [idRoute, setIdRoute] = useState(0);
  const [descriptionRoute, setDescriptionRoute] = useState("");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleRemoveEditModal = (idRota: number, descricaoRota: string) => {
    setIsDeleteModalOpen(true);
    setIdRoute(idRota);
    setDescriptionRoute(descricaoRota);
  };

  useEffect(() => {
    document.title = "Rotas | TruckLog";
  }, []);

  const handleOpenEditModal = (idRota: number, descricaoRota: string) => {
    setIsEditRouteModalOpen(true);
    setIdRoute(idRota);
    setDescriptionRoute(descricaoRota);
  };
  const { data, isLoading } = useGetRouteQuery();

  return (
    <RotasContainer>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          <main className="content">
            <div className="user-trail">
              <span>Meu Painel</span>
              <span>{" > "}</span>
              <a className="selected">Rotas</a>
            </div>

            <h2 className="title-page" data-testid="page-name">
              Rotas
            </h2>
            <Button
              onClick={() => setIsCreateRouteModalOpen(true)}
              className="create-button"
            >
              Cadastrar Rota <i className="ph ph-plus"></i>
            </Button>
            <input
              value={searchRoute}
              onChange={(e) => setSearchRoute(e.target.value)}
              type="text"
              placeholder="Procurar postos"
            />

            <div className="gas-station-header">
              <p>
                Descrição <i className="ph ph-arrow-down"></i>
              </p>
              <p>Partida</p>
              <p>Destino</p>
              <p>Status</p>
            </div>

            <div className="gas-station-body ">
              {data ? (
                data
                  .slice()
                  .sort((route) => {
                    return route.status === "ATIVO" ? -1 : 1;
                  })

                  .filter((route) =>
                    route.descricao
                      .toLowerCase()
                      .includes(searchRoute.toLowerCase())
                  )
                  .map((route) => (
                    <div
                      className={
                        route.status === "ATIVO"
                          ? "posto ativo"
                          : "posto inativo"
                      }
                      key={route.idRota}
                    >
                      <p>{route.descricao}</p>
                      <div>
                        <p>{route.localPartida}</p>
                      </div>
                      <div>{route.localDestino}</div>
                      <div
                        className={
                          route.status === "ATIVO" ? "ativo" : "inativo"
                        }
                      >
                        {route.status}
                      </div>

                      <div className="btn-container">
                        <button
                          onClick={() =>
                            handleOpenEditModal(route.idRota, route.descricao)
                          }
                          disabled={route.status === "ATIVO" ? false : true}
                        >
                          <i title="Editar Posto" className="ph ph-pencil"></i>
                        </button>

                        <button
                          onClick={() =>
                            handleRemoveEditModal(route.idRota, route.descricao)
                          }
                          title="Deletar Posto"
                          disabled={route.status === "ATIVO" ? false : true}
                        >
                          <i className="ph ph-trash delete-icon"></i>
                        </button>
                      </div>
                    </div>
                  ))
              ) : (
                <p>Estamos carregando a página</p>
              )}
            </div>
          </main>
          <CreateRouteModal
            isOpen={isCreateRouteModalOpen}
            onRequestClose={() => setIsCreateRouteModalOpen(false)}
          />
          <EditRouteModal
            isOpen={isEditRouteModalOpen}
            onRequestClose={() => setIsEditRouteModalOpen(false)}
            descricaoRota={descriptionRoute}
            idRota={idRoute}
          />
          <DeleteRouteModal
            isOpen={isDeleteModalOpen}
            onRequestClose={() => setIsDeleteModalOpen(false)}
            idRota={idRoute}
            descricaoRota={descriptionRoute}
          />
        </>
      )}
    </RotasContainer>
  );
};
