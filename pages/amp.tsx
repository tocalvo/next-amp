export const config = { amp: true }

function Amp() {
    const date = new Date()

    return (
        <div>
            <p>Some time: {date.toJSON()}</p>
            <p>Probar https://github.com/dfrankland/react-amphtml demasiado encapsulado? poca documentación que obliga ir a la docu pero no estan todos los compenentes ni la última spec</p>
            <amp-timeago
                width="0"
                height="15"
                datetime={date.toJSON()}
                layout="responsive"
            >
            </amp-timeago>
        </div>
    )
}

export default Amp