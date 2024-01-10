const toasifyColors = {
  "--toastify-color-error": "#e74c3c",
};

const TOAST_OPTIONS = {
  theme: "light",
  position: "top-center",
  autoClose: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  style: { border: `1px solid ${toasifyColors["--toastify-color-error"]}` },
};

const TOAST_CONTAINER_ATTRIBUTES = {
  limit: 2,
  newestOnTop: true,
};

const DEFAULT_PORT = 5050;

export { TOAST_OPTIONS, TOAST_CONTAINER_ATTRIBUTES, DEFAULT_PORT };
