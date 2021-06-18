import React from 'react'
import './App.css';
import First from "./first"
import Sec from "./sec"
import Thr from "./thr"
import For from "./for"
import Fif from "./fif"
import Six from "./six"
import { HashRouter ,Route,Switch} from "react-router-dom";
import Layout from "./layout";
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 

export default class App extends React.Component  {
  render(){
  return (
    <View style={ {flex: 1 }}>
          <View style={[styles.center, { backgroundColor: 'cadetblue' }]}>
            <Text style={{ color: '#fff', fontSize: 50 }}> 蠟筆小新 </Text>
          </View>
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={First}/>
          <Route path="/sec" component={Sec}/>
          <Route path="/thr" component={Thr}/>
          <Route path="/for" component={For}/>
          <Route path="/fif" component={Fif}/>
          <Route path="/six" component={Six}/>
        </Layout>
      </Switch>
    </HashRouter>
    </View>
  );
}
}

