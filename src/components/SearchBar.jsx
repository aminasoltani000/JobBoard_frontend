import { Search, X } from 'lucide-react'

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="relative">
            <Search
                className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--color-bleufoncer)', opacity: 0.35 }}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />

            <input
                type="text"
                placeholder="Rechercher par titre ou entreprise..."
                value={searchTerm}
                onChange={onSearchChange}
                className="w-full pl-11 pr-5 py-3 rounded-xl text-sm outline-none border border-beigefoncer bg-white text-bleufoncer transition-all focus:border-mauve focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
         
            />

       
            {searchTerm && (
                <button
                    onClick={() => onSearchChange({ target: { value: '' } })}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 bg-beigefoncer text-bleufoncer"

                >
                    <X className="w-3 h-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </button>
            )}
        </div>
    )
}

export default SearchBar