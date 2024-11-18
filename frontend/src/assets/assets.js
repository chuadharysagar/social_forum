import addPost  from './add-post.svg'
import logo from './logo.svg'
import profile from './profile.png'
import home from './home.svg'
import explore from './wallpaper.svg'
import people from './people.svg'
import saved from './saved.svg'
import save from './save.svg'
import post1 from './post1.jpeg'
import post2 from './post2.jpeg'
import post3 from './post3.jpeg'
import like from './like.svg'
import liked from './liked.svg'
import edit from './edit.svg'
import posts from './posts.svg'



export const assets = {
  addPost,
  logo,
  profile,
  like,
  save,
  liked,
  saved,
  edit,
  posts,
}



export const menuData =[
  {
    label:"Home",
    img:home,
    altText:"Home Image",
    path:"/home",
  },
  {
    label:"Explore",
    img:explore,
    altText:"Explore Image",
    path:"/",

  },
  {
    label:"People",
    img:people,
    altText:"People Image",
    path:"/",

  },
  {
    label:"Saved",
    img:saved,
    altText:"Saved Image",
    path:"/",

  },
  {
    label:"Create post",
    img:addPost,
    altText:"create psot Image",
    path:"/",
  }
]


export const postData = [
  {
    title: "Somting beatufull natural love",
    tags: ['Amazing', 'cill', 'vibe'],
    img: post1,
    like: 20
  },
  {
    title: "Another beautiful moment",
    tags: ['Joy', 'Nature', 'Peace'],
    img: post2,
    like: 35
  },
  {
    title: "Incredible sunset vibes",
    tags: ['Sunset', 'Romantic', 'Sky'],
    img: post3,
    like: 50
  },
  {
    title: "A tranquil morning walk",
    tags: ['Calm', 'Serenity', 'Fresh'],
    img: post1,
    like: 12
  },
  {
    title: "The magic of nature",
    tags: ['Forest', 'Green', 'Relax'],
    img: post2,
    like: 28
  }
];


export const topCreaterData = [
  {
    profileImg: "profile1.png",
    Name: "Santosh",
    userName: "@santosh"
  },
  {
    profileImg: "profile2.png",
    Name: "Anita",
    userName: "@anita"
  },
  {
    profileImg: "profile3.png",
    Name: "Ravi",
    userName: "@ravi"
  },
  {
    profileImg: "profile4.png",
    Name: "Priya",
    userName: "@priya"
  },
  {
    profileImg: "profile5.png",
    Name: "Karan",
    userName: "@karan"
  }
];
