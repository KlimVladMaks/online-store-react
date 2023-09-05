const ProductServices = {

    async getAll() {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        return data;
    },

    async addNew(product) {
        await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
    }
}

export default ProductServices;
