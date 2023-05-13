import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editPetSchema } from '@/helpers/yup/schemas';
import Message from '@/components/alerts/Message';
import usePets from '@/hooks/usePets';
import type { Pet, EditPetFormValues } from '@/types/types';
import LoadingSpinner from '@/components/layout/LoadingSpinner';

interface Props {
  pet: Pet | null;
}

const EditPetForm = ({ pet }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<EditPetFormValues>({
    resolver: yupResolver(editPetSchema),
    defaultValues: {
      name: pet?.name,
      species: pet?.species,
      gender: pet?.gender,
      age: pet?.age,
      weight: pet?.weight
    },
    resetOptions: { keepDefaultValues: false }
  });

  const { result, error, loading, handleUpdatePet } = usePets({ reset });

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <form
        onSubmit={handleSubmit(
          async (data) => await handleUpdatePet(pet, data)
        )}
        className="bg-white px-8 py-5 rounded-xl space-y-8 shadow-sm"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-600">Editar mascota</h1>

          <p className="text-lg text-gray-400">
            Ingresa los datos que deseas modificar.
          </p>
        </div>

        {result && <Message text={result} />}

        {error && <Message text={error} isError />}

        <div className="space-y-5">
          <div className="flex space-x-5">
            <div className="flex-1">
              {errors.name && (
                <Message className="mb-1" text={errors.name.message} isError />
              )}

              <label htmlFor="petName" className="text-gray-600 pt-1">
                Nombre *
              </label>

              <input
                id="petName"
                type="text"
                placeholder="Hook"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('name')}
              />
            </div>

            <div className="flex-1">
              {errors.species && (
                <Message
                  className="mb-1"
                  text={errors.species.message}
                  isError
                />
              )}

              <label htmlFor="species" className="text-gray-600">
                Especie *
              </label>

              <select
                id="species"
                className="w-full bg-gray-100 py-[14px] px-2 text-gray-600 rounded-md outline-teal-500 border-r-[16px] border-r-transparent"
                {...register('species')}
              >
                <option value="" disabled>
                  ---
                </option>

                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex-1">
              {errors.gender && (
                <Message
                  className="mb-1"
                  text={errors.gender.message}
                  isError
                />
              )}

              <label htmlFor="gender" className="text-gray-600">
                Género *
              </label>

              <select
                id="gender"
                className="w-full bg-gray-100 py-[14px] px-2 text-gray-600 rounded-md outline-teal-500 border-r-[16px] border-r-transparent"
                {...register('gender')}
              >
                <option value="" disabled>
                  ---
                </option>

                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="age" className="text-gray-600">
                Edad
              </label>

              <input
                id="age"
                type="text"
                placeholder="3"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('age')}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="weight" className="text-gray-600">
                Peso
              </label>

              <input
                id="weight"
                type="text"
                placeholder="8"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('weight')}
              />
            </div>
          </div>

          <div className="py-5">
            <button className="w-full bg-teal-500 py-3 rounded-md text-white text-lg font-bold hover:bg-teal-600 transition-colors duration-150">
              Guardar cambios
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPetForm;
