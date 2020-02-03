import React from 'react';
import {Text, StyleSheet, Button, View, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import Loader from '../Loader/Loader';
import Colors from '../../styles/Colors';
import {getTypes} from '../../helpers';

class PokemonTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemon: {},
    };
  }

  componentDidMount() {
    fetch(this.props.pokemon.url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          pokemon: responseJson,
        });
      });
  }

  render() {
    const {loading, pokemon} = this.state;
    return loading ? (
      <Loader />
    ) : (
      <View style={styles.tileContainer}>
        <View style={styles.pokemonInfo}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Text style={styles.pokemonType}>{getTypes(pokemon.types)}</Text>
        </View>
        <View styles={styles.imageContainer}>
          <Image
            source={{url: pokemon.sprites.front_default}}
            style={styles.pokemonImage}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() =>
              this.props.navigation.navigate('Pokemon', {
                pokemon: pokemon,
              })
            }
            title="Go!"
            color={Colors.black}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tileContainer: {
    height: 100,
    backgroundColor: Colors.light,
    width: '90%',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pokemonInfo: {
    padding: 15,
  },
  pokemonName: {
    fontSize: 20,
  },
  pokemonType: {
    fontSize: 15,
  },
  imageContainer: {},
  pokemonImage: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
  buttonContainer: {
    backgroundColor: Colors.red,
    width: 45,
    height: 45,
    borderRadius: 50,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: Colors.darkRed,
  },
});

export default withNavigation(PokemonTile);
