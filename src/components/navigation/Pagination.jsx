// src/components/common/Pagination.jsx

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-white disabled:text-gray-500"
      >
        ← Précédent
      </button>

      <span className="text-gray-400">
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-white disabled:text-gray-500"
      >
        Suivant →
      </button>
    </div>
  );
}