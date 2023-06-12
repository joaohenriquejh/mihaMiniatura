import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateProduct from './src/screens/CreateProduct/';
import Home from './src/screens/Home/';
import Lista from './src/screens/Lista';
import Account from './src/screens/Account/';
import AboutApp from './src/screens/AboutApp/';
import { MaterialIcons } from "@expo/vector-icons"
import Camera from "./src/screens/Camera";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#00E5FF', }, //Cor de de fundo do top
                    headerTintColor: '#FFF', // Cor da fonte no topo
                    headerTitleAlign: 'center' // Alinhamento do texto
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateProduct" component={CreateProduct} options={{ title: 'Cadastro de Coleção' }} />
                <Stack.Screen name="Lista" component={Lista} options={{ title: 'Carros' }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name == "Início") {
                        iconName = "home";
                    } else if (route.name == "Carros") {
                        iconName = "favorite";
                    }else if (route.name == "Sair") {
                        iconName = "account-circle";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#FFF", //Cor de ícones ativos
                tabBarInactiveTintColor: "#00E5FF", //Cor de ícones inativos
                tabBarStyle: { backgroundColor: "#121212" }, //Cor de fund da Tab Navigator
                headerShow: true, // Exibição do cabecalho da página interna
                headerTintColor: "#00E5FF", //Cor do texto do topo
                headerTitleAlign: "center", //alinhamento do texto do topo
                headerStyle: { backgroundColor: '#121212' } //Cor de fundo do topo
            })}
        >
            <Tab.Screen name="Início" component={Home} />
            <Tab.Screen name="Carros" component={Lista} />
            <Tab.Screen name="Sair" component={Account} />
        </Tab.Navigator>
    );
}
