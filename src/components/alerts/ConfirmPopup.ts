import Swal from 'sweetalert2';

const confirmationPopup = async (text: string) => {
  const response = await Swal.fire({
    title: 'Eliminar',
    text,
    icon: 'error',
    confirmButtonText: 'Sí',
    confirmButtonColor: '#16A34A',
    showDenyButton: true,
    denyButtonText: 'No'
  });

  return response;
};

export default confirmationPopup;
