import {createContext, useContext, useEffect, useState} from 'react'
import {DefaultConfig} from './_LayoutConfig'
import {
    getEmptyCssClasses,
    getEmptyCSSVariables,
    getEmptyHTMLAttributes,
    LayoutSetup,
    setLayoutIntoLocalStorage,
} from './_LayoutSetup'


const LayoutContext = createContext({
    config: DefaultConfig,
    classes: getEmptyCssClasses(),
    attributes: getEmptyHTMLAttributes(),
    cssVariables: getEmptyCSSVariables(),
    setLayout: (config) => {
    },
    setLayoutType: (layoutType) => {
    },
    setToolbarType: (toolbarType) => {
    },
})

const enableSplashScreen = () => {
    const splashScreen = document.getElementById('splash-screen')
    if (splashScreen) {
        splashScreen.style.setProperty('display', 'flex')
    }
}

const disableSplashScreen = () => {
    const splashScreen = document.getElementById('splash-screen')
    if (splashScreen) {
        splashScreen.style.setProperty('display', 'none')
    }
}

const LayoutProvider = ({children}) => {
    const [config, setConfig] = useState(LayoutSetup.config)
    const [classes, setClasses] = useState(LayoutSetup.classes)
    const [attributes, setAttributes] = useState(LayoutSetup.attributes)
    const [cssVariables, setCSSVariables] = useState(LayoutSetup.cssVariables)

    const setLayout = (_themeConfig) => {
        enableSplashScreen()
        const bodyClasses = Array.from(document.body.classList)
        bodyClasses.forEach((cl) => document.body.classList.remove(cl))
        const updatedConfig = LayoutSetup.updatePartialConfig(_themeConfig)
        setConfig(Object.assign({}, updatedConfig))
        setClasses(LayoutSetup.classes)
        setAttributes(LayoutSetup.attributes)
        setCSSVariables(LayoutSetup.cssVariables)
        setTimeout(() => {
            disableSplashScreen()
        }, 500)
    }

    const setToolbarType = (toolbarType) => {
        const updatedConfig = {...config}
        if (updatedConfig.app?.toolbar) {
            updatedConfig.app.toolbar.layout = toolbarType
        }

        setLayoutIntoLocalStorage(updatedConfig)
        window.location.reload()
    }

    const setLayoutType = (layoutType) => {
        const updatedLayout = {...config, layoutType}
        setLayoutIntoLocalStorage(updatedLayout)
        window.location.reload()
    }

    const value = {
        config,
        classes,
        attributes,
        cssVariables,
        setLayout,
        setLayoutType,
        setToolbarType,
    }

    useEffect(() => {
        disableSplashScreen()
    }, [])

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export {LayoutContext, LayoutProvider}

export function useLayout() {
    return useContext(LayoutContext)
}
