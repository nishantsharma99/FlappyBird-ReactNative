
import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class PipeDown extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){
	}
	

	render(){
		return(
			<View  style={{ position : 'absolute', left : this.props.x , bottom : -(100 * vmax)  }}  >
				<Image  resizeMode="stretch" source ={ require('./../images/pipe-up.png')  } 
				 style ={{ width : this.props.width * vmin, height : this.props.height  *vmax }}   />
			</View>
		);
	}

}