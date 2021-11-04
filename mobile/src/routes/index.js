import React from 'react';
import { useAuth } from '../context/auth';
import {View,ActivityIndicator} from "react-native";
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
const Routes=()=>{
    const {signed,loading}=useAuth()
    if(loading)
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large' color='#666'/>
        </View>
    )
    return !signed ? <AuthRoutes/> : <AppRoutes/>
}
export default Routes