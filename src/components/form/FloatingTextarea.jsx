// src/components/form/FloatingTextarea.jsx

export default function FloatingTextarea({ label, name, required = false, rows = 5 }) {
  return (
    <div className="relative z-0 w-full group">
      <textarea
        name={name}
        id={name}
        rows={rows}
        required={required}
        placeholder=" "
        className="
          block px-3 pb-2.5 pt-4 w-full text-sm text-white bg-[#1f1f1f]
          rounded-md border border-[#3a3a3a] appearance-none
          focus:outline-none focus:ring-0 focus:border-[#5AC8FA]
          peer transition resize-none
        "
      />
      <label
        htmlFor={name}
        className="
          absolute text-sm text-gray-400 duration-300 transform
          -translate-y-3 scale-75 top-2 z-10 origin-[0] left-3
          peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100
          peer-focus:scale-75 peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
}