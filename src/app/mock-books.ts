import { Book } from "./book";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them\n' +
      '\n' +
      'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.\n' +
      '\n' +
      'From Sauron\'s fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.\n' +
      '\n' +
      'When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.\n' +
      '\n' +
      'The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.',
    rating: 4.5,
    genre: 'Fantasy',
    reviewCount:1000,
    url:'',
    shelves: ['read', 'currentlyReading', 'wantToRead']
  },
  {
    id: 2,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'The Hobbit.',
    rating: 4.5,
    genre: 'Fantasy',
    reviewCount:1000,
    url: '',
    shelves: ['read', 'currentlyReading', 'wantToRead']
  },
  {
    id: 3,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'The Catcher in the Rye and other stories',
    rating: 4.5,
    genre: 'Fantasy',
    reviewCount:1000,
    url: '',
    shelves: ['read', 'currentlyReading', 'wantToRead']
  }
  ];
