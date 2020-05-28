
export const config = { amp: true }

const Conditionals = () => {
    return (
        <div>
            <h1>Prueba Conditionals</h1>


            <h2>Obtener elemento de un listado</h2>
            <amp-list src="/api/page-info?slug=potato" layout="fixed-height" height="100" id="page">
                <template type="amp-mustache">
                    <div>{`{{title}}`} -> {`{{slug}}`}</div>
                    {`{{#content}}`}
                    type: {`{{type}}`}
                    <div className="{{type}}" data-amp-bind-hidden="type != 0">
                        zigzag type showed
                    </div>
                    <div data-amp-bind-hidden="type != 1">
                        fullimg type showed
                    </div>
                    {`{{/content}}`}
                </template>
            </amp-list>
        </div >)

}


export default Conditionals

{/* <div data-amp-bind-hidden="left" className="left" >
                            {`{{#src}}`}
                            {`{{src}}`}
                            {`{{/src}}`}
                        </div>
                        <div className="right"></div> */}