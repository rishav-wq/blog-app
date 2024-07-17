import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img 
        className='headerImg' 
        src="https://images.unsplash.com/photo-1434735327738-ddce4141037a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
         alt="" />
    </div>
  )
}
