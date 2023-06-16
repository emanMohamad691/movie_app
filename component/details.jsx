import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const imgPath = "https://image.tmdb.org/t/p/w500/";

export function Details({ navigation, route }) {
  const id = route.params.moveid;
  // console.log(id)

  const [movies, setMovies] = useState([]);
  getMovie()
  function getMovie() {
    fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US`)
      .then((res) => { return res.json() })
      .then((data) => {
        setMovies(data)
        // console.log(data)
      })
  }
  return (
    <View style={styles.container}>
      <ScrollView>

        <Image
          style={styles.imgstyle}
          source={{
            width: 300,
            height: 300,
            uri: imgPath + movies.poster_path
          }}
        />

        <Text style={{ padding: 10, textAlign: "center" }}>{movies.title}</Text>

        <Text style={{ padding: 10, textAlign: "center" }}>{movies.overview}</Text>


      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',

  },
  imgstyle: {
    marginTop: 55,
    marginLeft: 60,

  }

});
