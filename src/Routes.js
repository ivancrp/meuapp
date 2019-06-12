import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../src/pages/Login';
import Consulta from '../src/pages/consulta';
import Signup from '../src/pages/Signup';

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true} />
			      <Scene key="signup" component={Signup} title="Cadastro"/>
				  <Scene key="consulta" component={Consulta} title="Pesquisar" />
			    </Stack>
			 </Router>
			)
	}
}
