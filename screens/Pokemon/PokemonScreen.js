import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Header from '../../components/Header/Header';
import StatsBar from '../../components/StatsBar/StatsBar';
import Colors from '../../styles/Colors';
import {getTypes} from '../../helpers';

const PokemonScreen = props => {
  const pokemon = props.navigation.getParam('pokemon', {});
  console.log(pokemon);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.headerContainer}>
              <Text style={styles.mainHeader}>
                {pokemon.name.toUpperCase()}
              </Text>
              <Text style={styles.secondaryHeader}>
                {getTypes(pokemon.types)}
              </Text>
            </View>
            <View style={styles.imagesContainer}>
              <Text style={styles.pokemonType}>Normal</Text>
              <Text style={styles.pokemonType}>Shiny</Text>
              <Image
                source={{url: pokemon.sprites.front_default}}
                style={styles.pokemonImage}
              />
              <Image
                source={{url: pokemon.sprites.front_shiny}}
                style={styles.pokemonImage}
              />
              <Image
                source={{url: pokemon.sprites.back_default}}
                style={styles.pokemonImage}
              />
              <Image
                source={{url: pokemon.sprites.back_shiny}}
                style={styles.pokemonImage}
              />
            </View>
            <View style={styles.statsContainer}>
              <Text style={styles.statsTitle}>Base stats</Text>
              {pokemon.stats.map((stat, key) => {
                return (
                  <StatsBar
                    stats={{name: stat.stat.name, value: stat.base_stat}}
                    key={key}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: Colors.navyBlue,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  mainHeader: {
    color: Colors.white,
    fontSize: 25,
  },
  secondaryHeader: {
    color: Colors.white,
    fontSize: 15,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonType: {
    width: 150,
    textAlign: 'center',
  },
  pokemonImage: {
    width: 150,
    height: 150,
  },
  statsTitle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});

export default PokemonScreen;
