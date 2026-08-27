"use client";

type BookingMessageProps = {
  message: string;
  onClose: () => void;
};

export default function BookingMessage({
  message,
  onClose,
}: BookingMessageProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[90%] max-w-md rounded-xl bg-white p-8 text-center shadow-xl">
        <p className="mb-6 text-lg">{message}</p>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-[#74645B] px-6 py-2 text-white transition-colors hover:bg-[#5f514a]"
        >
          OK
        </button>
      </div>
    </div>
  );
}
