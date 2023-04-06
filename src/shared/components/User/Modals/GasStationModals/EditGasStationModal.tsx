import Modal from 'react-modal';
import { ModalContainer } from '../styles';
import { FieldValues, useForm } from 'react-hook-form';
import { Button } from '../../../Button';
import {
  useEditGasStationMutation,
  useGetGasStationQuery,
} from '../../../../../redux/features/gasStation/gasStationSlice';
import { toast } from 'react-toastify';
import gasStationSchema from '../../../../schemas/gasStationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idPosto: string;
  nomePosto: string;
}

export function EditGasStationModal({
  isOpen,
  onRequestClose,
  idPosto,
  nomePosto,
}: ICreateEntityModalProps) {
  const [editGasStation] = useEditGasStationMutation();
  const { refetch } = useGetGasStationQuery();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(gasStationSchema),
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <ModalContainer>
        <i onClick={onRequestClose} className="ph ph-x-circle close-btn"></i>
        <h2>Edite os dados do Posto</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit((data: FieldValues) =>
            editGasStation({
              nome: data.nome,
              cidade: data.cidade,
              latitude: '20',
              longitude: '30',
              valorCombustivel: parseFloat(data.valorCombustivel),
              id: idPosto,
            }).then((response: any) => {
              if (response.error) {
                response.error.data.errors.map((err: string, i: number) => {
                  if (i < err.length) {
                    console.log('entrou');
                    return toast.error(err);
                  }
                });
              } else {
                refetch();
                reset();
                toast.success('Posto editado com sucesso!');
                onRequestClose();
              }
            })
          )}
        >
          <div className="posto-info-container">
            <p>
              Você está editando: <strong>{nomePosto}</strong>
            </p>
          </div>
          <label htmlFor="nome">Nome do Posto</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite o novo nome do posto"
            {...register('nome')}
          />
          <div className="error-yup">
            {errors.nome ? <>*{errors.nome?.message}</> : null}
          </div>

          <label htmlFor="cidade">Cidade do Posto</label>
          <input
            id="cidade"
            type="text"
            placeholder="Digite o novo cidade da cidade do posto"
            {...register('cidade')}
          />
          <div className="error-yup">
            {errors.cidade ? <>*{errors.cidade?.message}</> : null}
          </div>
          <label htmlFor="valorCombustivel">Valor Combustível</label>
          <input
            id="valorCombustivel"
            type="text"
            placeholder="Digite o novo valor do combustível"
            {...register('valorCombustivel')}
          />
          <div className="error-yup">
            {errors.valorCombustivel ? (
              <>*{errors.valorCombustivel?.message}</>
            ) : null}
          </div>
          <Button type="submit">Editar Posto</Button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
