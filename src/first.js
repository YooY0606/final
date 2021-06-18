import React from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
  import {  Container, Row, Col } from 'reactstrap';
  import { initGA, logPageView } from "./analytics"
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default class First extends React.Component  {
    componentDidMount () {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    
  }
    render(){
      return (
          <Container>
              <div className="first">
                  <View style={ {flex: 1 }}>
                    <View style={ styles.container}>
                        <Text style={[styles.center,{ fontSize: 30 }]}> 介紹 </Text>
                          <Text style={[styles.center,{ fontSize: 20 }]}> 《蠟筆小新》（日語：クレヨンしんちゃん）是已故日本漫畫家臼井儀人所著的漫畫。漫畫以埼玉縣春日部市一名5歲男童野原新之助的日常生活展開。故事舞台是在埼玉縣春日部市，一位正在「雙葉幼稚園」學習的五歲小孩野原新之助（小新），在日常生活中發生的事。
                          </Text>
                          <Row>
                          <Col xs="12" md="2">
                            <img  alt=" " src='./assets/1.png' width='550' />
                        </Col>
                      </Row>
                    </View>  
                  </View>
              </div>
          </Container>
      );
  }
}