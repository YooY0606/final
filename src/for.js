import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import './all.css'
import {  Container, Row, Col } from 'reactstrap';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
export default function Movie () {
    return (
    <Container>
      <View style={{ flex: 1 }}>
        <h2 align="center">電影介紹</h2>
        <div>
            <table align="center" class="table table-bordered" >
            <thead>
                <tr class="table-primary" align="center">
                    <th scope="col" >順序</th>
                    <th scope="col">上映日期</th>
                    <th scope="col">片名</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1993年7月24日</td>
                    <td><a href="#p1">蠟筆小新：動感超人VS高衩魔王</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>1994年4月23日</td>
                    <td><a href="#p2">蠟筆小新：不理不理王國的秘寶</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>1995年4月15日</td>
                    <td><a href="#p3">蠟筆小新：雲黑齋的野心</a></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>1996年4月13日</td>
                    <td><a href="#p4">蠟筆小新：搞怪遊樂園大冒險</a></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>1997年4月19日</td>
                    <td><a href="#p5">蠟筆小新：黑暗珠珠大追擊</a></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>1998年4月18日</td>
                    <td><a href="#p6">蠟筆小新：電擊！豬蹄大作戰（蠟筆小新：肥嘟嘟左衛門）</a></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>1999年4月17日</td>
                    <td><a href="#p7">蠟筆小新：爆發！溫泉激烈大決戰</a></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>2000年4月22日</td>
                    <td><a href="#p8">蠟筆小新：風起雲湧的叢林冒險</a></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>2001年4月21日</td>
                    <td><a href="#p9">蠟筆小新：風起雲湧 猛烈！大人帝國的反擊（蠟筆小新：大人帝國的反擊）</a></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>2002年4月20日</td>
                    <td><a href="#p10">蠟筆小新：風起雲湧 壯烈！戰國大會戰（蠟筆小新：前進武士城）</a></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>2003年4月19日</td>
                    <td><a href="#p11">蠟筆小新：風起雲湧 光榮燒肉之路（蠟筆小新：光榮燒肉之路）</a></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>2004年4月17日</td>
                    <td><a href="#p12">蠟筆小新：時空大冒險</a></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>2005年4月16日</td>
                    <td><a href="#p13">蠟筆小新：3分鐘百變大進擊</a></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>2006年4月15日</td>
                    <td><a href="#p14">蠟筆小新：Amigo！森巴入侵計畫</a></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>2007年4月21日</td>
                    <td><a href="#p15">蠟筆小新：小白的屁屁炸彈（蠟筆小新：恐怖的小白炸彈）</a></td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>2008年4月19日</td>
                    <td><a href="#p16">蠟筆小新：風起雲湧的金矛勇者（蠟筆小新：金矛勇者）</a></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>2009年4月18日</td>
                    <td><a href="#p17">蠟筆小新：春日部野生王國</a></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>2010年4月17日</td>
                    <td><a href="#p18">蠟筆小新：我的超時空新娘</a></td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>2011年4月16日</td>
                    <td><a href="#p19">蠟筆小新：黃金間諜大作戰</a></td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>2012年4月14日</td>
                    <td><a href="#p20">蠟筆小新：我和我的宇宙公主</a></td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>2013年4月20日</td>
                    <td><a href="#p21">蠟筆小新：超級美味！B級美食大逃亡！！（蠟筆小新：B級美食大逃亡）</a></td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>2014年4月19日</td>
                    <td><a href="#p22">蠟筆小新：大對決！機器人爸爸的反擊</a></td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>2015年4月18日</td>
                    <td><a href="#p23">蠟筆小新：我的搬家物語 仙人掌大襲擊</a></td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>2016年4月16日</td>
                    <td><a href="#p24">蠟筆小新：爆睡！夢世界大作戰</a></td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>2017年4月15日</td>
                    <td><a href="#p25">蠟筆小新：宇宙人Pi力來襲！！</a></td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>2018年4月13日</td>
                    <td><a href="#p26">蠟筆小新：功夫小子〜拉麵大亂鬥〜</a></td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>2019年4月19日</td>
                    <td><a href="#p27">蠟筆小新：新婚旅行風暴〜奪回廣志大作戰〜</a></td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>2020年9月11日</td>
                    <td><a href="#p28">蠟筆小新：激戰！塗鴉王國與差不多四勇者</a></td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>2021年4月23日 延後上映</td>
                    <td><a href="#p29">蠟筆小新：謎團！花之天下春日部學院</a></td>
                </tr>
            </tbody>
        </table>
        </div>
        <View style={styles.textWrapper}>
        <div>
            <h3 id="p1">蠟筆小新：動感超人VS高衩魔王</h3>
            <View style={ styles.container}>
            <Row>
            <Col xs="12" md="4">
                <img alt="" src='assets/movie1.jpg' width="237" height="320"></img>
            </Col>
            </Row>
            </View>
            <p>動感超人的動感石頭被高衩魔王搶走了,少了那個動感超人和咪咪就不能回到原來的世界,於是他們決定指派小新一家人成為動感戰士,不知情的小新一家就這麼帶著動感超人卡片前往另一個世界.這時在魔王和他的黨羽肆虐下,另一個世界的人紛紛變成開高衩泳裝人,小新聽了咪咪的雙胞胎姊姊莉莉和博士的說明後,決定協助動感超人克服危機,遂和小白騎著博士特製的三輪車去找魔王,雙方展開一場大戰,他和動感超人能打敗魔王挽救地球的和平嗎…</p>
            <p>《蠟筆小新：動感超人VS高衩魔王》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV12W411z7Jg">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p2">蠟筆小新：不理不理王國的秘寶</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie2.jpg' width="237" height="320"></img>
            </View>
            <p>小新和媽媽上街買菜意外抽中了頭獎,獲得免費招待全家前往遙遠的不理不理王國,沒想到一家人高興地上了飛機後,卻出現神秘組織白蛇幫派出的人妖意圖綁架小新,小新和爸媽急忙跳傘降落在叢林中,在猴子幫助才逃過一劫,並在火車上認識了皇室親衛官美女露露,這才得知長相酷似小新的王子也遭白蛇幫綁架,這時白蛇幫的人追來搶走了小新,原來白蛇幫的老大阿那康達和手下哈布,為了奪取不理不理王國傳說中的寶藏,必須靠王子和小新才能打開宮殿之門,而那個寶藏竟是瓶中擁有無窮法力的大魔神,小新能阻止他們的陰謀嗎…</p>
            <p>《蠟筆小新：不理不理王國的秘寶》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV11W411z7Xc">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p3">蠟筆小新：雲黑齋的野心</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie3.jpg' width="237" height="320"></img>
            </View>    
            <p>未來人歇魯跑到日本的戰國時代改變了歷史，時空巡邏隊鈴可發現了異狀，正預備前往，沒想到在時光隧道中遭受到攻擊，不小心掉進二十世紀的小新家。鈴可藉由小白向野原一家求救，於是野原一家踏上時光之旅回到戰國時代。遇見了吹雪丸的他們，與他一同前往雲黑城，打倒化身為雲黑齋改變歷史的壞蛋歇魯，沒想到的是歇魯居然躲過攻擊，還逃到了二十世紀。原以為可以回到家鄉的野原一家，回到二十世紀後，發現時代已經被改變了，又是歇魯搞的鬼，於是呼喚鈴可，一起打倒歇魯，二十世紀終於又回覆原狀了。</p>
            <p>《蠟筆小新：雲黑齋的野心》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV11W411z7oT">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p4">蠟筆小新：搞怪遊樂園大冒險</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie4.jpg' width="237" height="320"></img>
            </View>
            <p>向日葵幼稚園帶著所有的幼稚園小朋友到新開幕的高快樂園玩、只是小新居然在後來沒跟著大家走失、獨自走進了尚未對外開張的馬戲團、還在這裡遇到了童話故事中的木偶多佩瑪、邪惡的同性戀雙魔、還有他的手下。壞人們為了爭取超級無敵厲害的撲克牌展開了一場現實與魔幻世界的追逐、最後連小新的爸爸媽媽都被同性戀雙魔的手下抓走了，為了救回爸爸媽媽，小新只有勇敢的再回到高快樂園…</p>
            <p>《蠟筆小新：搞怪遊樂園大冒險》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV12W411z7PY">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p5">蠟筆小新：黑暗珠珠大追擊</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie5.jpg' width="237" height="320"></img>
            </View>
            <p>小新在河邊無意間撿到一顆彈珠，看它很閃亮於是就撿回家裡。沒想到卻被小葵吞進肚子裡。這下糟了，原來這顆彈珠是珠由良族與珠黃泉族在爭奪的魔人賈克的珠珠，珠黃泉族的首領玉王想要利用賈克的魔力征服世界。就這樣，小新一家人捲入兩族人的爭奪戰中，小葵被玉王綁架走了，大家為了保護小葵，費盡心力…最後平安的救出小葵，小新卻在無意間，將兩顆珠珠放進封印賈克的人俑裡，魔人賈克被釋放出來了，可是沒想到他卻變成了人妖…</p>
            <p>《蠟筆小新：黑暗珠珠大追擊》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV11W411z7hd">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p6">蠟筆小新：電擊！豬蹄大作戰</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie6.jpg' width="237" height="320"></img>
            </View>
            <p>秘密的SML組織為了維護世界和平，阻止邪惡的黑道組織-豬蹄組征服世界的詭計，派美色潛入邪惡組織，偷取執行計畫的核心元件。在逃亡過程中，美色無意間上了小新一行人搭乘的遊船，使得小新也被捲入正邪的對抗戰中，還被帶往邪惡組織。原來邪惡組織要進行的計畫是，讓大袋博士開發出來的新型電子生命體肥嘟嘟左衛門入侵全世界的電腦，進而征服世界。沒想到這個新型的電子生命體的原創者居然是小新，因為小新的緣故，肥嘟嘟左衛門棄惡從善，最後還救了小新一行人。</p>
            <p>《蠟筆小新：電擊！豬蹄大作戰》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV11W411z7BF">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p7">蠟筆小新：爆發！溫泉激烈大決戰</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie7.jpg' width="237" height="320"></img>
            </View>
            <p>污垢達人正計畫將整個地球變成一個大溫泉，政府的秘密組織溫泉G組為了阻止他們的野心，到處尋找黃金之魂溫泉，希望借溫泉的神力打倒壞蛋。沒想到黃金之魂溫泉居然就在小新家的地底下，就這樣他們一家人捲入了守護溫泉的正邪之戰，最後因為小新一家人同心協力，終於打倒了污垢達人，拯救世界和平。</p>
            <p>《蠟筆小新：爆發！溫泉激烈大決戰》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV11W411z7eQ">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p8">蠟筆小新：風起雲湧的叢林冒險</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie8.jpg' width="237" height="320"></img>
            </View>
            <p>小新跟媽媽還有風間，妮妮，正男，阿呆一起報名動感超人週年紀念南海之旅，就在動感超人電影首映會上，突然出現了一群粗暴的猴子將所有的大人都擄走了。春日部防衛隊為了救出大人們而出動，小新一行人冒險渡海到南海上的一座小島，發現所有的大人都被猴子壓迫著做苦工，島上的大王樂園王正在單挑動感超人，小新發揮了機智，救出了大人們，一起到競技場上幫動感超人加油…</p>
            <p>《蠟筆小新：風起雲湧的叢林冒險》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV1mW411z7Yj">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p9">蠟筆小新：風起雲湧 猛烈！大人帝國的反擊</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie9.jpg' width="237" height="320"></img>
            </View>
            <p>某一日裡，春日部突然有人舉辦了「20世紀博覽會」，大人們都沉浸在舊時的電視節目和電影、日常生活裡，不過小新等小孩子們感到趣味索然。當大人們從博覽會回來後，每個人都開始變得懶散，不僅不再做家事、也不再到公司裡去上班，每天只知沉迷在舊時的電視節目、或是玩耍裡，並且開始對小新等小孩子們視若無睹。有一天突然出現一輛電動三輪車，把所有大人載走，只留下春日部裡的所有小孩。</p>
            <p>《蠟筆小新：風起雲湧 猛烈！大人帝國的反擊》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV1mW411z7wa">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p10">蠟筆小新：風起雲湧 壯烈！戰國大會戰</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie10.jpg' width="237" height="320"></img>
            </View>    
            <p>某一晚，野原一家同時夢見了古裝劇裡才會出現的”古代美女”，雖然全家人都覺得很不可思議，卻也沒有深入追究。當天下午小新從幼稚園回來時，看到小白正在庭院裡拼命挖洞，而當小新也跟著開始挖掘後，竟然挖出了一個箱子，裡面放有小新親筆寫的書函，除了寫有天正2年的字眼外，還畫有肥嘟嘟左衞門的圖案。</p>
            <p>《蠟筆小新：風起雲湧 壯烈！戰國大會戰》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV1mW411z7Tc">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p11">蠟筆小新：風起雲湧 光榮燒肉之路</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie11.jpg' width="237" height="320"></img>
            </View>
            <p>媽媽省下早餐的菜錢,決定晚上給大家吃豪華燒肉,正當全家興奮之際,突然闖入一名遭人追殺的怪人,而且宣稱已將仇家追討的東西交給小新一家人,從此小新一家人不僅遭到神秘組織追殺,更被全國警方指名通緝,他們在無路可走的情況下,決定前往那個神秘組織所在的熱海一探究竟,不料一家人卻在半路上失散,只好各顯神通,憑著要吃燒肉的堅定信念,分頭抵達熱海,經過一番大戰好不容易見到該組織的老大,發現了老大的陰謀,他們能夠打敗老大及時趕回家去吃燒肉嗎…</p>
            <p>《蠟筆小新：風起雲湧 光榮燒肉之路》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV1mW411z73c">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p12">蠟筆小新：時空大冒險</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie12.jpg' width="237" height="320"></img>
            </View>
            <p>小新一行人所組成的春日部防衛隊在玩抓鬼遊戲時，無意中闖進一家已經廢棄的電影院，無人的電影院裡竟然在播放著電影。小新中途去上廁所回來之後，發現風間等人已經不見蹤影，無奈之下只好回家。只是直到晚上，風間等人尚未回家，野原一家因為擔心，決定到電影院去一瞧究竟，沒想到全家人都被電影給吸進去，來到一個酷似美國西部拓荒時代的城鎮，並在這裡遇到風間以及其他來自春日部的人們</p>
            <p>《蠟筆小新：時空大冒險》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV1mW411z7EE">生肉預告</a>
            </View>
        </div>
        <div class="box13">
            <h3 id="p13">蠟筆小新：3分鐘百變大進擊</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie13.jpg' width="237" height="320"></img>
            </View>
            <p>我變我變我變變變~~小新一家人居然都變成了超人戰士了？小新等人所在的世界即將被怪獸毀滅，且出現的怪獸卻一個比一個強，小新決定要勇敢站起來迎戰超強的怪獸，但就在小新即將被怪獸打敗時，小新所崇拜的英雄動感超人及鋼彈勇士出現了…甚至連肥嘟嘟左衛門也現身了!?</p>
            <p>《蠟筆小新：3分鐘百變大進擊》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV12W411z7DM">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p14">蠟筆小新：Amigo！森巴入侵計畫</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie14.jpg' width="237" height="320"></img>
            </View>
            <p>阿呆告訴大家最近流傳著一個傳言，聽說春日部裡出現了“複製人”。小新媽媽也聽到了這個傳言，但大家都認為這只是謠傳，沒想到野原一家人竟然在新開幕的超市裡，遇到了媽媽美牙的複製人，而後，廣志和小新的複製人也紛紛現身。究竟這背後有什麼陰謀？又是誰為了什麼在製造複製人……？</p>
            <p>《蠟筆小新：Amigo！森巴入侵計畫》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV12W411z7yU">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p15">蠟筆小新：小白的屁屁炸彈</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie15.jpg' width="237" height="320"></img>
            </View>
            <p>銀河系屁屁星人的飛碟即將撞擊隕石群，屁屁星人趕緊發射飛彈擊碎隕石群，卻誤將其中一枚飛彈射向地球……。野原一家人正在海邊遊玩，小白的屁屁上黏上不明物體，正是屁屁星人不小心射向地球的炸彈，而且還是足以將整個地球炸翻掉的炸彈！為了地球的安全，小白即將要被射向外太空引爆啦？！</p>
            <p>《蠟筆小新：小白的屁屁炸彈》 片段：</p>
            <View style={ styles.container}>
                <a href="https://tw.iqiyi.com/v_19rx3kuvok.html">日語中字片段</a>
            </View>
        </div>
        <div>
            <h3 id="p16">蠟筆小新：風起雲湧的金矛勇者</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie16.jpg' width="237" height="320"></img>
            </View>
            <p>被上天選定的勇者 即將醒過來！自古以來有個傳說，在“超級黑暗世界”裡有金矛和銀盾的存在，當黑暗大王達克製造危機的時候，傳說中的金矛和銀盾就會出動尋找能拯救他們的勇者。小新莫名其妙被寶物們選為勇者，讓他不得不勇敢站出來拯救地球！但是大家都被封印住了，只靠小新的力量，真的沒問題嗎？</p>
            <p>《蠟筆小新：風起雲湧的金矛勇者》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV12W411z7RQ">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p17">蠟筆小新：春日部野生王國</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie17.jpg' width="237" height="320"></img>
            </View>
            <p>迫在眉捷的陰謀，小新將勇敢面對挑戰！！四膳守是激進派的環保分子，他計畫將所有人類都變成動物，好拯救地球的自然危機。某天，小新的爸爸媽媽喝了來路不明的飲料後，一覺醒來居然都變成動物了。小新為救回爸爸和媽媽，決定挺身對抗到底。只是同時出現了一名神秘的女子，而她究竟是敵是友呢？</p>
            <p>《蠟筆小新：春日部野生王國》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV12W411z7Qt">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p18">蠟筆小新：我的超時空新娘</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie18.jpg' width="237" height="320"></img>
            </View>
            <p>什麼？？小新的未來新娘出現了！！自稱是小新未來新娘的女子，受到長大後的小新所託，要帶小新到未來去。原來地球被隕石群撞上後，天空一片黑暗，金有電機的老闆藉機大賺黑心錢。長大後的小新想讓世界恢復光明，但只靠他的力量並不夠，於是他請未婚妻把五歲的小新帶來，一場緊張刺激的冒險於是展開。</p>
            <p>《蠟筆小新：我的超時空新娘》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV12W411z7ZG">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p19">蠟筆小新：黃金間諜大作戰</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie19.jpg' width="237" height="320"></img>
            </View>
            <p>來歷不明的間諜少女檸檬找上小新，並帶來動感超人的訊息，希望小新和檸檬搭擋，攜手拿回動感超人遺失的動感能量膠囊。小新義不容辭答應，並開始接受間諜訓練。小新果然不負眾望，成功潛入研究室，此時卻聽到不同版本的故事，小新不相信動感超人會騙他，依舊將膠囊帶走，沒想到此舉即將引來一場大災難…。</p>
            <p>《蠟筆小新：黃金間諜大作戰》 預告：</p>
            <View style={ styles.container}>    
                <a href="https://tw.iqiyi.com/v_19runis2fk.html">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p20">蠟筆小新：我和我的宇宙公主</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie20.jpg' width="237" height="320"></img>
            </View>
            <p>某日，小新跟小葵因為搶吃布丁而大吵一架時，兩名謎樣男子出現，聲稱是來迎接「小葵公主」。小新輕率地在男子遞給他的「文件」上簽名，一瞬間，野原一家突然帶到了名為「向日葵星」的陌生星球，還被該星球的大王告知，若是小葵不成為向日葵星的公主，地球跟向日葵星都會將滅亡…！！而小葵一旦成為公主，便得永遠與家人分開…小新面臨了最大的難題──選擇妹妹，或者是地球的未來？究竟，新之助的抉擇為何？</p>
            <p>《蠟筆小新：我和我的宇宙公主》 預告：</p>
            <View style={ styles.container}>   
                <a href="https://www.bilibili.com/video/BV1UW411z7Ze">生肉預告</a>
            </View>
        </div>
        <div>
            <h3 id="p21">蠟筆小新：超級美味！B級美食大逃亡！！</h3>
            <View style={ styles.container}>   
                <img alt="" src='assets/movie21.jpg' width="237" height="320"></img>
            </View>
            <p>因為傳說中的美味醬汁，美食界即將掀起一場爭霸戰！小新和朋友們誤打誤撞闖進B級美食嘉年華，無法抵抗漂亮大姊姊請求的小新背起祖傳醬汁，也背負著整個平民美食的未來！想獨霸美食界的A級軍團，藉著搶奪醬汁來徹底摧毀平民美食…春日部防衛隊的友誼也因為醬汁燃起考驗，他們是否能逃離魔掌？運送任務是否能順利完成？寄託於他們身上的小小幸福是否得以延續？且看，今年歡笑又感動的小新大冒險～</p>
            <p>《蠟筆小新：超級美味！B級美食大逃亡！！》 預告：</p>
            <View style={ styles.container}>
                <a href="https://www.bilibili.com/video/BV1UW411z7Rx">生肉預告</a>
                <a href="https://movies.yahoo.com.tw/piwigo/index.php/video/%E8%A0%9F%E7%AD%86%E5%B0%8F%E6%96%B0%E5%8A%87%E5%A0%B4%E7%89%88-%E8%B6%85%E7%B4%9A%E7%BE%8E%E5%91%B3-b%E7%B4%9A%E7%BE%8E%E9%A3%9F%E5%A4%A7%E9%80%83%E4%BA%A1-%E4%B8%AD%E6%96%87%E9%A0%90%E5%91%8A-090812835.html?movie_id=4791">中文預告</a>
            </View>
        </div>
        <div>
            <h3 id="p22">蠟筆小新：大對決！機器人爸爸的反擊</h3>
            <View style={ styles.container}> 
                <img alt="" src='assets/movie22.jpg' width="237" height="320"></img>
            </View>
            <p>爸爸廣志突然變成機器人，讓媽媽美冴非常疑惑，倒是小新覺得好處不少！因為小新可以用遙控器操縱機器人爸爸，不僅能做出美味料理，還將家裡打掃的閃閃發亮！可是，所有的一切原來是「爸爸奮起同盟(勇敢站出來搖旗吶喊的爸爸們)」的陰謀，要幫在家裡地位越來越卑微的爸爸們，恢復尊嚴！被無情對待的爸爸們因此引爆「爸爸革命」，讓野原家和春日部幾乎瓦解！危急存亡之時，機器人爸爸與小新挺身而出！野原一家和機器人廣志的未來，將面臨什麼樣的挑戰？此時此刻，全國所有家庭的愛與未來，遭遇前所未有的考驗！</p>
            <p>《蠟筆小新：大對決！機器人爸爸的反擊》 預告：</p>
            <View style={ styles.container}>    
                <a href="https://tw.news.yahoo.com/video/%E8%A0%9F%E7%AD%86%E5%B0%8F%E6%96%B0%E9%9B%BB%E5%BD%B1-%E5%A4%A7%E5%B0%8D%E6%B1%BA-%E6%A9%9F%E5%99%A8%E4%BA%BA%E7%88%B8%E7%88%B8%E7%9A%84%E5%8F%8D%E6%93%8A-90%E7%A7%92%E9%A0%90%E5%91%8A-094811571.html?pt=tAD1SCT8P72042-08-09.html">中文預告</a>
            </View>
        </div>
        <div>
            <h3 id="p23">蠟筆小新：我的搬家物語 仙人掌大襲擊</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie23.jpg' width="237" height="320"></img>
            </View>
            <p>「我絕對不會忘了大家的，直到我忘記為止喔！！」為蒐集生長在墨西哥的仙人掌果實，爸爸廣志被公司命令調派到墨西哥，全家因此決定搬去墨西哥，連美冴和小新也都同意了，小新因此要淚別春日部的大家。全家人來到一座名為「亥喀益尺拉本旦」的城市，鄰居們個個都很有特色，原以為即將展開快樂的生活……沒想到等著他們的是食人殺手仙人掌！小新和墨西哥的鄰居們，是否能克服這個窮途末路的大危機？！城市的和平全掌握在小新手上！超越國境，與鄰居們的感情和那股笨蛋力量，即將大爆發！！</p>
            <p>《蠟筆小新：我的搬家物語 仙人掌大襲擊》 預告：</p>
            <View style={ styles.container}>
                <a href="https://travel.yahoo.com.tw/video/%E8%A0%9F%E7%AD%86%E5%B0%8F%E6%96%B0%E9%9B%BB%E5%BD%B1-%E6%88%91%E7%9A%84%E6%90%AC%E5%AE%B6%E7%89%A9%E8%AA%9E-%E4%BB%99%E4%BA%BA%E6%8E%8C%E5%A4%A7%E8%A5%B2%E6%93%8A-%E6%AD%A3%E5%BC%8F%E9%A0%90%E5%91%8A-080218979.html">中文預告</a>
            </View>
        </div>
        <div>
            <h3 id="p24">蠟筆小新：爆睡！夢世界大作戰</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie24.jpg' width="237" height="320"></img>
            </View>
            <p>故事舞台為「能實現夢想的夢世界」。有天，雙葉幼稚園來了一位神秘轉校生「沙希」，之後原本寧靜的生活突然發生了變化...。小新及親朋好友們的夢境不知道為什麼被控制住了，而為了拯救人類的好夢，春日部防衛隊再次出動，在夢世界裡奮戰！</p>
            <p>《蠟筆小新：爆睡！夢世界大作戰》 預告：</p>
            <View style={ styles.container}>
                <div class="video-container1">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jlnVqPlwYeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </View> 
        </div>
        <div>
            <h3 id="p25">蠟筆小新：宇宙人Pi力來襲！！</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie25.jpg' width="237" height="320"></img>
            </View>
            <p>某日，野原家來了一位神秘的宇宙人。因照射到宇宙人的神秘光線，廣志和美冴變回年幼時期的模樣！為了變回大人，野原一家人將踏上冒險旅程，並找出在日本某處宇宙人的父親！</p>
            <p>《蠟筆小新：宇宙人Pi力來襲！！》 預告：</p>
            <View style={ styles.container}>
                <div class="video-container2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8qHuHekVysM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </View>
        </div>
        <div>
            <h3 id="p26">蠟筆小新：功夫小子〜拉麵大亂鬥〜</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie26.jpg' width="237" height="320"></img>
            </View>
            <p>故事發生在春日部的中華街上的《哎呀城》，「正男」邀請「小新」與「春日部防衛隊」，學習傳說中的功夫－軟Q軟Q拳。並和功夫少女「小蘭」一起努力練功。這時候，神秘麵食”黑熊貓拉麵”大流行。那是只要吃過一次就會上癮，且讓人變得兇暴的恐怖拉麵！面對這突如襲來的拉麵危機！為了拯救哎呀城，春日部防衛隊挺身而出，他們能夠恢復街上的和平嗎？</p>
            <p>《蠟筆小新：功夫小子〜拉麵大亂鬥〜》 預告：</p>
            <View style={ styles.container}>
                <div class="video-container3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Lki9c94F9wo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </View>
        </div>
        <div>
            <h3 id="p27">蠟筆小新：新婚旅行風暴〜奪回廣志大作戰〜</h3>
            <View style={ styles.container}>    
                <img alt="" src='assets/movie27.jpg' width="237" height="320"></img>
            </View>
            <p>小新戴著牛仔帽、身穿野地服裝化身為冒險之王，穿梭在廣大的澳洲之中，與家人面臨未知的危機，這危機的開始是讓野原一家開心地飛起來的超級便宜新婚之旅，但是沒想到才剛踏上目的地，爸爸廣志就被神秘的假面族強行擄走，同時世界各地的寶藏獵人也加入了廣志爭奪大戰，更難以理解的是“爸爸竟然是開啟寶藏的鑰匙！？”小新會用怎樣的方式衝鋒陷陣呢?野原一家會遇到什麼樣愛的試煉呢?</p>
            <p>《蠟筆小新：新婚旅行風暴〜奪回廣志大作戰〜》 預告：</p>
            <View style={ styles.container}>
                <div class="video-container4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jMyCtY3oA7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </View>
        </div>
        <div>
            <h3 id="p28">蠟筆小新：激戰！塗鴉王國與差不多四勇者</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie28.jpg' width="237" height="320"></img>
            </View>
            <p>「塗鴉王國」是以自由的塗鴉為能量來源，漂浮於空中的一個王國。但是，隨著時代變遷，近年在地面上看到塗鴉的機會減少，導致王國能源不足而快毀滅了…… 「塗鴉王國」的皇家軍隊賭上國家命運，開始進攻地面！！沒想到他們來到的地方，竟然是小新等人居住的春日部！！獲得能讓畫出來東西動起來的王國珍寶「奇蹟蠟筆」的勇者就是……「超樂天的五歲小朋友」野原新之助！！究竟小新能不能和他大筆畫出的塗鴉們一起拯救世界呢！？</p>
            <p>《蠟筆小新：激戰！塗鴉王國與差不多四勇者》 預告：</p>
            <View style={ styles.container}>
                <div class="video-container5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WV2qzmRfxQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </View>
        </div>
        <div>
            <h3 id="p29">蠟筆小新：謎團！花之天下春日部學院</h3>
            <View style={ styles.container}>
                <img alt="" src='assets/movie29.jpg' width="237" height="320"></img>
            </View>
            <p>原本預定將於 2021 年 4 月推出的《蠟筆小新》系列第 29 部劇場版</p>
            <p>這次《蠟筆小新》劇場版，描述小新一行人，前往由 AI 管理的超菁英學校私立天下統一春日部學院，也就是通稱的天春日學院（天カス，與日文天婦羅渣同音）展開為期一週的體驗入學，沒想到體驗過程中居然發生了事件，而風間也因此變成了笨蛋？！因此春日部防衛隊與成績墊底的學生會長組成了「春日部偵探俱樂部」，為了解開學院之謎共同展開奮鬥。</p>
            <p>《蠟筆小新：謎團！花之天下春日部學院》 預告：</p>
            <View style={ styles.container}>
                <div class="video-container6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zhJf9G1oLW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </View>
        </div>
      </View>
    </View>
    </Container>
    );
  }

