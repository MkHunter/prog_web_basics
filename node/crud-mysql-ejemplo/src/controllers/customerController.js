const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM customers', (err, customers)=>{
            if (err){
                res.json(err);
            }
            /*console.log(customers);*/
            res.render('customer',{
                data: customers
            });
        });
    });
}

controller.save = (req, res)=>{
    /*console.log(req.body); */ //Recibir todos los datos que vienen del formulario
    const data = req.body;

    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customers SET ?', [data], (err,customer)=>{
            res.redirect('/');
        });
    });
}

controller.delete = (req, res)=>{
    const { id } = req.params; /*const id = req.params.id*/
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM customers WHERE id = ?', [id], (err,rows)=>{
            res.redirect('/');
        });
    });
}

controller.edit = (req, res)=>{
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT TOP 1 FROM customers WHERE id = ?', [id], (err,customer)=>{
            //Llamar a la pantalla de edición de datos
            res.render('customer-edit',{
                data: customer.data
            })
        })
    });
}

controller.update = (req,res)=>{
    const { id } = req.params;
    const newCustomer = req.body;

    req.getConnection((err,conn) =>{
        conn.query('UPDATE customers SET ? WHERE id = ?', [newCustomer],(err,rows) =>{
            res.redirect('/');
        })
    })
}

module.exports = controller;