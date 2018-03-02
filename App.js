/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// moduleの読み込み
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
// TodoInputモジュールを読み込む
import TodoInput from './src/component/TodoInput';
import TodoItem from './src/component/TodoItem';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
    onPress = (text) => {
    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
    });

    this.setState({
      list,
    });
  }

  render() {
    const {
      list,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput onPress={this.onPress} />
          <View style={styles.todoListContainer}>
            <FlatList
              style={styles.todoList}
              data={list}
              renderItem={({ item }) => <TodoItem {...item} />}
            />
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  todoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});
