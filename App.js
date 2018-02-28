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
  View
} from 'react-native';

// iOSとAndroidの環境設定
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 文字を入れるために<Text>を使っている
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Nativeへようこそ!
        </Text>
        <Text style={styles.instructions}>
          React Nativeで広がるアプリの世界！
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

// StyleSheetの定義

/*
CSS in JSの定義

background-colorのようにハイフンがあるものはbackgroundColorのようにキャメルケースで定義
数字以外のプロパティは文字列で定義。cssだとredと使えますがCSS in JSでは'red'のように文字列で定義します。
セレクタは存在しない。
style属性にスタイルを当てる
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
});
