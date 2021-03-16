import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks';


export default function App() {
    const [task, setTask] = useState()
    const [taskItem, setTaskItem] = useState([])

    const handleAddTask = () => {
        Keyboard.dismiss()
        setTaskItem([...taskItem, task])
        setTask(null)
    }

    const handleDeletask = (index) => {
        let itemCopy = [...taskItem]
        itemCopy.splice(index, 1)
        setTaskItem(itemCopy)
    }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
          <View style={styles.tasksWrapper}>
              <Text style={styles.sectionTitle}>Les tâches de la semaine</Text>
              <View style={styles.items}>
                  {taskItem.map((item, index) => {
                      return (
                          <TouchableOpacity key={index} onPress={() => handleDeletask(index)}>
                              <Tasks text={item} />
                          </TouchableOpacity>
                      ) 
                  })}
              </View>
          </View>
          <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.writeTaskWrapper}
          >
              <TextInput placeholder='Write a task'
                  style={styles.input}
                  value={task}
                  onChangeText={text => setTask(text)}
              />
              <TouchableOpacity onPress={() => handleAddTask()}>
                  <View style={styles.addWrapper}>
                      <Text style={styles.addText}>
                          +
                      </Text>
                  </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    },
    tasksWrapper: {
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5a189a'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addText: {},
});
