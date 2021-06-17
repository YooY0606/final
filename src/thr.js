import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {  Container, Row, Col } from 'reactstrap';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
export default function Character () {
  
    return (
    <Container>
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
            <h2>動畫主要人物介紹</h2>
            <div >
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Shinchan.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>野原新之助</h4>
                <p>5歲，外表特徵是濃密的眉毛以及短短的和尚髮型，與祖父銀之介十分相似，就讀雙葉幼稚園向日葵班，與風間、正男、妮妮、阿呆組成春日部防衛隊。喜歡看動感超人、剛達姆機器人、魔法少女可愛P、漂亮的大姐姐，最喜歡的人是大原娜娜子，最討厭吃青椒。名字由來:父親廣志於小新出生前，特地和其他候選名字寫在一張白紙上，但小新出生當天忽然下大雨，當廣志抵達醫院見到剛出生的小新並掏出懷裡的字條時，字條的筆跡已被雨淋至模糊，僅剩下「新」、「之」、「助」三字可辨識，廣志和美冴就將小新正式命名為「新之助」。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Hiroshi.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
                <h4>野原廣志</h4>
                <p>小新的父親，35歲，秋田縣人，雙葉商社營業部股長，腳非常臭。興趣是打高爾夫球，喜歡喝酒、看穿泳裝的年輕女性或女性寫真集，不知為何很受同性戀的喜愛。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Misae.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>野原美冴</h4>
                <p>小新的母親，29歲，熊本縣人，舊姓小山，全職的家庭主婦，結婚前是個上班族。喜歡帥哥和買有優惠的東西。不愛運動，經常購買減肥食品及器材，而且做事只有三分鐘熱度，因此體重總是降不下來，常被小新稱為「三層肥肉老太婆」。小新個性自由奔放，絲毫不受大人管教，所以美冴常使用「美冴拳」或「拳頭轉轉」教訓小新。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Himawari.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>野原向日葵</h4>
                <p>小新的妹妹，0歲、暱稱小葵，還不會說話，但野原家的人聽得懂小葵說的話。性格與美冴相似，一樣喜歡帥哥，超喜歡閃閃發光的東西(甚至光屁屁怪獸)，與小新一樣頑皮。名字由來:對讀者的公開募集，但在動畫版中則是安排以野原家代代相傳的方式取名，最後以小新所取的名字命名。很聰明且具有破壞慾，因為是嬰兒，家人通常不相信小葵是始作俑者，所以小新經常被小葵陷害。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Shiro.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>小白</h4>
                <p>野原家飼養的小狗，雄性，毛色為白色。原被棄養，一開始是小新的朋友發現小白，但沒有人願意收養小白，最後由小新收養。美冴一開始反對收養小白，後來在廣志的說服下，才開始飼養小白。特技是「棉花糖」，很聰明，還可以幫忙跑腿買東西。由於小新經常不帶小白散步，故小白有時候會自己去散步。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Musae.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
                <h4>小山夢冴</h4>
                <p>美冴的妹妹、小新與小葵的小阿姨，26歲，未婚。為人散漫怠惰，私底下相當不修邊幅、邋遢，個性非常率直和樂天，會嘗試用歪理辯解。小學時期因幫父親義治拍照而立志成為攝影師，曾被攝影師傅批評沒有天分而辭去攝影助理的工作，寄居野原家一段時間，後來遇見另一位攝影師連圖，拜其為師後搬出野原家，住在雞飛狗跳莊。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Ginnosuke.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>野原銀之介</h4>
                <p>廣志的父親、小新與小葵的爺爺，65歲，居住在秋田縣。經常突然拜訪野原家，令美冴和廣志感到困擾。和小新、廣志一樣喜歡看穿泳裝的漂亮姐姐，疼愛小新和小葵，常與小山義治比較誰較受孫子喜愛，與小山義治是死對頭。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/crane.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>野原鶴</h4>
                <p>廣志的母親、小新與小葵的祖母，62歲。具典型農婦精明能幹的性格，雖然表面上比丈夫內斂守規矩，但其實與銀之介一樣頑皮。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Yoshiharu.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>小山義治</h4>
                <p>美冴與另外兩名姊妹的父親、小新與小葵的外公，63歲，居住在九州熊本縣，是位十分嚴肅的典型日本男性，曾擔任國中教務主任。極度疼愛小新和小葵，常與野原銀之介比較誰較受孫子喜愛，與野原銀之介是死對頭。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Koyama.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>小山高冴</h4>
                <p>美冴與另外兩名姊妹的母親、小新與小葵的外婆，58歲。和女兒們長相相似，廚藝不錯。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Kazama.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
                <h4>風間徹</h4>
                <p>5歲，父母稱他為「小徹」，同學稱他「風間」。自稱春日部防衛隊隊長，有上英語補習班。父親長期在國外工作，立志進他爸爸讀過的名門私立小學，喜歡看魔法少女可愛P。被小新説是個媽寶。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Nene.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
                <h4>櫻田妮妮</h4>
                <p>5歲，常要求春日部防衛隊隊員一起玩「超真實扮家家酒」，與小愛是死對頭，喜歡帥哥或英俊的男孩，生氣時經常拿幸福兔來出氣。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Masao.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
                <h4>佐藤正男</h4>
                <p>5歲，個性膽小，有雙重人格。頭型像飯糰一樣，住家位置經常被小新記錯。喜歡小愛和動感超人。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Bochan.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>阿呆</h4>
                <p>5歲，總是流鼻涕，鼻涕用來保持平衡。喜歡收集各種石頭和觀察身邊周圍的東西，深藏不露，有豐富的知識。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/love.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
                <h4>酢乙女愛</h4>
                <p>5歲，被稱為「小愛」，是酢乙女財團的千金大小姐，喜歡小新，平常由保鑣黑磯負責接送和保護。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Takakura.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>高倉文太</h4>
                <p>雙葉幼稚園園長，48歲，樣貌兇狠的好人，其住家位於幼稚園內。經常被小新稱為「老大」、「園長老大」。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/green.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
                <h4>石坂綠</h4>
                <p>向日葵班導師，24歲，已婚，舊姓吉永，劇中的大家亦仍稱她為吉永老師。常與松坂老師吵架，但其實很關心對方。春日部防衛隊經常強行在她家舉行會議並稱之為「基地」。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Matsuzaka.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>松坂梅</h4>
                <p>玫瑰班導師，24歲，出身於鄉下地區，以前還有「種田公主」的稱號。但因為愛慕虛榮且好面子的性格作祟，經常對外誆稱自己出身六本木。常因為購買名牌商品造成經濟拮据。最討厭小新叫他「小梅」、「阿梅」。</p>
            </div>
            <div>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Ageo.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>    
                <h4>上尾增美</h4>
                <p>原為松坂梅受傷住院期間的代課老師，後成為櫻花班導師，23歲，最喜歡吃甜甜圈。深度近視，平常習慣戴著眼鏡，性格略顯陰暗，膽小懦弱且不敢大聲說話；一旦摘下眼鏡，便會因為無法看清週遭人事物，個性變得爽朗直率且容易衝動，更能坦白大聲說話。和黑磯先生的關係甚為曖昧，亦是唯一一個看過黑磯先生把墨鏡拿下後樣子的人。</p>
            </div>
            <div>
            <View style={ styles.container}>   
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/Kitamoto.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View> 
                <h4>北本太太</h4>
                <p>本名不詳，野原一家通常稱她大嬸，熱衷八卦，經常探聽鄰居的消息，能說一口流利的英語。</p>
            </div>
        </View>
        </View>
      </Container>  
    );
  }


