import React from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
  import {  Container, Row, Col } from 'reactstrap';

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
  export default function Sec () {
      return (
        <Container>
        <div className="sec">
          <View style={ {flex: 1 }}>
            <View style={ styles.container}> 
              <Text style={[styles.center,{ fontSize: 30 }]}> 作者 </Text>
              <Row>
                <Col xs="12" md="4">
                <img  alt="" src='./assets/2.jpg'  width="400" height="350"/>
              </Col>
              </Row> 
              <Text style={[styles.center,{ fontSize: 20 }]}> 
                  臼井儀人（日語：うすい よしと，1958年4月21日－2009年9月11日），本名臼井義人（うすい よしひと），是日本的男性漫畫家、作詞家，代表作為《蠟筆小新》。出生於靜岡縣靜岡市，成長並住於埼玉縣春日部市。2009年9月11日，臼井於登山時失足跌落山谷不幸罹難，享年51歲。
                </Text>
              <Text style={[styles.center,{ fontSize: 30 ,color:"#191970"}]}> 
                  生平:
                </Text>
                <Text style={[styles.center,{ fontSize: 20 }]}>
                臼井儀人就讀於埼玉縣立春日部工業高等學校，1977年畢業。1987年以《不良百貨公司物語》（雙葉社《漫畫ACTION》上連載）得到「新人賞」佳作。1990年，32歲的臼井憑藉在雜誌上連載長篇漫畫《蠟筆小新》而開始受人注目，故事內容講述五歲日本男童野原新之助的生活瑣事，反映都市人心理特質，亦不乏露骨的情節，該作品亦翻譯成多種語言在世界各地發行。1992年4月開始播放電視動畫版，成為至今少數的長壽動畫，目前在日本收視率最高仍達12%。1995年至1996年期間，臼井另外在竹書房集中連載以家庭主婦的日常瑣事為主的四格漫畫《秀逗媽媽月美》。臼井儀人的作品風格多為誇張化日本社會現象的短篇劇情，如黑道、墮胎潮、拜金女等等，有時會包含少部份成人情節。
                </Text>
                <Text style={[styles.center,styles.textWrapper,{ fontSize: 20 }]}>
                臼井儀人逝世後，連載中的《蠟筆小新》則由他的助手群及編輯以「UY工作室」名號接續創作。為了表示區別，雙葉社將出版標題改為《新蠟筆小新》，但是臼井仍掛名第一作者。
                </Text>
                <View style={ styles.container}> 
                <Row>
                <Col xs="12" md="4">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/XgH_bl0cTEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                </Row>
                </View>
            </View>  
          </View>
        </div> 
      </Container>
      );
  }
  