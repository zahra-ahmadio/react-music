import { v4 as uuidv4 } from 'uuid';
  function chillHop () {
      return [
          {
            name :"By Chance",
              artist : "SwuM",
              cover :"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
              id : uuidv4(),
              active: true,
              color:['#5A2721','#443927'],
              audio :"https://mp3.chillhop.com/serve.php/?mp3=15223",
          },
          {
              name :"Skates",
              artist : "SwuM",
              cover :"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
              id : uuidv4(),
              active: false,
              color:['#5A2721','#443927'],
              audio :"https://mp3.chillhop.com/serve.php/?mp3=15225",
          },
      ];

  }
  export default chillHop ;