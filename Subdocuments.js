use('Outle');

// db.Camisas.insertMany([
//   { 'Color': 'verde', 
//     'Tallaje': 'S',
//     'Marca': 'Zara', 
//     'Tipo': 'Camisa de denim', 
//     'Caracteristicas': [
//         "Cuero",
//         "Exportada"
//     ],
//     'Meses': 13,
//     'DetallesCompra': {
//         'Cliente': 'Fabian Gutierrez',
//         'Edad': 28,
//         'Id': 1075835267,
//         'FechaCompra': new Date('2023-10-20')  
//     }

// },

//     { 'Color': 'rosa', 
//     'Tallaje': 'M',
//     'Marca': 'Gap', 
//     'Tipo': 'Camisa a cuadros', 
//     'Caracteristicas': [
//         "Bolsillos",
//         "Exportada"
//     ],
//     'Meses': 8,
//     'DetallesCompra': {
//         'Cliente': 'Juliana Lopez',
//         'Edad': 19,
//         'Id': 1065954076,
//         'FechaCompra': new Date('2023-10-15')  
//     }

//     },
//     { 'Color': 'gris', 
//     'Tallaje': 'XL',
//     'Marca': 'Nike', 
//     'Tipo': 'Camisa de manga larga', 
//     'Caracteristicas': [
//         "Estampada",
//         "Exportada"
//     ],
//     'Meses': 3,
//     'DetallesCompra': {
//         'Cliente': 'José Ramirez',
//         'Edad': 68,
//         'Id': 1065926793,
//         'FechaCompra': new Date('2023-09-05')  
//     }

//     },

// ]);

// db.Hoodies.insertMany([
//     { 'Color': 'amarillo',
//       'Lavable': true, 
//       'Tallaje': 'XXL',
//       'Marca': 'Adidas', 
//       'Tipo': 'Sin cierre y sin chompa', 
//       'Caracteristicas': [
//           "Exportado",
//           "Algodon"
//       ],
//       'Meses': 27,
//       'DetallesCompra': {
//           'Cliente': 'Estefania Monsalve',
//           'Edad': 31,
//           'Id': 1065883267,
//           'FechaCompra': new Date('2023-07-31')  
//       }
  
//   },
  
//       { 'Color': 'azul', 
//       'Tallaje': 'S',
//       'Marca': 'Polo Ralph Lauren', 
//       'Tipo': 'Con cierre y con chompa', 
//       'Caracteristicas': [
//           "Bolsillos",
//           "Exportado"
//       ],
//       'Meses': 17,
//       'DetallesCompra': {
//           'Cliente': 'Jeronimo Castillo',
//           'Edad': 34,
//           'Id': 1083170964,
//           'FechaCompra': new Date('2023-02-29')  
//       }
  
//       },
//       { 'Color': 'blanco', 
//       'Tallaje': 'XL',
//       'Marca': 'Adidas', 
//       'Tipo': 'Sin cierre y sin chompa', 
//       'Caracteristicas': [
//           "Algodon",
//           "Bolsillos"
//       ],
//       'Meses': 7,
//       'DetallesCompra': {
//           'Cliente': 'Raul Perez',
//           'Edad': 21,
//           'Id': 1067689654,
//           'FechaCompra': new Date('2023-03-28')  
//       }
  
//       },
  
//   ]);

// db.Pantalones.insertMany([
//     { 'Color': 'verde',
//       'Lavable': false, 
//       'Tallaje': 'M',
//       'Marca': 'H&M', 
//       'Tipo': 'Jean', 
//       'Caracteristicas': [
//           "Bota Ancha",
//           "Exportado"
//       ],
//       'Meses': 16,
//       'DetallesCompra': {
//           'Cliente': 'Claudia Mondragon',
//           'Edad': 36,
//           'Id': 1044390865,
//           'FechaCompra': new Date('2023-01-07')  
//       }
  
//   },
  
//       { 'Color': 'rojo', 
//       'Tallaje': 'XXL',
//       'Marca': 'Gap', 
//       'Tipo': 'Cargo', 
//       'Caracteristicas': [
//           "Estampado",
//           "Bota Ancha"
//       ],
//       'Meses': 17,
//       'DetallesCompra': {
//           'Cliente': 'Jeronimo Castillo',
//           'Edad': 34,
//           'Id': 1083170964,
//           'FechaCompra': new Date('2023-02-29')  
//       }
  
