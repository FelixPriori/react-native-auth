import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const { token } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(`https://react-native-course-8f7b1-default-rtdb.firebaseio.com/message.json?auth=${token}`)
      setMessage(response.data)
    }
    getMessage();
  }, [token])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
