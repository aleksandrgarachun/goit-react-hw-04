import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({onSubmit}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const newQuery = event.currentTarget.elements.searchQuery.value.trim();
        if (newQuery !== "") {
            onSubmit(newQuery);
            event.currentTarget.reset();
            toast.success("Loading", {
                position: "top-left",
            });
        } else {
            toast.error("Write a text in search", {
                position: "top-left"
            });
        }

    };
  return (
    <header>
        <form onSubmit={handleSubmit}>
            <input
            name='searchQuery'
            type="text"
            placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
            <Toaster/>
        </form>
    </header>

  )
}


export default SearchBar