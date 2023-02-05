import { sparrestApi } from "../SparrestApi.js"

export const createApiAd = (Nombre_producto, Descripción_producto, Precio_producto, compra_o_venta) => {
    sparrestApi.post(sparrestApi.endPoints.ads,{
        name: Nombre_producto,
        description:Descripción_producto,
        price:Precio_producto,
        condition:compra_o_venta
    })
    alert('creado exitosamente exitosametne')
}