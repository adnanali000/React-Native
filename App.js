import React,{useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/Drawer';

//font function

const getFonts = ()=>Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')

});


export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false);

  if(fontLoaded){
    return (
      <Navigator />
    );
  }
  else{
    return(
      <AppLoading 
      startAsync={getFonts}
      onFinish={()=> setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />   
    ) 
  }
}


