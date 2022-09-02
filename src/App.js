import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  // const [isOpen, setOpen] = React.useState(false);
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QR" component={LoginQRScreen} />
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            headerShown: false,
          }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            headerShown: false,
          }}>
          <Stack.Screen name="Find" component={FindScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 홈 화면
function HomeScreen({navigation}) {
  const [ID, PutID] = React.useState(null);
  const [PWD, PutPWD] = React.useState(null);
  return (
    <View style={Styles.home}>
      <Image
        source={require('/Users/junyoungkr/Desktop/Test/assets/icons/123.png')}
        style={Styles.SejongHomeLogo}
      />
      <View>
        <View style={Styles.IdContainer}>
          <Text style={Styles.Id}>아이디 입력</Text>
          <TextInput
            style={Styles.input1}
            PutID={PutID}
            value={ID}
            placeholder="ID"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
        <View style={Styles.PwdContainer}>
          <Text style={Styles.Pwd}>비밀번호 입력</Text>
          <TextInput
            style={Styles.input2}
            PutPWD={PutPWD}
            value={PWD}
            placeholder="Password"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
      </View>
      <TouchableOpacity
        style={Styles.LoginBox}
        onPress={() => navigation.navigate('QR')}>
        <Text style={Styles.LoginText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.RegisterBox}
        onPress={() => navigation.navigate('Register')}>
        <Text style={Styles.RegisterText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.FindBox}
        onPress={() => navigation.navigate('Find')}>
        <Text style={Styles.FindText}>아이디 / 비밀번호 찾기</Text>
      </TouchableOpacity>
    </View>
  );
}

/////////////////////////////////////////////////////
// 로그인 화면
function LoginQRScreen() {
  return (
    <View>
      <Text>as</Text>
    </View>
  );
}
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// 회원가입 화면
function RegisterScreen() {
  const [StudentID, PutStudentID] = React.useState(null);
  const [Nickname, PutNickname] = React.useState(null);
  const [Overlap, PutOverlap] = React.useState(null);
  return (
    <SafeAreaView style={Styles.Registerscreen}>
      <View>
        <Image
          style={Styles.SejongLogo}
          source={require('/Users/junyoungkr/Desktop/Test/assets/icons/123.png')}
        />
        <Text style={Styles.RegisterHeaderLetter}>
          세종대학교 행복기숙사{'\n'}Sejong University Dormitory
        </Text>
      </View>
      <View>
        <View style={Styles.StudendIdContainer}>
          <Text style={Styles.StudentId}>학번 입력</Text>
          <TextInput
            style={Styles.input3}
            PutStudentID={PutStudentID}
            value={StudentID}
            placeholder="학번입력"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
        <View style={Styles.NicknameContainer}>
          <Text style={Styles.NickName}>닉네임 입력</Text>
          <TextInput
            style={Styles.input4}
            PutNickname={PutNickname}
            value={Nickname}
            placeholder="닉네임 입력"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
      </View>
      <View>
        <View>
          <TextInput
            style={Styles.OverlapContainer}
            PutOverlap={PutOverlap}
            value={Overlap}
            placeholder="중복 확인"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
        <View>
          <TextInput
            style={Styles.OverlapContainer}
            PutOverlap={PutOverlap}
            value={Overlap}
            placeholder="중복 확인"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// 아이디 비밀번호 찾는 화면
function FindScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>아디비번찾기</Text>
    </View>
  );
}
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// 디자인
const Styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#A63737',
  },
  SejongHomeLogo: {
    width: 202,
    height: 200,
    marginLeft: 100,
    marginTop: 150,
  },
  Registerscreen: {},
  OverlapContainer: {
    width: 94,
    height: 45,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    backgroundColor: 'white',
    marginLeft: 270,
    margin: 10,
  },
  RegisterHeaderLetter: {
    fontSize: 16,
    marginLeft: 78,
    marginTop: -63,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  /////////////////////////////////////////////////////
  // 로그인 박스 디자인
  LoginBox: {
    backgroundColor: 'white',
    width: 90,
    height: 36,
    marginTop: 15,
    marginLeft: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  // Login 텍스트 디자인
  LoginText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 17,
    marginTop: 3,
  },
  /////////////////////////////////////////////////////
  QrScreen: {flex: 1},
  /////////////////////////////////////////////////////
  // 회원가입
  RegisterBox: {
    backgroundColor: 'white',
    width: 90,
    height: 36,
    marginTop: 5,
    marginLeft: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  RegisterText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 17,
    marginTop: 3,
  },
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 아이디 비밀번호 찾기
  FindBox: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  FindText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 회원가입 버튼 박스 디자인
  RegisterButton: {
    backgroundColor: 'white',
    width: 90,
    height: 36,
    marginLeft: 150,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  //회원가입 버튼 텍스트 디자인
  RegisterButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  //ID 박스
  IdContainer: {
    marginLeft: 60,
    marginTop: 15,
  },
  /////////////////////////////////////////////////////

  StudendIdContainer: {
    marginLeft: 50,
    marginTop: 100,
  },
  NicknameContainer: {
    marginLeft: 50,
    marginTop: 12,
  },
  /////////////////////////////////////////////////////
  //PWD 박스
  PwdContainer: {
    marginLeft: 60,
    marginTop: 1,
  },
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 세종대학교 행복기숙사
  SejongKr: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
  },
  // Sejong University Dormitory
  SejongEn: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
  },
  // 학교 로고
  SejongLogo: {
    width: 60,
    height: 60,
    margin: 10,
  },
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 아이디 입력
  Id: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white',
    marginLeft: 2,
  },
  // 비밀번호 입력
  Pwd: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 2,
    color: 'white',
  },
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 아이디 입력 칸
  input1: {
    height: 35,
    margin: 0,
    //  marginLeft: 60,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    width: 270,
    height: 55,
    backgroundColor: 'white',
  },
  //비밀번호 입력 칸
  input2: {
    height: 35,
    //  marginLeft: 60,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    width: 270,
    height: 55,
    backgroundColor: 'white',
  },
  /////////////////////////////////////////////////////
  input3: {
    height: 35,
    margin: 0,
    //  marginLeft: 60,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    width: 201,
    height: 45,
    backgroundColor: 'white',
  },

  input4: {
    height: 35,
    margin: 0,
    //  marginLeft: 60,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    width: 201,
    height: 45,
    backgroundColor: 'white',
  },
  StudentId: {
    color: 'black',
    fontFamily: 'Inter-SemiBold',
  },
  NickName: {
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    marginTop: -10,
  },
});

export default App;
