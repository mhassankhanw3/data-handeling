import Head from "next/head";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const [moviedata, setMoviedata] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(moviedata);
  }, [moviedata]);
  
  const dataHandle = () => {
    try {
      setLoading(true);
      axios
        .get("https://imdb8.p.rapidapi.com/auto-complete", {
          params: { q: movieSearch },
          headers: {
            "X-RapidAPI-Key":
              "a4ee3ed4c9msh242ccb05130d2e6p1d5d08jsnb8bb6573fb7f",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
        })
        .then((res) => setMoviedata(res.data.d))
        .catch((err) => console.log(err, "error"));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.head}>
      <h1 className={styles.header}>IMDB</h1><p>movies</p>
      </div>
      <div className={styles.input}>
        <BsSearch className={styles.search} onClick={dataHandle} />
        <input
          type="text"
          value={movieSearch}
          onChange={(e) => setMovieSearch(e.target.value)}
        />
        {/* <button className={styles} >Search</button> */}
      </div>
      <div className={styles.flex_cards}>
        {loading
          ? "Loading"
          : moviedata.length > 0 &&
            moviedata.filter((i) => i.y >= 2022).map((item) => (
              <div className={styles.card} key={item.id}>
                <img src={ item.i && item.i.imageUrl} alt="" />
                <h2 className="text-3xl font-bold underline">{item.l}</h2>
                <p className={styles.movie_name}>{item.qid}</p>
                <p className={styles.actor_name}>{item.s}</p>
                <p className={styles.year}>{item.y}</p>
              </div>
            ))}
      </div>
    </div>
  );
}





// object = {
//   name: "hassan",
//   age: 18,
//   gender: "m",
// };

// array = [1, 2, 3, 4, 56, 7];

// // array of objects
// personal = [{ name: "hasan" }, { name: "taha" }, { name: "afnan" }];

// //  object with array

// hasan = {
//   familymemebrs : ["osama" , "hasan" ,"shaerr"]
// }

// hasan.familymemebrs[0]
