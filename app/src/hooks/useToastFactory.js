import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../utils/constants";

function useToastFactory() {
  function errorToast(message) {
    toast.error(message, TOAST_OPTIONS);
  }

  return errorToast;
}

export default useToastFactory;
