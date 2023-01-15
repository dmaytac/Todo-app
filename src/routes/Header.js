const Header = ({isDarkMode}) =>{
    return(
        <div className={`header-${isDarkMode ? 'dark':'light'}`}>
            <h1>Todo App</h1>
        </div>
    )
}

export default Header