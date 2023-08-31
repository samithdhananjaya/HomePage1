import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>To Do List</Text>
      <View style={styles.image}>
        <Image
          source={{
            width: 150,
            height: 180,
            uri:
              'http://4.bp.blogspot.com/-8HfLPbR1n0M/VLREeYjL0pI/AAAAAAAAAb8/CxNo7Qn3vG0/s1600/To-Do+List.png',
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.userButton}>
            <Text style={[styles.buttonText, styles.centerText]}>Task 1</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <AntDesign name="circledowno" size={20} color="black" />
          </View>
        </View>

        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.userButton}>
            <Text style={[styles.buttonText, styles.centerText]}>Task 2</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <AntDesign name="circledowno" size={20} color="black" />
          </View>
          
        </View>

        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.userButton}>
            <Text style={[styles.buttonText, styles.centerText]}>Task 3</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <AntDesign name="circledowno" size={20} color="black" />
          </View>
        </View>

        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.userButton}>
            <Text style={[styles.buttonText, styles.centerText]}>Task 4</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <AntDesign name="circledowno" size={20} color="black" />
          </View>
        </View>
        
      </View>

      
      <View style={styles.typeTaskContainer}>
        <TouchableOpacity style={styles.typeTaskButton}>
          <Text style={styles.typeTaskText}>Type Task Here</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.circleButtonContainer}>
        <TouchableOpacity style={styles.circleButton}>
          <AntDesign name="plus" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <AntDesign name="minus" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.circleIcon}>
        
        <Text style={styles.iconText}></Text>
      </View>
      <View style={styles.circleIcon1}>
        
        <Text style={styles.iconText}></Text>
      </View>
      <View style={styles.circleIcon2}>
        
        <Text style={styles.iconText}></Text>
      </View>
      <View style={styles.circleIcon3}>
        
        <Text style={styles.iconText}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'midnightblue',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 30,
    margin: 0,
    color: 'white',
    fontFamily: 'Arial',
    bottom:35
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    bottom:40
  },
  userButton: {
    backgroundColor: '#8b8c81',
    padding: 15,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom:40,
    margin:5
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: "90%",
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    position: 'absolute',
    left: 15,
    bottom:60
  },
  typeTaskContainer: {
    position: 'absolute',
    bottom: 30,
    bottom:40,
    width: "50%",
  },
  typeTaskButton: {
    backgroundColor: '#8b8c81',
    padding: 15,
    right: 62,
    
  },
  typeTaskText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  centerText: {
    flex: 1,
    textAlign: 'center',
  },
  circleButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    right: 5,
    alignItems: 'center',
  },
  circleButton: {
    backgroundColor: '#8b8c81',
    borderRadius: 50,
    padding: 15,
    marginHorizontal: 10,
    
  },
  circleIcon: {
    position: 'absolute',
    top: 390, 
    right: 30, 
    width: 20,
    height: 20,
    borderRadius: 50, 
    borderColor: 'black', 
    borderWidth: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon1: {
    position: 'absolute', 
    top: 300, 
    right: 30, 
    width: 20,
    height: 20,
    borderRadius: 50, 
    borderColor: 'black',
    borderWidth: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon2: {
    position: 'absolute', 
    top: 465, 
    right: 30, 
    width: 20,
    height: 20,
    borderRadius: 50, 
    borderColor: 'black', 
    borderWidth: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon3: {
    position: 'absolute', 
    top: 550, 
    right: 30, 
    width: 20,
    height: 20,
    borderRadius: 50, 
    borderColor: 'black', 
    borderWidth: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});