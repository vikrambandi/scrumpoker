import classNames from "classnames";

export const Dialog = ({
  open = false,
  title = "",
  onClose = () => {},
  onCancel,
  onConfirm,
}: {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  onCancel?: () => {};
  onConfirm?: () => void;
}) => {
  if (!open) {
    return null;
  }
  return (
    <dialog
      id="my_modal_3"
      className={classNames(["modal", { "modal-open": open }])}
    >
      <div className="modal-box">
        {onClose && (
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        )}
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-accent w-full max-w-xs"
          onChange={() => {}}
        />
        {title && <h3 className="text-lg font-bold">Hello!</h3>}
        <div className="space-between flex flex-row">
          {onCancel && (
            <button className="btn self-start" onClick={onCancel}>
              Cancel
            </button>
          )}
          {onConfirm && (
            <button className="btn btn-primary self-end" onClick={onConfirm}>
              Confirm
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
};
