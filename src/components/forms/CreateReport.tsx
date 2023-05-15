import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createReportSchema } from '@/helpers/yup/schemas';
import usePets from '@/hooks/usePets';
import useReports from '@/hooks/useReports';
import Message from '@/components/alerts/Message';
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import type { CreateReportFormValues } from '@/types/types';

const CreateReportForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<CreateReportFormValues>({
    resolver: yupResolver(createReportSchema),
    defaultValues: { petId: '' }
  });

  const { pets } = usePets();
  const { result, loading, error, handleCreateReport } = useReports({
    reset
  });

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <form
        onSubmit={handleSubmit(handleCreateReport)}
        className="bg-white px-8 py-5 rounded-xl space-y-8 shadow-sm"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-600">
            Crear informe médico
          </h1>

          <p className="text-lg text-gray-400">
            Ingresa los datos del formulario.
          </p>
        </div>

        {result && <Message text={result} />}

        {error && <Message text={error} isError />}

        <div className="space-y-5">
          <div>
            {errors.petId && (
              <Message className="mb-1" text={errors.petId.message} isError />
            )}

            <label htmlFor="petId" className="text-gray-600 pt-1">
              Mascota *
            </label>

            <select
              id="petId"
              className="w-full bg-gray-100 py-[14px] px-2 text-gray-600 rounded-md outline-teal-500 border-r-[16px] border-r-transparent"
              {...register('petId')}
            >
              <option value="" disabled>
                ---
              </option>

              {pets.map((pet) => (
                <option key={`${pet.name}-${pet.id}`} value={pet.id}>
                  {pet.name} - {pet.ownerName} {pet.ownerLastName}
                </option>
              ))}
            </select>
          </div>

          <div>
            {errors.diagnosis && (
              <Message
                className="mb-1"
                text={errors.diagnosis.message}
                isError
              />
            )}

            <label htmlFor="diagnosis" className="text-gray-600 pt-1">
              Diagnóstico *
            </label>

            <input
              id="diagnosis"
              type="text"
              placeholder="Infección en el oído"
              className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
              {...register('diagnosis')}
            />
          </div>

          <div className="flex flex-col">
            {errors.treatment && (
              <Message
                className="mb-1"
                text={errors.treatment.message}
                isError
              />
            )}

            <label htmlFor="treatment" className="text-gray-600 pt-1">
              Tratamiento *
            </label>

            <input
              id="treatment"
              type="text"
              placeholder="Sporanox"
              className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
              {...register('treatment')}
            />
          </div>

          <div className="flex flex-col">
            {errors.indications && (
              <Message
                className="mb-1"
                text={errors.indications.message}
                isError
              />
            )}

            <label htmlFor="comments" className="text-gray-600 pt-1">
              Indicaciones *
            </label>

            <textarea
              id="comments"
              placeholder="Sporanox"
              className="bg-gray-100 h-28 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500 resize-none"
              {...register('indications')}
            />
          </div>

          <div className="py-5">
            <button className="w-full bg-teal-500 py-3 rounded-md text-white text-lg font-bold hover:bg-teal-600 transition-colors duration-150">
              Crear cita
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateReportForm;
