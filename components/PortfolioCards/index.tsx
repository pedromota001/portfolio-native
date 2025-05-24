import portfolio_list from "@/constants/portfolios"
import { View } from "react-native"
import PortfolioCard from "../PortfolioCard"

const PortfolioCards = () => {
    return(
        <View>
            {portfolio_list.map((item, index)=> 
                <PortfolioCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                />
            )}
        </View>
    )
}




export default PortfolioCards