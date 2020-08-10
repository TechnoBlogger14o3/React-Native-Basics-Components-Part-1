import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import TODOItems from './components/TODOItems';
import AddTODO from './components/AddTODO';

export default function App() {
  const [todos, setTODOs] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTODOHandler = todoTitle => {
    setTODOs(currentTODO => [
      ...currentTODO,
      { id: Math.random().toString(), value: todoTitle }
    ]);
    setIsAddMode(false);
  };

  const removeTODOHandler = todoID => {
    setTODOs(currentTODOs => {
      return currentTODOs.filter(todo => todo.id !== todoID);
    });
  };

  const cancelTODO = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="TODO List" onPress={() => setIsAddMode(true)} />
      <AddTODO
        visible={isAddMode}
        onAddTODO={addTODOHandler}
        onCancel={cancelTODO}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todos}
        renderItem={itemData => (
          <TODOItems
            id={itemData.item.id}
            onDelete={removeTODOHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
