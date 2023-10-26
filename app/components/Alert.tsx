import { useAtom } from "jotai";
import { alertAtom } from "../state";

export function Alert() {
  const [alert, setAlert] = useAtom(alertAtom);
  console.log("alert", alert);
  
  return (
    <dialog id="alert" className="modal bg-gray-200 opacity-0" open={alert.message.length > 0}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{alert.title}</h3>
        <p className="py-4">{alert.message}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn"
              onClick={(e) => {
                setAlert({
                  title: "",
                  message: "",
                });
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
