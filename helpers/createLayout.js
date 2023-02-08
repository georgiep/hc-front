export const createLayout = (page_components,page,bodyListDynamic) => {
    const wrappers = page_components.reduce((Wrapper, component) => {
        let { wrapper:{ row,col }, order} = component;
        let keyNameWrapper = `wrapper:${order}`

        let rows = [
            {
                columns: [
                    {
                        component: bodyListDynamic[component.component_name][component.template],
                        data: page[order].rows[row].columns[col],
                        size: page[order]["wrapper"]["rows"][row]["columns"]["sizes"][col]
                    }
                ]
            }
        ]

        let rowsCss = [page[order]["wrapper"]["rows"][row].css]

        if(Wrapper[keyNameWrapper]){

            Wrapper[keyNameWrapper].css = page[order].wrapper.css
            Wrapper[keyNameWrapper].fluid = page[order].wrapper.fluid

            if(Wrapper[keyNameWrapper].rows[row]){
                Wrapper[keyNameWrapper].rows[row].columns.push(
                    {
                        component: bodyListDynamic[component.component_name][component.template],
                        data: page[order].rows[row].columns[col],
                        size: page[order]["wrapper"]["rows"][row]["columns"]["sizes"][col]
                    }
                )

                return {...Wrapper}
            }

            Wrapper[keyNameWrapper].rowsCss.push(page[order]["wrapper"]["rows"][row].css)
            Wrapper[keyNameWrapper].rows.push({
                columns: [
                    {
                        component: bodyListDynamic[component.component_name][component.template],
                        data: page[order].rows[row].columns[col],
                        size: page[order]["wrapper"]["rows"][row]["columns"]["sizes"][col]
                    }
                ]
            })

            return {...Wrapper}
        }

        return {
            ...Wrapper ,
            [keyNameWrapper]: {
                rows: rows,
                css: page[order].wrapper.css,
                fluid: page[order].wrapper.fluid,
                class: page[order].wrapper.class,
                rowsCss: rowsCss
            }
        };
    }, {});

    return wrappers
}