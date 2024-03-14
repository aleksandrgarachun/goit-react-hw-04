import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"
import { IoIosSearch } from "react-icons/io";

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
    <header className={css.header}>
        <form className={css.formSearch} onSubmit={handleSubmit}>
            <input
            name='searchQuery'
            type="text"
            placeholder="Search images and photos"
            className={css.inputSearch}
            />
            
            <button className={css.inputButton} type="submit"><IoIosSearch /></button>
            <Toaster/>
        </form>
    </header>

  )
}


export default SearchBar