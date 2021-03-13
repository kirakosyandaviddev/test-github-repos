import { useHistory } from "react-router"

export const useNavigation = () => {
    const history = useHistory();

    const routes = {
        home: '/',
        search: (page = 1) => `/search/page=${page}`,
        repository: (login, repoName) => `/results/${login}/${repoName}`,
        favorites: '/favorites'
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
        routes,
        navigate,
        back,
        replace
    }
}