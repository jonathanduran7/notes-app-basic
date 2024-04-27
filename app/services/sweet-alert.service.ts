import Swal from 'sweetalert2'

export const sweetAlert = (icon: 'success' | 'error' | 'warning', title: string) => {
    Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer: 1500
    })
}

export const sweetAlertWarning = (title: string, text: string) => {
    return Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
    })
}