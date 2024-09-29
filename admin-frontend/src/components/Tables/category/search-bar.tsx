interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => (
    <div className="flex w-1/2 items-center">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-grow rounded-l-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSearch}
        className="hover:bg-primary-dark rounded-r-lg bg-primary px-5 py-3 text-white transition"
      >
        Search
      </button>
    </div>
  );
  
  export default SearchBar;