import {useState} from "react";

export const useFetching = (callback: Function):Array<any> => {   // типизация  ???
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }

    }

    return [fetching, isLoading, error]
}

/*
type UseFetchType={
    fetching:()=>Promise<void>
    isLoading:boolean
    error:string
}*/
