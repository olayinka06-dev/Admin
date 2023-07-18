import SettingContact from "./Contact";
import SettingPaymentInfo from "./PaymentInfo";
import SettingPreference from "./Preference";
import Profile from "./Profile";
import SettingApi from "./SettingApi";
import SettingCompliance from "./SettingCompliance";


const settingsData = [
    {
        content: (
          <Profile/>  
        )
    },
    {
        content: (
          <SettingContact />
        )
    },
    {
        content: (
            <SettingCompliance />  
        )
    },
    {
        content: (
            <SettingPaymentInfo /> 
        )
        
    },
    {
        content: (
            <SettingPreference />  
        )
        
    },
    {
        content: (
           <SettingApi /> 
        )
        
    },
];
export default settingsData;