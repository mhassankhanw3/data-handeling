const movies = [
  {
    i: {
      height: 2048,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
      width: 1365,
    },
    id: "tt2911666",
    l: "John Wick",
    q: "feature",
    qid: "movie",
    rank: 434,
    s: "Keanu Reeves, Michael Nyqvist",
    y: 2014,
  },
  {
    i: {
      height: 6001,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
      width: 4051,
    },
    id: "tt10366206",
    l: "John Wick: Chapter 4",
    q: "feature",
    qid: "movie",
    rank: 319,
    s: "Keanu Reeves, Donnie Yen",
    y: 2023,
  },
  {
    i: {
      height: 2048,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg",
      width: 1328,
    },
    id: "tt4425200",
    l: "John Wick: Chapter 2",
    q: "feature",
    qid: "movie",
    rank: 1061,
    s: "Keanu Reeves, Riccardo Scamarcio",
    y: 2017,
  },
  {
    i: {
      height: 5550,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
      width: 3600,
    },
    id: "tt6146586",
    l: "John Wick: Chapter 3 - Parabellum",
    q: "feature",
    qid: "movie",
    rank: 990,
    s: "Keanu Reeves, Halle Berry",
    y: 2019,
  },
  {
    id: "tt12844100",
    l: "John Wick: Chapter 5",
    q: "feature",
    qid: "movie",
    rank: 10090,
    s: "Keanu Reeves",
  },
  {
    i: {
      height: 2222,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjQ2YzgxNDUtMmM1NS00MzI1LWI1NjYtZjUyYjBhZjQ5MDdmXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_.jpg",
      width: 1500,
    },
    id: "tt5278630",
    l: "John Wick: Don't F*#% with John Wick",
    q: "short",
    qid: "short",
    rank: 20913,
    s: "",
    y: 2015,
  },
  {
    i: {
      height: 3000,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNmM2YmY2MzgtZTViNC00NGQxLWE5ZjEtNjFjZmUxZTBkN2Q1XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_.jpg",
      width: 2000,
    },
    id: "tt7161894",
    l: "As Above, So Below: The Underworld of 'John Wick'",
    q: "video",
    qid: "video",
    rank: 10609,
    s: "Basil Iwanyk, Keanu Reeves",
    y: 2017,
  },
  {
    i: {
      height: 600,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYmI2NTIzNWYtYjVkNi00ZmRkLTlkYmUtZTU5YjVjNDMzMTdkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
      width: 600,
    },
    id: "tt10275370",
    l: "John Wick: Chapter 3 - Parabellum: HBO First Look",
    q: "short",
    qid: "short",
    rank: 39023,
    s: "Halle Berry, Mark Dacascos",
    y: 2019,
  },
];
start();
function start() {
  const member = movies.filter((item) => item.y >= 2022);
  console.log(member);
}