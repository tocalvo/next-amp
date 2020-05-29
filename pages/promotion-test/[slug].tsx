import { useRouter } from 'next/router'
export const config = { amp: true }

// export async function getStaticPaths({slug}) {
//     const paths = [
//         {
//             params: {
//                 id: 'potato'
//             }
//         },
//         {
//             params: {
//                 id: 'lemon'
//             }
//         }
//     ]
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     console.log('paramsssss', params)
//     return
// }

const Promotion = () => {
    const router = useRouter()
    const { slug } = router.query // como lo pillo en amp?¿
    debugger

    return (
        <div>
            <h2>Prueba Slug</h2>
            <p>Que no pirula en amp only</p>
            <p>Promotion Slug: {slug}</p>

            <h2>Prueba a descarga desde un endpoint</h2>
            <p>Que No se refresca hasta hacer un setState</p>
            <amp-state id="patata" src="//localhost:3000/api/page-info?slug=potato"></amp-state>
            <p data-amp-bind-text="'Hello ' + patata.title">Hello World</p>
            <p data-amp-bind-text="'Hello ' + foo">Hello World</p>
            {/* <button on="tap:AMP.setState({foo: 'amp-bind'})">Say "Hello amp-bind"</button> */}

            <h2>Prueba desde un json a pincho</h2>
            <p>Tampoco funciona, to cristo dice q se use amp-list aunque sea con un solo objeto, q se hace para no interferir en la carga inicial</p>
            <amp-state id="lemon">
                {` <script type="application/json">
                    {
                        "title": "limon",
                        "slug": "lemon"
                    }
                </script>`}
            </amp-state>
            <p data-amp-bind-text="'Hello ' + lemon.title"></p>

            <h2>Prueba de un listado</h2>
            <amp-list src="/api/page-info" layout="fixed-height" height="100">
                <template type="amp-mustache">
                    <div>{`{{title}}`}: {`{{slug}}`}</div>
                </template>
            </amp-list>
        </div >)

}

export default Promotion