//       },
//       { 'Color': 'rosa', 
//       'Tallaje': 'L',
//       'Marca': 'Tommy Hilfiger', 
//       'Tipo': 'Jogger', 
//       'Caracteristicas': [
//           "Estampado",
//           "Bolsillos"
//       ],
//       'Meses': 3,
//       'DetallesCompra': {
//           'Cliente': 'Ximena Zapata',
//           'Edad': 45,
//           'Id': 1055490867,
//           'FechaCompra': new Date('2023-09-04')  
//       }
  
//       },
  
//   ]);


//CRUD Camisas

// db.Camisas.find({'DetallesCompra.Cliente': 'Juliana Lopez'})
// db.Camisas.updateOne({'DetallesCompra.Edad': 28},
// {$set:{'DetallesCompra.Id':1055478945}})
// db.Camisas.deleteOne({'DetallesCompra.Edad':68 })

//CRUD Hoodies
// db.Hoodies.find({'DetallesCompra.Edad': 34})
// db.Hoodies.updateOne({'DetallesCompra.Id': 1065883267},
// {$set:{'DetallesCompra.Edad':35}})
// db.Hoodies.deleteOne({'DetallesCompra.Cliente': 'Jeronimo Castillo'})

//CRUD Pantalones
// db.Pantalones.find({'DetallesCompra.Id': 1055490867})
// db.Pantalones.updateOne({'DetallesCompra.Cliente': 'Jeronimo Castillo' },
// {$set:{'DetallesCompra.FechaCompra':new Date('2023-04-04') }})
// db.Pantalones.deleteOne({'DetallesCompra.Edad': 45 })

//Indices
// db.Camisas.createIndex( {Cliente: 1} )
// db.Camisas.find({'DetallesCompra.Cliente': 'Fabian Gutierrez'}).pretty()

// db.Hoodies.createIndex( {Edad: 1} )
// db.Hoodies.find({'DetallesCompra.Edad': 21 }).pretty()

// db.Pantalones.createIndex( {Id: 1} )
// db.Pantalones.find({'DetallesCompra.Id':1044390865 }).pretty()

// db.Camisas.createIndex( {Edad:1, Id: 1} )
// db.Camisas.find({'DetallesCompra.Edad':28, 'DetallesCompra.Id': 1055478945}).pretty()

// db.Hoodies.createIndex({Cliente:1, Edad: 1})
// db.Hoodies.find({'DetallesCompra.Cliente': 'Raul Perez', 
// 'DetallesCompra.Edad': 21}).pretty()

// db.Pantalones.createIndex({Id: 1, Edad: 1})
// db.Pantalones.find({'DetallesCompra.Id':1044390865, 
// 'DetallesCompra.Edad': 36 }).pretty()

//Agregaciones

//Match
// db.Camisas.aggregate([
//     { $match : { 'DetallesCompra.Cliente' : 'Juliana Lopez', 
//     'DetallesCompra.Edad' : 19 } }
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $match : { 'DetallesCompra.Id' : 1067689654, 
//     'DetallesCompra.Edad' : 21 } }
//   ]).pretty()  

// db.Pantalones.aggregate([
//     { $match : { 'Tallaje' : 'XXL', 
//     'DetallesCompra.Cliente' : 'Jeronimo Castillo' } }
//   ]).pretty() 

//Project
// db.Camisas.aggregate([
//     { $project : { _id : 0, Tallaje : 1, Color : 1} }
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $project : { _id: 0, Marca : 1, Tipo : 1, Meses: 1} }
//   ]).pretty()

// db.Pantalones.aggregate([
//     { $project : { _id : 0, Color : 1, Tipo : 1} }
//   ]).pretty()

//Group
// db.Camisas.aggregate([
//     { $group : { _id : '$Color', totaldocs : { $sum : 1 } } }
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $group : { _id : 'Meses', Promedio : { $avg : '$Meses' } } }
//   ]).pretty()

// db.Pantalones.aggregate([
//     { $group : { _id : '$Tipo', cantidad : { $count :{} } } }
//   ]).pretty()

//Out
// db.Camisas.aggregate([
//     { $group : { _id : '$Tallaje', totaldocs : { $sum : 1 } } },
//     { $out : 'Resultados' }
//   ])

//   db.Resultados.find().pretty()

// db.Hoodies.aggregate([
//     { $group : { _id : 'Meses', Promedio : { $avg : '$Meses' } } },
//     { $out : 'ResultadosPromedio' }
//   ])

//   db.ResultadosPromedio.find().pretty()

// db.Pantalones.aggregate([
//     { $group : { _id : '$Tipo', cantidad : { $sum : 1 } } },
//     { $out : 'ResultadosCantidad' }
//   ])

