import { createContext, useState, ReactNode, FC } from "react";

type FilterContextState = {
    filters: Set<number>;
}

type FilterProviderProps = {
    children: ReactNode;
}

export const FilterContext = createContext<FilterContextState>({
    filters: new Set()
});

export const FilterProvider: FC<FilterProviderProps> = ({children}) => {

    const [filters, setFilters] = useState<Set<number>>(new Set());

    const addFilter = (id: number): void=> {
        setFilters((prevFilters) => new Set(prevFilters).add(id));
    }

    const removeFilter = (id: number): void => {
        // if(!filters.has(id)) return;
        setFilters(prevFilters => {
            const newFilters = new Set(prevFilters);
            newFilters.delete(id);
            return newFilters;
        });
    }

    const value  = { filters, addFilter, removeFilter }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}