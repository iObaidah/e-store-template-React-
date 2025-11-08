const yelpApiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
    async search(term, location, sortBy) {
        try {
            console.log('Searching Yelp for:', { term, location, sortBy });
            return await this.getMockData();
        } catch (error) {
            console.error('Yelp API Error:', error);
            return [];
        }
    },

    getMockData() {
        return [
            {
                id: '1',
                name: 'MarginOtto Pizzeria',
                imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
                address: '1010 Paddington Way',
                city: 'Flavortown',
                state: 'NY',
                zipCode: '10101',
                category: 'Italian',
                rating: 4.5,
                reviewCount: 90
            }
        ];
    }
};

export default Yelp;