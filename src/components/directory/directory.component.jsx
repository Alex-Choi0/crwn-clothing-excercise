import { Component } from "react"
import CategoryItem from "../category-item/category-item.component"
import "./directory.styles.scss"

class Directory extends Component {
  render() {
    console.log("check categories : ", this.props)
    const { category } = this.props
    return (
      <div className="directory-container">
        <CategoryItem key={category.id} category={category} />
      </div>
    )
  }
}

export default Directory
