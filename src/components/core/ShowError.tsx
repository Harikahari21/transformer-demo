import Swal from "sweetalert2";

export const ShowError = (error: unknown) => {
  return (
    error instanceof Error &&
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
    })
  );
};
