use("Patissier");
db.createCollection("cake");

db.cake.insertMany([
    {_id:ObjectId(1),
        nome:"Bolo Leite Ninho",
        peso:"2kG",
        preco:187,
        ingedientes:[
            {
                nome:"Claras ovo",
                quantidade:"6 unidades"
            },
            {
                nome:"Leite",
                quantidade:"150ml"
            },
            {
                nome:"Leite em pó",
                quantidade:"300g"
            },
            {
                nome:"Creme de Leite",
                quantidade:"1 caixa"
            },
            {
                nome:"Trigo",
                quantidade:"2 xicaras"
            },
            {
                nome:"Leite Condensado",
                quantidade:"1 caixa"
            }
        ]
    },
    {_id:ObjectId(2),
        nome:"Bolo de amora",
        peso:"850g",
        preco:60,
        ingedientes:[
            {
                nome:"Amora",
                quantidade:"300g"
            },
            {
                nome:"Acucar",
                quantidade:"1 xicara"
            },
            {
                nome:"Ovo",
                quantidade:"2unidades"
            },
            {
                nome:"Trigo",
                quantidade:"1 xicara"
            },
            {
                nome:"Fermento",
                quantidade:"1 colher de sopa"
            },
            {
                nome:"Leite",
                quantidade:"240ml"
            }
        ]
    },
    {_id:ObjectId(3),
        nome:"Cookie",
        peso:"750g",
        preco:52,
        ingedientes:[
            {
                nome:"Chocolate",
                quantidade:"350g"
            },
            {
                nome:"Ovo",
                quantidade:"1unidade"
            },
            {
                nome:"Acucar mascavo",
                quantidade:"1/2 xicara"
            },
            {
                nome:"Manteiga",
                quantidade:"150g"
            },
            {
                nome:"Trigo",
                quantidade:"1 xicara"
            },
            {
                nome:"Essencia de baunilha",
                quantidade:"1 colher de cha"
            }
        ]
    },
    {_id:ObjectId(4),
        nome:"Brownie",
        peso:"450g",
        preco:45,
        ingedientes:[
            {
                nome:"Cacau em Pó",
                quantidade:"1 xicara"
            },
            {
                nome:"Manteiga",
                quantidade:"3/4 xicara"
            },
            {
                nome:"Trigo",
                quantidade:"1 e 1/2 xicara"
            },
            {
                nome:"Ovo",
                quantidade:"4 unidades"
            },
            {
                nome:"Acucar",
                quantidade:"1/2 xicara"
            },
            {
                nome:"Chocolate picado",
                quantidade:"190g"
            }
        ]
    }
])

use("Patissier");
db.cake.deleteOne({_id:ObjectId("00000001a08a94cd1aa93e38")});

use("Patissier");
db.cake.find({}, { nome: true, preco: true });

use("Patissier");
db.cake.find({ preco: { $lte: 70 } }, { nome: true, preco: true });

use("Patissier");
db.cake.updateOne(
    { _id: ObjectId("00000001a08a94cd1aa93e39") },
    {
        $set: {
            nome: "Bolo de amora",
            peso: "850g"
        },
        $push: {
            "ingredientes": {
                nome: "Leite em pó",
                quantidade: "1/2 xicara"
            }
        }
    }
    );
    db.cake.updateOne(
        {_id: ObjectId('333333333333'), "ingrediente.nome": "Ovos"},
        {
            $set: {
                "ingrediente.$.quantidade": 3,
            },
        }
    );