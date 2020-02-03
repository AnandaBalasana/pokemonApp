import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import PokemonTile from '../../components/PokemonTile/PokemonTile';
import Colors from '../../styles/Colors';

class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
    this.getPokemons.bind(this);
  }
  getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          list: responseJson.results,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getPokemons();
  }

  render() {
    const {loading, list} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
              {loading ? (
                <Loader />
              ) : (
                list.map((pokemon, key) => {
                  return (
                    <PokemonTile
                      pokemon={pokemon}
                      key={key}
                    // onPress={}
                    />
                  );
                })
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

class List extends React.Component {
  render() {
    return <Text>List</Text>;
  }
}

export default ListScreen;
