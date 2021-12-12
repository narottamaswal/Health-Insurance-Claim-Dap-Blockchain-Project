module.exports={
  networks:{
    development:{
      host:"127.0.0.1",port:7545,network_id:"*",
      from:"0x10ab814448dadAa55785D440D8222293E59051d0",  
      gas: 4612388 // Gas limit used for deploys

    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  },
  solc:{
    optimizer:{
        enabled:true,runs:200,
    }
  ,
}
}
