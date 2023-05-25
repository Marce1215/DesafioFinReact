import React, { useEffect, useState } from 'react'
const Miapi = ({ productsData, searchTerm }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log(productsData)
        setProducts(productsData)
    }, [productsData])

 
    const onDelete = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, {
                //    const response = await fetch(`https://api.gael.cloud/general/public/monedas`, {    
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">URL</th>

                </tr>
            </thead>
            <tbody>
                {/* todo map products */}
                {products?.abilities?.map((a) => (
                    <tr key={a.ability.name}>
                        <td>{a.ability.name}</td>
                        <td>{a.ability.url}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Miapi;