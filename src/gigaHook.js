import { useState, useEffect } from 'react'

// бесполезная штука, для условного отображения компонента не нужен такой хук
export function useRender(RenderedComponents, boolean) {

    const [content, setContent] = useState()

    useEffect(()=> {
        boolean? setContent(RenderedComponents) : setContent(null)
    }, [boolean])

    return content
}