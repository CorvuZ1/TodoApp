import React, {useState} from "react"
import { View, StyleSheet, TextInput, Button, Alert} from "react-native"

export const AddTodo = props => {

  const [value, setValue] = useState("")

  const pressHandler = () => {
    if (value.trim() != "") {
      props.onSubmit(value)
      setValue("")
    } else {
      Alert.alert("Необходимо ввести название задачи")
    }
  }
  
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
        placeholder="Название задачи"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Button
        color="rgb(53, 143, 252)" 
        onPress={pressHandler} 
        title="Добавить"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 15,
    marginRight: 27
  },
  input: {
    paddingHorizontal: 5,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "#3949ab",
    marginBottom: 7
  }
})