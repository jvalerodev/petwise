import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editReportSchema } from '@/helpers/yup/schemas';
import useReports from '@/hooks/useReports';
import Message from '@/components/alerts/Message';
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import type { EditReportFormValues, Report } from '@/types/types';

interface Props {
  report: Report | null;
}

const EditReportForm = ({ report }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<EditReportFormValues>({
    resolver: yupResolver(editReportSchema),
    defaultValues: {
      diagnosis: report?.diagnosis,
      treatment: report?.treatment,
      indications: report?.indications
    }
  });
  const { result, loading, error, handleEditReport } = useReports({
    reset
  });

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <form
        onSubmit={handleSubmit(
          async (data) => await handleEditReport(report, data)
        )}
        className="bg-white px-8 py-5 rounded-xl space-y-8 shadow-sm"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-600">
            Editar informe médico
          </h1>

          <p className="text-lg text-gray-400">
            Ingresa los datos que deseas modificar.
          </p>
        </div>

        {result && <Message text={result} />}

        {error && <Message text={error} isError />}

        <div className="space-y-5">
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

export default EditReportForm;
