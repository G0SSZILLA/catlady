let choices = [

    {
        img: 'https://wwfoldschool.com/wp-content/uploads/2017/03/The-Rock.jpg',

    },

    {
        img: "https://res.cloudinary.com/teepublic/image/private/s--EZbRohO5--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1578627556/production/designs/7519621_0.jpg",


    },

    {
        img: 'https://swsca-production.s3.amazonaws.com/uploads/attachments/17/edward-final-blog-post.jpg?1337098664',

    },
]




function play(playerChoice) {
    let computerChoice = Math.floor(Math.random() * choices.length);
    console.log('computerChoice', computerChoice);

    if (playerChoice > computerChoice) {
        alert('YOU WIN!')
    } else {
        alert('YOU LOSE!')
    }
}