//   db.ResultadosCantidad.find().pretty()

//Unwind
// db.Camisas.aggregate([
//     { $match : { Color : 'azul' } },
//     { $unwind : '$Caracteristicas' }
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $match : { Marca : 'Zara' } },
//     { $unwind : '$Caracteristicas' }
//   ]).pretty()

// db.Pantalones.aggregate([
//     { $match : { Tallaje : 'S', Marca: 'Nike' } },
//     { $unwind : '$Caracteristicas' }
//   ]).pretty()

//Sort
// db.Camisas.aggregate([
//     { $match : { Color : 'rojo' } },
//     { $unwind : '$Caracteristicas' },
//     { $project : { _id : 0, 'Caracteristicas' : 1} },
//     { $sort : { 'Caracteristicas' : -1 } }
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $match : { Marca : 'H&M' } },
//     { $unwind : '$Caracteristicas' },
//     { $project : { _id : 0, 'Caracteristicas' : 1} },
//     { $sort : { 'Caracteristicas' : 1 } }
//   ]).pretty()

// db.Pantalones.aggregate([
//     { $match : { Tipo : 'Jean' } },
//     { $unwind : '$Caracteristicas' },
//     { $project : { _id : 0, 'Caracteristicas' : 2} },
//     { $sort : { 'Caracteristicas' : -1 } }
//   ]).pretty()

//Limit
// db.Camisas.aggregate([
//     { $match : { Color : 'rojo' } },
//     { $unwind : '$Caracteristicas' },
//     { $project : { _id : 0, 'Caracteristicas' : 1} },
//     { $sort : { 'Caracteristicas' : -1 } },
//     {$limit: 3}
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $match : { Color : 'rojo' } },
//     {$limit: 2}
//   ]).pretty()

// db.Pantalones.aggregate([
//     {$match: {Meses: {$gte: 20}}},
//     {$limit: 3}

//   ]).pretty()

//Add Fields
// db.Camisas.aggregate([
//     { $match : { Marca : 'Adidas' } },
//     { $addFields : { Sede : 'El poblado' } }
//   ]).pretty()

// db.Hoodies.aggregate([
//         { $match : { Tipo : 'Sin cierre y sin chompa' } },
//         { $addFields : { Usado : true } }
//       ]).pretty()
  
//       db.Hoodies.updateMany(
//              { Tipo : 'Sin cierre y sin chompa' } ,
//             { $set: { Usado : true  }}
//           );

// db.Pantalones.aggregate([
//     { $match : { Tipo : 'Jean' } },
//     { $addFields : { Descuento : true } },
//     { $addFields : { Reventa : false } }
//   ]).pretty()

//Count
// db.Camisas.aggregate([
//         { $unwind : '$Caracteristicas' },
//         { $count : 'total_documents' }
//       ]).pretty()

// db.Hoodies.aggregate([
//         { $count : 'total_documents' }
//       ]).pretty()

// db.Pantalones.aggregate([
//     {$match: {Tipo: 'Cargo'}},
//     { $count : 'total_documents' }
//       ]).pretty()

//Lookup
// db.Camisas.aggregate([
//     { $match : { Color : 'gris' } },
//     { $project : { _id : 0, Marca : 1 } },
//     { $lookup : {
//         from : 'Hoodies',
//         localField : 'Color',
//         foreignField : 'Tipo',
//         as : 'extra'
//     } }
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $match : { Tallaje : 'XXL' } },
//     { $project : { _id : 0, Tipo : 1 } },
//     { $lookup : {
//         from : 'Camisas',
//         localField : 'Tallaje',
//         foreignField : 'Color',
//         as : 'extra'
//     } }
//   ]).pretty()

// db.Pantalones.aggregate([
//     { $match : { Tipo : 'Jogger' } },
//     { $project : { _id : 0, Color : 1 } },
//     { $lookup : {
//         from : 'Hoodies',
//         localField : 'Tipo',
//         foreignField : 'Marca',
//         as : 'extra'
//     } }
//   ]).pretty()gi

//SortByCount
// db.Camisas.aggregate([
//     { $sortByCount : '$Meses' }
//   ]).pretty()

// db.Hoodies.aggregate([
//     { $sortByCount : '$DetallesCompra.Edad' }
//   ]).pretty()

// db.Pantalones.aggregate([
//     { $sortByCount : '$Meses' }
//   ]).pretty()
  
  

  
  
  
    
    
    
        











