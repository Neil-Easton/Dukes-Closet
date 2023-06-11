import './category-item.styles.scss'

const CategoryItem = ({Category}) => {

    const {id, title, imageUrl} = Category;

    return (
        <div className="category-container">
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }}></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now!</p>
          </div>
        </div>
      );
}

export default CategoryItem;