import Swal from 'sweetalert2';

const confirmationPopup = async () => {
  const response = await Swal.fire({
    title: 'Eliminar',
    text: '¿Estás seguro que deseas eliminar a esta mascota?',
    icon: 'error',
    confirmButtonText: 'Sí',
    confirmButtonColor: '#16A34A',
    showDenyButton: true,
    denyButtonText: 'No'
  });

  return response;
};

export default confirmationPopup;
