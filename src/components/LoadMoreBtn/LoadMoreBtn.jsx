import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => {
  return (
    <div>
        <button className={css.buttonLoadMore}type="button" onClick={onClick}>
            Load more photos
        </button>
    </div>
  )
}

export default LoadMoreBtn