const jsUcfirst = (string) =>
    string.split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")


export const estados = [
    { "clave": "AGS", "nombre": jsUcfirst("AGUASCALIENTES") },
    { "clave": "BC", "nombre": jsUcfirst("BAJA CALIFORNIA") },
    { "clave": "BCS", "nombre": jsUcfirst("BAJA CALIFORNIA SUR") },
    { "clave": "CMP", "nombre": jsUcfirst("CAMPECHE") },
    { "clave": "COA", "nombre": jsUcfirst("COAHUILA") },
    { "clave": "COL", "nombre": jsUcfirst("COLIMA") },
    { "clave": "CHI", "nombre": jsUcfirst("CHIHUAHUA") },
    { "clave": "CHS", "nombre": jsUcfirst("CHIAPAS") },
    { "clave": "CMX", "nombre": jsUcfirst("CIUDAD DE MEXICO") },
    { "clave": "DGO", "nombre": jsUcfirst("DURANGO") },
    { "clave": "GRO", "nombre": jsUcfirst("GUERRERO") },
    { "clave": "GTO", "nombre": jsUcfirst("GUANAJUATO") },
    { "clave": "HGO", "nombre": jsUcfirst("HIDALGO") },
    { "clave": "JAL", "nombre": jsUcfirst("JALISCO") },
    { "clave": "MCH", "nombre": jsUcfirst("MICHOACAN") },
    { "clave": "MOR", "nombre": jsUcfirst("MORELOS") },
    { "clave": "NAY", "nombre": jsUcfirst("NAYARIT") },
    { "clave": "NL", "nombre": jsUcfirst("NUEVO LEON") },
    { "clave": "OAX", "nombre": jsUcfirst("OAXACA") },
    { "clave": "PUE", "nombre": jsUcfirst("PUEBLA") },
    { "clave": "QR", "nombre": jsUcfirst("QUINTANA ROO") },
    { "clave": "QRO", "nombre": jsUcfirst("QUERETARO") },
    { "clave": "SIN", "nombre": jsUcfirst("SINALOA") },
    { "clave": "SLP", "nombre": jsUcfirst("SAN LUIS POTOSI") },
    { "clave": "SON", "nombre": jsUcfirst("SONORA") },
    { "clave": "TAB", "nombre": jsUcfirst("TABASCO") },
    { "clave": "TLX", "nombre": jsUcfirst("TLAXCALA") },
    { "clave": "TMS", "nombre": jsUcfirst("TAMAULIPAS") },
    { "clave": "VER", "nombre": jsUcfirst("VERACRUZ") },
    { "clave": "YUC", "nombre": jsUcfirst("YUCATAN") },
    { "clave": "ZAC", "nombre": jsUcfirst("ZACATECAS") }
]