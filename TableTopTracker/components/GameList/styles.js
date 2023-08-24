import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  homePageContainer: {
  margin: 'auto',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  collectionsList: {

  },
  gamesList: {
    padding: 10,
    margin: 10,
  },
  gamesListContainer: {
    flex: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardContainer: {
    elevation: 8,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: "0.4em" },
    margin: 8,
  },
  card: {
    mode: 'contained',
    flex: 1,
    backgroundColor: theme.colors.onTertiary,
    borderRadius: 8,
  },
  thumbnail: {
    width: 75,
    height: 75,
    resizeMode: 'cover', // others available
    marginRight: 10 // adjust margin as needed
  },
  thumbnailContainer: {
    padding: 'auto',
    border: '5x solid white',
    borderRadius: 5,
  },
  cardGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.Bold
  },
  backgroundImage: {
    // flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default styles;