import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const StockContext = createContext({})

StockContext.Provider.PropTypes = {
    children: PropTypes.node
}

export function StockContextProvider({children}){
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem("obc-react-stock");
        if (!storedItems) return [];
        const items = JSON.parse(storedItems);
        return items.map(item => ({
            ...item,
            createdAt: new Date(item.createdAt),
            updatedAt: new Date(item.updatedAt) 
        }))
    })
    

    const addItem = (item) =>{
        setItems(currentState => {
            const updateItems = [item, ...currentState]
            localStorage.setItem('obc-react-stock', JSON.stringify(updateItems))
            return updateItems
        })
    }

    const getItem = (itemId) =>{
        return items.find(item => item.id === +itemId)
    }

    const updateItem =(itemId, newAttributes) =>{
        setItems(currentState =>{
            const itemIndex = currentState.findIndex(item => item.id === +itemId)
            const updateItems = [...currentState]
            Object.assign(updateItems[itemIndex], newAttributes, {updateAt: new Date()})
            localStorage.setItem('obc-react-stock', JSON.stringify(updateItems))
            return updateItems
        })
    }

    const deleteItem = (itemId) =>{
        setItems(currentState =>{
            const updateItem = currentState.filter(item => item.id !== itemId)
            localStorage.setItem('obc-react-stock', JSON.stringify(updateItem))
            return updateItem
        })
    }

    const stock = {
        items,
        addItem,
        deleteItem,
        getItem, 
        updateItem
    }


    return(
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}