import React, {useState} from 'react';
import {View, ScrollView, Text, Button, Alert, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';
import Question from './components/Questions';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'lavender',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'purple',
    marginTop: 10,
  },

  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

  button: {
    marginTop: 20,
    height: 80,
    justifyContent: 'center',
  },
});

const App = () => {
  const [answer1, setAnswer1] = useState('Charmander');
  const [answer2, setAnswer2] = useState('Charmander');
  const [answer3, setAnswer3] = useState('Charmander');
  const [answer4, setAnswer4] = useState('Charmander');

  const submitAnswers = () => {
    let score = 0;

    if (answer1 === 'Pikachu') {
      score = score + 1;
    }

    if (answer2 === 'Bulbasaur') {
      score = score + 1;
    }

    if (answer3 === 'Charmander') {
      score = score + 1;
    }

    if (answer4 === 'Squirtle') {
      score = score + 1;
    }

    let feedback = '';

    if (score === 4) {
      feedback = 'Nice';
    } else if (score === 3) {
      feedback = 'Almost there';
    } else if (score === 2) {
      feedback = 'You can do better';
    } else {
      feedback = 'You SUCK';
    }

    Alert.alert(
        'Quiz Results',
        'You got ' + score + ' out of 4 answers correct!\n' + feedback
    );
  };

  return (
      <View style={styles.parent}>
        <ScrollView>
          <View style={styles.header}>
            <Icon
                name="gamepad"
                size={30}
                color="purple"
            />

            <Text style={styles.title}>
              {' '}Pokemon Quiz
            </Text>
          </View>

          <Text style={styles.subtitle}>
            Test your Pokemon knowledge!
          </Text>

          <Text style={styles.instructions}>
            Answer all 4 questions below.
          </Text>

          <Question
              number={1}
              image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png"
              options={['Charmander', 'Pikachu', 'Squirtle', 'Bulbasaur']}
              onValueChange={(value) => setAnswer1(value)}
              answer="How do you not know this is Pikachu"
          />

          <Question
              number={2}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMinhKzVmPip5tqeJepk2Wc7WPy8XSh_SYThjGC8zSdw&s"
              options={['Charmander', 'Pikachu', 'Squirtle', 'Bulbasaur']}
              onValueChange={(value) => setAnswer2(value)}
              answer="Bulbasaur"
          />

          <Question
              number={3}
              image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png"
              options={['Charmander', 'Pikachu', 'Squirtle', 'Bulbasaur']}
              onValueChange={(value) => setAnswer3(value)}
              answer="Charmander"
          />

          <Question
              number={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIjxfnSF1b0qh3XtFfdb6S8xooV4AAUiVkUwiNU7zCQ&s"
              options={['Charmander', 'Pikachu', 'Squirtle', 'Bulbasaur']}
              onValueChange={(value) => setAnswer4(value)}
              answer="Squirtle"
          />

          <View style={styles.button}>
            <Button
                title="Submit Answers"
                color="purple"
                onPress={submitAnswers}
            />
          </View>
        </ScrollView>
      </View>
  );
};

export default App;