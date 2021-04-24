
 import React, { Component } from 'react';
 import {View} from 'react-native';
 import {globalStyles} from '../Model/globalStyles';
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import MapView,{ PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
 import { locations } from '../Model/Data';
 import CustomMarker from '../Model/CustomMarker';
 
 
 class HeatMap extends Component {
   render() {
     return (
        <View style={[globalStyles.container,{backgroundColor:'red'}]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex:1}}
          initialRegion={{
            latitude:35.793250,
            longitude: 10.661519,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {
            locations.map(marker => (
              <Polygon fillColor = {'#A3BE80'}coordinates = {locations}/>
              
              //Using cercle
              // <Circle center={{latitude: marker.latitude, longitude: marker.longitude}} radius= {550}
              // fillColor = {'#A3BE80'} />
            ))
          }



           <Heatmap points={locations} /> 

          {
        locations.map(marker => (
          <Marker
          coordinate = {{latitude: marker.latitude,
            longitude: marker.longitude}}
            title={marker.title}
          >
          <CustomMarker item = {marker}/>
          </Marker>
        ))
      } 

        </MapView>
      </View>
    )
  }

}

 export default HeatMap;