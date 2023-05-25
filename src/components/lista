const List = ({ collaborators, searchTerm }) => {
    const filteredCollaborators = collaborators.filter((collaborator) => {
        const searValue = searchTerm.toLowerCase()
        return (
            collaborator.name.toLowerCase().includes(searValue) ||
            collaborator.email.toLowerCase().includes(searValue)
        )
    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {filteredCollaborators.map((collaborator) => {
                    return (
                        <tr key={collaborator.id}>
                            <td>{collaborator.name}</td>
                            <td>{collaborator.email}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}

export default List