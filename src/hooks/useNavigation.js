import { useHistory } from "react-router"

export const useNavigation = () => {
    const history = useHistory();

    const routes = {
        home: '/',
        results: '/results'
    }

    const navigate = (path) => {
        history.push(path)
    }

    const back = () => {
        history.goBack()
    }

    const replace = (path) => {
        history.replace(path)
    }


    return {
        routes,navigate,back,replace
    }
}