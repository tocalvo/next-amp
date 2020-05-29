
export const config = { amp: true }

// getServerSideProps = ({req}) => {
//     const props = {
//         slug: req.params.slug // lemon
//     }
// return {props}
// }

const Conditionals = ({slug}) => {
    return (
        <div>
            <h1>Prueba Conditionals</h1>


            <h2>Obtener elemento de un listado</h2>
            {/* 
            No usar rutas relativas ya que se cargará en otro dominio, tiene q ser https...
            meterle cors https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.js
            meterle https para jugar en local https://stackoverflow.com/questions/55304101/https-on-localhost-using-nextjs-express
            generar estaticas? no por si tocan en contenful
             */}
            <amp-list src="http://localhost:3000/api/page-info?slug={slug}" layout="fixed-height" height="100" id="page">
                <template type="amp-mustache">
                    <div>{`{{title}}`} : {`{{slug}}`}</div>
                    {`{{#content}}`}
                    type: {`{{type}}`}
                    <div className="{{type}}" data-amp-bind-hidden="'{{type}}' != 'zigzag'">
                        <div className="left" >
                            {`{{#left}}`}
                            <amp-img
                                alt="'{{alt}}'"
                                src="notfound.jpg"
                                data-amp-bind-src="'{{src}}'"
                                layout="fixed"
                                width="306"
                                height="166"
                            >
                            </amp-img>
                            {`{{/left}}`}
                        </div>
                        <div className="right">
                            {`{{#right}}`}
                            <h3>{'{{title}}'}</h3>
                            <p>{'{{description}}'}</p>
                            {`{{/right}}`}
                        </div>
                    </div>
                    <div data-amp-bind-hidden="'{{type}}' != 'fullimg'">
                        fullimg type showed
                    </div>
                    {`{{/content}}`}
                </template>
            </amp-list>
        </div >)

}


export default Conditionals
