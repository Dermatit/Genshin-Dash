import { useState, useEffect } from 'react'

export function useRender(RenderedComponents, boolean) {

    const [content, setContent] = useState()

    useEffect(()=> {
        boolean? setContent(RenderedComponents) : setContent(null)
    }, [boolean])

    return content
}