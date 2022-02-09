import React from 'react';
import {Text,ScrollView, Dimensions,View} from 'react-native';
import { Button, CheckBox, ImageBackground } from 'react-native-web';

const LoginScreen = ({navigation}) => {
    return(
            <ScrollView style = {{flex:1,backgroundColor:'#ffffff'}}  showsVerticalScrollIndicator = {false}>
             <ImageBackground source = {require('./assets/Login_ScreenBackground.png')}
             
             style = {{height:Dimensions.get ('window').height/2.5,
             }}>
             <View style = {styles.brandView}>
                 <Icon name = 'location-sharp' style = {{color:'ffffff',fontSize:100}}/>
                 <Text style = {styles.brandViewText}>Saint Peters High School</Text>
             </View>
             </ImageBackground>
          <View style = {styles.bottomView}>
              <View style = {{padding:40}}>
             <Text style = {{color:'#4632A1',fontSize:34}}>Welcome</Text>
            <Text>Don't have an account?
                <Text style = {{color:'red',fontStyle:'italic'}}>{''}Register now</Text>
            </Text>
              <View style = {{marginTop:50}}>

                  <Item floatingLabel style = {{borderColor:'4632A1'}}>
                      <Label>
                          Email
                      </Label>
                  <Input value = 'example@xyz.com' keyboardType = 'email-adress'/>
                  <Icon name = 'checkmark' style = {{color:'4632A1'}}/>
                </Item>
                <Item floatingLabel style = {{borderColor:'4632A1', marginTop:20}}>
                      <Label>
                         Password
                      </Label>
                  <Input value = '********  '/>
                  <Icon name = 'eye' style = {{color:'4632A1'}}/>
                 </Item>
              </View>

            <View style = {styles.forgotPassView}>
             <View style = {{flex:1,marginLeft:-20}}>
            <ListItem noBorder>
                <CheckBox checked = {true} color = '#4632A1'/>     
                <Body>
                    <Text style = {{color:'#8f9195',alignSelf:'flex-start'}}>{''}Remember Me</Text>
                </Body>
            </ListItem>
             </View>
             <View style = {{flex:1,marginRight:-20}}>
            <ListItem noBorder> 
                <Body>
                    <Text style = {{color:'#8f9195',alignSelf:'flex-end'}}>Forgot Password</Text>
                </Body>
                </ListItem>
             </View>
            </View>

             <View style = {{height:100,justifyContent:'center',alignItems:'center'}}>
                 <Button rounded style = {styles.loginBtn}>
         <Text style = {{color:'ffffff'}}>Login</Text>

                 </Button>
             </View>
<View style = {{flex:1}}>
    
</View>
              </View>
          </View>
          
          </ScrollView>

    )
}
export default LoginScreen;

const styles  = StyleSheet.create({
brandView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
brandViewText:{
    color:'ffffff',
    fontSize:40,
    fontWeight:'bold',
    textTransform:'uppercase',
},
bottomView:{
    flex:1.5,
    backgroundColor:'ffffff',
    bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60,

},
forgotPassView:{
    height:50,
    marginTop:20,
    flexDirection:'row',
},
loginBtn:{
    alignSelf:'center',
    backgroundColor:'#4632A1',
    width:Dimensions.get('window').width/2,
    justifyContent:'center',
},
})