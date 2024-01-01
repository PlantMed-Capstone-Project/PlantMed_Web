export const plantDetail = [
    {
        plantID: 1,
        name: 'cay bach linh',
        nameEx: 'hello cay bach linh',
        des: 'Cây, người bạn thân thiết của tự nhiên, là biểu tượng của sức sống và sự sinh sôi. Mỗi cây mang trong mình một câu chuyện đặc biệt: từ sự mạnh mẽ của cây sồi với thân gỗ vững chãi, đến vẻ thanh cao của cây thông trước bức trời xanh thẳm. Cây không chỉ là nguồn cảm hứng vô tận cho nghệ thuật và triết học mà còn là nguồn tài nguyên quý giá cho cuộc sống. Với khả năng hấp thụ khí CO2 và sản xuất oxy, cây góp phần quan trọng trong việc duy trì hệ sinh thái và cân bằng môi trường. Từ hình dáng, màu sắc đến mùi hương của lá, mỗi chi tiết của cây đều góp phần tạo nên vẻ đẹp tuyệt vời, khiến chúng trở thành phần không thể thiếu trong cuộc sống của chúng ta.',
        images: [
            {
                id: 1,
                image: 'https://img.freepik.com/free-photo/friends-eating-pizza-home-together_23-2150419466.jpg?w=996&t=st=1703921666~exp=1703922266~hmac=f37187d50ac51e947ea3a89d24fec33fd6df1b212a9312f5a8eadfcc89902010',
            },
            {
                id: 2,
                image: 'https://img.freepik.com/free-photo/front-view-smiley-man-eating-pizza_23-2149872409.jpg?w=360&t=st=1703921737~exp=1703922337~hmac=d2266491ec4568f0f2937311e695c92442a0ab652366cc8283db3dbb88910bc7',
            },
            {
                id: 3,
                image: 'https://img.freepik.com/free-photo/high-angle-women-holding-pizza_23-2149872390.jpg?t=st=1703921737~exp=1703922337~hmac=30c1a541395d0ab75d558fe4e6aa200c9fa39d0c975eb20d588969e2d34de62d',
            },
            {
                id: 4,
                image: 'https://img.freepik.com/free-photo/friends-eating-pizza-home-together_23-2150419466.jpg?w=996&t=st=1703921666~exp=1703922266~hmac=f37187d50ac51e947ea3a89d24fec33fd6df1b212a9312f5a8eadfcc89902010',
            },
            {
                id: 5,
                image: 'https://img.freepik.com/free-photo/front-view-women-with-pizza_23-2149872439.jpg?t=st=1703921737~exp=1703922337~hmac=1863ba826e007c2c25e9c97c6bd9e7d45deffd5f88b8ae6f9c9f879d7251ffaa',
            },
            {
                id: 6,
                image: 'https://img.freepik.com/free-photo/friends-eating-pizza-home-together_23-2150419466.jpg?w=996&t=st=1703921666~exp=1703922266~hmac=f37187d50ac51e947ea3a89d24fec33fd6df1b212a9312f5a8eadfcc89902010',
            },
            {
                id: 7,
                image: 'https://img.freepik.com/free-photo/friends-eating-pizza-home-together_23-2150419466.jpg?w=996&t=st=1703921666~exp=1703922266~hmac=f37187d50ac51e947ea3a89d24fec33fd6df1b212a9312f5a8eadfcc89902010',
            },
            {
                id: 8,
                image: 'https://img.freepik.com/free-photo/friends-eating-pizza-home-together_23-2150419466.jpg?w=996&t=st=1703921666~exp=1703922266~hmac=f37187d50ac51e947ea3a89d24fec33fd6df1b212a9312f5a8eadfcc89902010',
            },
            {
                id: 9,
                image: 'https://img.freepik.com/free-photo/friends-eating-pizza-home-together_23-2150419466.jpg?w=996&t=st=1703921666~exp=1703922266~hmac=f37187d50ac51e947ea3a89d24fec33fd6df1b212a9312f5a8eadfcc89902010',
            },
            {
                id: 10,
                image: 'https://img.freepik.com/free-photo/friends-eating-pizza-home-together_23-2150419466.jpg?w=996&t=st=1703921666~exp=1703922266~hmac=f37187d50ac51e947ea3a89d24fec33fd6df1b212a9312f5a8eadfcc89902010',
            },
        ],
    },
]

export const getIdPlant = (value) => {
    return plantDetail.filter((vl) => vl.plantID === value)
}
