import { menuList } from "../data/data"


const Navbar = () => {
  return `
     ${menuList.map((menu) => {
           return `<a href='${menu.path}'>${menu.name}</a>`
     }).join("")}
  `
}

export default Navbar