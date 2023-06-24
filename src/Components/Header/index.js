import { Link } from "react-router-dom";
function Header(){
  return (
    <sidebar className='grid grid-cols-1 gap-2 bg-red-500 w-96 h-screen content-center'>
      <button><Link to="/">Home</Link></button>
      <button>Works</button>
      <button>Gaming</button>
      <button>About</button>
    </sidebar>
  )
}

export default Header
