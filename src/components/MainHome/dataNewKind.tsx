export interface dataNewKind {
    id: number
    imageUrl: string
    des: string
    desp: string
}

const dataNewKind: dataNewKind[] = [
    {
        id: 1,
        imageUrl:
            'https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg',
        des: 'Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.',
        desp: '',
    },
    {
        id: 2,
        imageUrl:
            'https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg',
        des: 'Retail Market Hours:',
        desp: 'Thursday – Sun: 11:00AM - 7:00PM',
    },
    {
        id: 3,
        imageUrl:
            'https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg',
        des: ' Food Hall Hours:',
        desp: 'Mon – Sun: 11:00AM - 8:00PM',
    },
]
export default dataNewKind
