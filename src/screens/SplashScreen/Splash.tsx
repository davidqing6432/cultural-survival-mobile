import { Text} from "react-native";
import ViewContainer from "../../components/ViewContainer";
import Icon from "../../../assets/icons";


function SplashScreen({ navigation }: RootStackScreenProps<'Splash'>) {
	return (
		<ViewContainer>
			<Icon type="grants_icon" />
			<Text>This is a test screen!</Text>
		</ViewContainer>
	);
}


export default SplashScreen;
