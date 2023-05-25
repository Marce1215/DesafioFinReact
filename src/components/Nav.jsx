
const Nav = ({onSearchChange}) => {
    const handleChangeSearch = (e) => {
        console.log(e.target.value)
        onSearchChange(e.target.value)
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChangeSearch} />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </nav>
        </>

    )
}

export default Nav