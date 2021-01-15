import React, {useState} from "react"
import { Text, StyleSheet, TouchableHighlight, Alert, View, Image} from "react-native";

export const Todo = props => {
  const [isDone,setDoneStatus] = useState(false)

  function onDone() {
    props.onDoneTodo(props.todo.id)
    setDoneStatus(prev => !prev)
  }

  function todoStyleOnDone() {
    return {
      backgroundColor: isDone ? "rgba(0, 191, 45, 0.4)" : "transparent",
      flexDirection: "row",
      alignItems: "center",
      minHeight: 60,
      borderWidth: 1,
      borderColor: "rgb(53, 143, 252)",
      borderRadius: 5,
      marginTop: 15,
      marginRight: 27,
      paddingHorizontal: 60
    }
  }

  return (
    <View style={todoStyleOnDone()}>
      <TouchableHighlight
        underlayColor="rgba(0, 191, 45, 0.85)"
        onPress={onDone}
        style={styles.todoDone}> 
        <Image style={styles.symbol} source={require("../assets/checkmark.png")}/>
      </TouchableHighlight>

      <Text style={isDone ? {textDecorationLine: "line-through"} : null}>{props.todo.title}</Text>

      <TouchableHighlight
        underlayColor="rgba(255,0,0,0.83)"
        onPress={() => Alert.alert("Для удаления удерживайте нажатие")}
        onLongPress={() => props.onRemove(props.todo.id)} 
        style={styles.todoDelete}>
      <Image style={styles.symbol} source={require("../assets/cross.png")}/>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  todoDone: {
    width: 52,
    height: "100%",
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "rgb(53, 143, 252)",
    borderRightWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  todoDelete: {
    width: 52,
    height: "100%",
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    borderLeftColor: "rgb(53, 143, 252)",
    borderLeftWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  symbol: {
    width: 35,
    height: 35
  }
})