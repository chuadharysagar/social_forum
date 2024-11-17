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



export const assets = {
  addPost,
  logo,
  profile,
  like,
  save,
  liked,
  saved,
}



export const menuData =[
  {
    label:"Home",
    img:home,
    altText:"Home Image",
  },
  {
    label:"Explore",
    img:explore,
    altText:"Explore Image",
  },
  {
    label:"People",
    img:people,
    altText:"People Image",
  },
  {
    label:"Saved",
    img:saved,
    altText:"Saved Image",
  },
  {
    label:"Create post",
    img:addPost,
    altText:"create psot Image",
  }
]


export const postData = [
  {
    title: "Somting beatufull nnatural love",
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
